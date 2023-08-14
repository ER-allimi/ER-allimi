import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import CurrentLocationButton from '@components/map/CurrentLocationButton';

const { kakao } = window;
const RADIUS = 2000;
const defaultCenter = new kakao.maps.LatLng(33.450701, 126.570667);

function KakaoMap() {
  // 지도 표시될 HTML 요소
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [locPosition, setLocPosition] = useState(defaultCenter);

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
    const control = new kakao.maps.ZoomControl();
    map.addControl(control);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

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
        map.setCenter(locPosition);
        const circle = new kakao.maps.Circle({
          map,
          radius: RADIUS,
          center: locPosition,
          strokeWeight: 1,
          strokeColor: '#a3a3a3',
          strokeOpacity: 0.27,
          strokeStyle: 'solid',
          fillColor: '#a3a3a3',
          fillOpacity: 0.2,
        });
      });
    } else {
      setLocPosition(defaultCenter);
      map.setCenter(locPosition);
    }
  };

  useEffect(() => {
    createMap();
  }, []);

  return (
    <MapContainer ref={mapContainer}>
      <CurrentLocationButton map={map} currentLocation={locPosition} />
    </MapContainer>
  );
}

const MapContainer = styled.div`
  width: 1024px;
  height: 1024px;
`;

export default KakaoMap;