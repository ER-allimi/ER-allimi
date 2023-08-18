import styled from '@emotion/styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  CurrentLocationButton,
  ZoomInButton,
  ZoomOutButton,
  CurrentLocationOverlay,
  ErMarkerOverlay,
  InfoWindowOverlay,
} from '@components';
import { getErList, getErRTavailableBed } from '@services';
import { getDistanceFromLocation, getErRTavailableBedByColor } from '@utils';
import { renderToString } from 'react-dom/server';
import { useRecoilValue } from 'recoil';
import { userLocationState } from '@stores';

const { kakao } = window;
const RADIUS = 2000;
const DEFAULT_MARKER_COLOR = '#222222';

function Map() {
  // 지도 표시될 HTML 요소
  const mapContainer = useRef(null);
  const { latitude, longitude } = useRecoilValue(userLocationState);
  const defaultCenter = new kakao.maps.LatLng(latitude, longitude);
  const [map, setMap] = useState(null);
  const [emergencyList, setEmergencyList] = useState([]);
  const [erRTavailbleBedList, setErRTavailbleBedList] = useState([]);
  const [locPosition, setLocPosition] = useState(defaultCenter);
  const [centerPosition, setCenterPosition] = useState(null);
  const [circleOverlay, setCircleOverlay] = useState(null);
  const [erMarkers, setErMarkers] = useState([]);
  // console.log(latitude, longitude);

  /** 카카오 지도 생성 */
  const createMap = () => {
    const options = {
      // 지도 중심 좌표 (위도, 경도)
      center: new kakao.maps.LatLng(latitude, longitude),
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
  };

  /** 응급실 기본정보 데이터 가져와 상태관리하는 함수 */
  const fetchErDB = async () => {
    try {
      const result = await getErList();
      setEmergencyList(result);
    } catch (error) {
      console.error(error);
    }
  };

  /** 응급실 가용병상 데이터 가져와 상태관리하는 함수 */
  const fetchErRTAvailableBedDB = async ([stage1, stage2]) => {
    try {
      const result = await getErRTavailableBed({
        STAGE1: stage1,
        STAGE2: stage2,
      });
      setErRTavailbleBedList(result);
    } catch (error) {
      console.error(error);
    }
  };

  /** 현재 위치에서 반경 내에 있는 응급실 마커 그려줌 */
  const createNearByErMarker = async () => {
    //모든 마커 지우기
    erMarkers.forEach((marker) => marker.setMap(null));
    setErMarkers([]);
    const nearByErArray = emergencyList
      .map((item) => {
        const name = item.dutyName;
        const erId = item.hpid;
        const stage = item.dutyAddr.split(' ');
        const [stage1, stage2] = [stage[0], stage[1]];
        const lat = item.wgs84Lat;
        const lon = item.wgs84Lon;

        // km단위
        const distanceFromLocation = getDistanceFromLocation(
          centerPosition.La,
          centerPosition.Ma,
          lon,
          lat,
        );
        if (distanceFromLocation <= RADIUS / 1000) {
          return { name, erId, lat, lon, stage1, stage2 };
        } else return null;
      })
      .filter((item) => item !== null)
      .sort((a, b) => a.distanceFromLocation - b.distanceFromLocation);

    const nearByErCount = nearByErArray.length;
    const newErMarkers = nearByErArray.map((item, idx) => {
      const name = item.name;
      const erId = item.erId;
      const lat = item.lat;
      const lon = item.lon;
      const newStages = [item.stage1, item.stage2];
      fetchErRTAvailableBedDB(newStages);

      console.log(erRTavailbleBedList, 'filter 오류인지 확인');
      const matchEr = erRTavailbleBedList.filter(
        (erInfo) => erInfo.hpid === erId,
      )[0];

      const availableBed = matchEr ? matchEr.hvec : null;
      const totalBed = matchEr ? matchEr.hvs01 : null;
      const markerColor =
        availableBed && totalBed
          ? getErRTavailableBedByColor(availableBed, totalBed)
          : DEFAULT_MARKER_COLOR;

      const styledMarker = renderToString(
        <ErMarkerOverlay markerColor={markerColor} order={idx + 1} />,
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
    const latlng = map.getCenter();
    setCenterPosition(latlng);
  };

  // 첫 렌더링 시 지도 생성
  useEffect(() => {
    createMap();
    fetchErDB();
  }, [latitude, longitude]);

  useEffect(() => {
    // 응급실 데이터 로딩이 완료된 후에 처리
    if (emergencyList.length > 0) {
      // 중심 위치 변경 시 응급실 마커 생성
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
          radius: RADIUS,
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
    }
  }, [map, centerPosition, emergencyList]);
  
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
