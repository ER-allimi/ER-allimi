import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import {
  CurrentLocationButton,
  ZoomInButton,
  ZoomOutButton,
  CurrentLocationOverlay,
} from '@components';
import { useNavigate, useParams } from 'react-router-dom';
import { getPathHospitalDetail } from '@utils';
import { renderToString } from 'react-dom/server';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  userLocationState,
  mapCenterPointState,
  radiusState,
  ersPaginationState,
  ersListState,
} from '@stores';
import { KM_TO_M_UNIT } from '@constants';
import { useMarker } from '@hooks';

const { kakao } = window;

function Map() {
  const { latitude, longitude } = useRecoilValue(userLocationState);
  const [centerPoint, setCenterPoint] = useRecoilState(mapCenterPointState);
  const resetPagination = useResetRecoilState(ersPaginationState);
  const ersList = useRecoilValue(ersListState);

  // 지도 표시될 HTML 요소
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const radius = useRecoilValue(radiusState);
  const defaultCenter = new kakao.maps.LatLng(latitude, longitude);
  const [locPosition, setLocPosition] = useState(defaultCenter);
  const erMarkers = useMarker(map, setupMarkerEventListeners);
  const navigate = useNavigate();
  const hpIdParameter = useParams().hospitalId;

  /** 카카오 지도 생성 */
  const createMap = () => {
    const options = {
      // 지도 중심 좌표 (위도, 경도)
      center: defaultCenter,
      //지도의 레벨(확대, 축소 정도)
      level: 8,
    };
    const map = new kakao.maps.Map(mapContainer.current, options);
    setMap(map);

    const newLocPosition = new kakao.maps.LatLng(latitude, longitude);
    const currentLocationCircle = renderToString(<CurrentLocationOverlay />);
    new kakao.maps.CustomOverlay({
      position: newLocPosition,
      map: map,
      content: currentLocationCircle,
    });
    setLocPosition(newLocPosition);
    setCenterPoint({ latitude, longitude });
  };

  /** 마커의 이벤트 리스너 설정 */
  function setupMarkerEventListeners(hospitalId, infoWindow) {
    const markerDiv = document.querySelectorAll('.markerHover');
    const lastElement = markerDiv[markerDiv.length - 1];

    if (!lastElement) return;

    lastElement.addEventListener('click', () => {
      const targetHpAddr = ersList.find(
        (item) => item.hpid === hospitalId,
      ).dutyAddr;
      const [stage1, stage2] = targetHpAddr.split(' ');
      navigate(getPathHospitalDetail({ stage1, stage2, hospitalId }));
    });

    lastElement.addEventListener('mouseover', () => {
      infoWindow.setMap(map);
    });

    lastElement.addEventListener('mouseout', () => {
      infoWindow.setMap(null);
    });
  }

  /** 중심 위치 변경 시 중심 위도, 경도 업데이트 및 페이지네이션 초기화 */
  const handleCenterChange = () => {
    const latLngPoint = map.getCenter();
    setCenterPoint({ latitude: latLngPoint.Ma, longitude: latLngPoint.La });
    resetPagination();
  };

  // 반경 오버레이
  const newCircleOverlay = new kakao.maps.Circle({
    radius: radius * KM_TO_M_UNIT,
    center: new kakao.maps.LatLng(centerPoint.latitude, centerPoint.longitude),
    strokeWeight: 1,
    strokeColor: '#a3a3a3',
    strokeOpacity: 0.27,
    strokeStyle: 'solid',
    fillColor: '#a3a3a3',
    fillOpacity: 0.2,
  });

  // 첫 렌더링 시 지도 생성
  useEffect(() => {
    createMap();
  }, [latitude, longitude]);

  // 중심 위치 변경 시 응급실 마커, 반경 오버레이 생성
  useEffect(() => {
    if (!map) return;

    kakao.maps.event.addListener(map, 'center_changed', handleCenterChange);
    newCircleOverlay.setMap(map);

    return () => {
      erMarkers.forEach((marker) => marker.setMap(null));
      newCircleOverlay.setMap(null);
    };
  }, [map, centerPoint, radius, latitude, longitude]);

  // 디테일 페이지로 이동 시
  useEffect(() => {
    if (!map) return;
    if (!hpIdParameter) return;
    if (ersList.length === 0) return;
    const targetHp = ersList.find((item) => item.hpid === hpIdParameter);
    if (!targetHp) {
      navigate('/not-found');
      return;
    }

    const targetHpPosition = new kakao.maps.LatLng(
      targetHp.wgs84Lat,
      targetHp.wgs84Lon,
    );
    setCenterPoint({
      latitude: targetHp.wgs84Lat,
      longitude: targetHp.wgs84Lon,
    });
    map.setCenter(targetHpPosition);
  }, [map, hpIdParameter]);

  return (
    <MapContainer ref={mapContainer}>
      <ControlWrapper>
        <CurrentLocationButton map={map} currentLocation={locPosition} />
        <ZoomInButton map={map} />
        <ZoomOutButton map={map} />
      </ControlWrapper>
    </MapContainer>
  );
}

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ControlWrapper = styled.div`
  position: absolute;
  top: 20vh;
  right: 5vw;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    right: 4vw;
    top: 10vh;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    right: 3vw;
    top: 9vh;
  }
`;
export default Map;
