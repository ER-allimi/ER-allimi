import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import {
  CurrentLocationButton,
  ZoomInButton,
  ZoomOutButton,
  CurrentLocationOverlay,
  ErMarkerOverlay,
  InfoWindowOverlay,
} from '@components';

import { getErRTavailableBedByColor } from '@utils';
import { renderToString } from 'react-dom/server';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  userLocationState,
  mapCenterPointState,
  sortedErsWithRadiusState,
  radiusState,
  ersPaginationState
} from '@stores';
import { KM_TO_M_UNIT, ERS_CNT_PER_PAGE } from '@constants';

const { kakao } = window;
const DEFAULT_MARKER_COLOR = '#222222';

function Map() {
  // 지도 표시될 HTML 요소
  const mapContainer = useRef(null);
  const { latitude, longitude } = useRecoilValue(userLocationState);
  const [map, setMap] = useState(null);
  const setCenterPoint = useSetRecoilState(mapCenterPointState);
  const sortedErsWithRadius = useRecoilValue(sortedErsWithRadiusState);
  const radius = useRecoilValue(radiusState);
  const defaultCenter = new kakao.maps.LatLng(latitude, longitude);
  const [locPosition, setLocPosition] = useState(defaultCenter);
  const [centerPosition, setCenterPosition] = useState(defaultCenter);
  const [circleOverlay, setCircleOverlay] = useState(null);
  const [erMarkers, setErMarkers] = useState([]);
  const ersPagination = useRecoilValue(ersPaginationState);

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
    setCenterPosition(newLocPosition);
    setCenterPoint({ latitude, longitude });
  };

  /** 현재 위치에서 반경 내에 있는 응급실 마커 그려줌 */
  const createNearByErMarker = () => {
    //모든 마커 지우기
    erMarkers.forEach((marker) => marker.setMap(null));
    setErMarkers([]);

    const start = (ersPagination - 1) * ERS_CNT_PER_PAGE;
    const end = ersPagination * ERS_CNT_PER_PAGE;
    const sortedErsPerPage = sortedErsWithRadius.slice(start, end);

    const nearByErCount = sortedErsPerPage.length;
    const newErMarkers = sortedErsPerPage.map((item, idx) => {
      const hpInfo = item.hpInfo;
      const availableBedInfo = item.availableBedInfo;
      const name = hpInfo.dutyName;
      const lat = hpInfo.wgs84Lat;
      const lon = hpInfo.wgs84Lon;

      const availableBed = availableBedInfo ? availableBedInfo.hvec : null;
      const totalBed = availableBedInfo ? availableBedInfo.hvs01 : null;

      const markerColor =
        availableBed && totalBed
          ? getErRTavailableBedByColor(availableBed, totalBed)
          : DEFAULT_MARKER_COLOR;

      const styledMarker = renderToString(
        <ErMarkerOverlay markerColor={markerColor} order={start + idx + 1} />,
      );

      const newMarker = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(lat, lon),
        map: map,
        content: styledMarker,
        clickable: true,
        zIndex: nearByErCount - idx + 1,
      });

      const styledInfoWindow = renderToString(
        <InfoWindowOverlay
          name={name}
          availableBed={availableBed}
          totalBed={totalBed}
          markerColor={markerColor}
        />,
      );
      const newInfoWindow = new kakao.maps.CustomOverlay({
        content: styledInfoWindow,
        position: newMarker.getPosition(),
        yAnchor: 1,
        zIndex: nearByErCount + 1,
      });

      const markerDiv = document.querySelectorAll('.markerHover');
      const lastElement = markerDiv[markerDiv.length - 1];

      if (lastElement) {
        lastElement.addEventListener('mouseover', () => {
          newInfoWindow.setMap(map);
        });
        lastElement.addEventListener('mouseout', () => {
          newInfoWindow.setMap(null);
        });
      }
      return newMarker;
    });
    setErMarkers(newErMarkers);
  };

  /** 중심 위치 변경 시 위도, 경도 받아옴 */
  const handleCenterChange = () => {
    const latLngPoint = map.getCenter();
    setCenterPosition(latLngPoint);
    setCenterPoint({ latitude: latLngPoint.Ma, longitude: latLngPoint.La });
  };

  // 첫 렌더링 시 지도 생성
  useEffect(() => {
    createMap();
  }, [latitude, longitude]);

  // 중심 위치 변경 시 응급실 마커, 반경 오버레이 생성
  useEffect(() => {
    if (map) {
      kakao.maps.event.addListener(map, 'center_changed', handleCenterChange);
      createNearByErMarker();

      // 기존 circle 오버레이 제거
      if (circleOverlay) {
        circleOverlay.setMap(null);
      }

      // 새로운 circle 오버레이 생성 및 추가
      const newCircleOverlay = new kakao.maps.Circle({
        map,
        radius: radius * KM_TO_M_UNIT,
        center: centerPosition,
        strokeWeight: 1,
        strokeColor: '#a3a3a3',
        strokeOpacity: 0.27,
        strokeStyle: 'solid',
        fillColor: '#a3a3a3',
        fillOpacity: 0.2,
      });

      setCircleOverlay(newCircleOverlay);
    }
  }, [map, centerPosition, radius, ersPagination]);

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
`;
export default Map;
