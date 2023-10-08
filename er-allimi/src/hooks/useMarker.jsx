import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { sortedErsWithRadiusState, ersPaginationState } from '@stores';
import { ERS_CNT_PER_PAGE } from '@constants';
import { getErRTavailableBedByColor } from '@utils';
import { renderToString } from 'react-dom/server';
import { ErMarkerOverlay, InfoWindowOverlay } from '@components';
const DEFAULT_MARKER_COLOR = '#222222';

const useMarker = (map, setupMarkerEventListeners) => {
  const [erMarkers, setErMarkers] = useState([]);

  const sortedErsWithRadius = useRecoilValue(sortedErsWithRadiusState);
  const ersPagination = useRecoilValue(ersPaginationState);

  useEffect(() => {
    if (!map) return;

    const start = (ersPagination - 1) * ERS_CNT_PER_PAGE;
    const end = ersPagination * ERS_CNT_PER_PAGE;
    const sortedErsPerPage = sortedErsWithRadius.slice(start, end);

    const nearByErCount = sortedErsPerPage.length;
    const newInfowindows = [];
    const newErMarkers = sortedErsPerPage.map((item, idx) => {
      const hpInfo = item.hpInfo;
      const hpId = hpInfo.hpid;
      const stage1 = hpInfo.dutyAddr.split(' ')[0];
      const stage2 = hpInfo.dutyAddr.split(' ')[1];
      const availableBedInfo = item.availableBedInfo;
      const name = hpInfo.dutyName;
      const lat = hpInfo.wgs84Lat;
      const lon = hpInfo.wgs84Lon;

      const availableBed = availableBedInfo ? availableBedInfo.hvec : null;
      const totalBed = availableBedInfo ? availableBedInfo.hvs01 : null;

      const markerColor = totalBed
        ? getErRTavailableBedByColor(availableBed, totalBed)
        : DEFAULT_MARKER_COLOR;

      const styledMarker = renderToString(
        <ErMarkerOverlay markerColor={markerColor} order={start + idx + 1} />,
      );
      const styledInfoWindow = renderToString(
        <InfoWindowOverlay
          name={name}
          availableBed={availableBed}
          totalBed={totalBed}
          markerColor={markerColor}
        />,
      );

      const newMarker = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(lat, lon),
        map: map,
        content: styledMarker,
        clickable: true,
        zIndex: nearByErCount - idx + 1,
      });

      const newInfoWindow = new kakao.maps.CustomOverlay({
        content: styledInfoWindow,
        position: newMarker.getPosition(),
        yAnchor: 1,
        zIndex: nearByErCount + 1,
      });
      newInfowindows.push(newInfoWindow);
      setupMarkerEventListeners(hpId, stage1, stage2,newInfoWindow);
      return newMarker;
    });
    setErMarkers(newErMarkers);

    //모든 마커 지우기
    return () => {
      newErMarkers.forEach((marker) => marker.setMap(null));
      newInfowindows.forEach((infoWindow) => infoWindow.setMap(null));
    };
  }, [map, sortedErsWithRadius, ersPagination]);

  return erMarkers;
};

export default useMarker;
