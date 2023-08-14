import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import {
  CurrentLocationButton,
  ZoomInButton,
  ZoomOutButton,
} from '@components/map';
import { getErList } from '@services';
import { getDistanceFromLocation } from '@utils';

const { kakao } = window;
const RADIUS = 2000;
const LAT = 33.450701;
const LNG = 126.570667;
const defaultCenter = new kakao.maps.LatLng(LAT, LNG);

function Map() {
  // 지도 표시될 HTML 요소
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [emergencyList, setEmergencyList] = useState([]);
  const [locPosition, setLocPosition] = useState(defaultCenter);
  const [centerPosition, setCenterPosition] = useState(locPosition);
  const [circleOverlay, setCircleOverlay] = useState(null);
  const [erMarkers, setErMarkers] = useState([]);

  // 카카오 지도 생성
  const createMap = () => {
    const options = {
      // 지도 중심 좌표 (위도, 경도)
      center: defaultCenter,
      //지도의 레벨(확대, 축소 정도)
      level: 8,
    };
    const map = new kakao.maps.Map(mapContainer.current, options);
    setMap(map);

    // 현재 위치 찾아 지도에 표시 및 반경 오버레이
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // 현재 위치
        const locPosition = new kakao.maps.LatLng(lat, lon);
        setLocPosition(locPosition);
        const current = `<div style="position: relative;
            z-index: 100;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            border: none;
            background: rgb(234, 69, 79);
            background: radial-gradient(
              circle,
              rgba(234, 69, 79, 0.9472382703081232) 13%,
              rgba(234, 69, 79, 0.7246049661399548) 30%,
              rgba(255, 255, 255, 0.4514672686230248) 78%
            );"></div>`;
        const customOverlay = new kakao.maps.CustomOverlay({
          position: locPosition,
          content: current,
        });
        customOverlay.setMap(map);
        setCenterPosition(locPosition);
        map.setCenter(centerPosition);
      });
    } else {
      setLocPosition(defaultCenter);
      setCenterPosition(defaultCenter);
      map.setCenter(locPosition);
    }
  };

  const fetchErDB = async () => {
    const result = await getErList();
    setEmergencyList(result);
  };

  // 현재 위치에서 반경 내에 있는 응급실 마커 그려줌
  const createNearByErMarker = () => {
    erMarkers.forEach((marker) => marker.setMap(null));
    setErMarkers([]);

    const nearByErArray = emergencyList.filter((item) => {
      const lat = item.wgs84Lat;
      const lon = item.wgs84Lon;

      // km단위
      const distanceFromLocation = getDistanceFromLocation(
        centerPosition.La,
        centerPosition.Ma,
        lon,
        lat,
      );

      return distanceFromLocation <= RADIUS / 1000;
    });

    const newErMarkers = nearByErArray.map((item) => {
      const name = item.dutyName;
      const lat = item.wgs84Lat;
      const lon = item.wgs84Lon;
      const newMarker = new kakao.maps.Marker({
        map: map,
        title: name,
        position: new kakao.maps.LatLng(lat, lon),
      });
      return newMarker;
    });
    setErMarkers(newErMarkers);
  };

  // 중심 위치 변경 시 위도, 경도 받아옴
  const handleCenterChange = () => {
    const latlng = map.getCenter();
    setCenterPosition(latlng);
  };

  // 첫 렌더링 시 지도 생성
  useEffect(() => {
    createMap();
    fetchErDB();
    console.log(centerPosition)
  }, []);

  useEffect(() => {
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
  }, [map, centerPosition]);

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
