import { selector } from 'recoil';
import {
  ersListState,
  mapCenterPointState,
  radiusState,
  ersRTavailableBedState,
} from '@stores';
import { getDistanceFromLocation } from '@utils';

// 반경 내 응급실 목록 (각 응급실 마다, 응급실 기본 정보 + 응급실의 실시간 가용 병상 정보 + 응급실의 거리)
const ersWithRadiusState = selector({
  key: 'ersWithRadiusState',
  get: ({ get }) => {
    const ersList = get(ersListState);
    const ersRTavailableBed = get(ersRTavailableBedState);
    const mapCenterPoint = get(mapCenterPointState);
    const radius = get(radiusState);

    if (ersList.length === 0) return [];
    if (ersRTavailableBed.length === 0) return [];
    if (!mapCenterPoint.latitude || !mapCenterPoint.longitude) return [];

    const ersWithRadius = ersList
      .map((item) => {
        // km단위
        const distanceFromLocation = getDistanceFromLocation(
          mapCenterPoint.longitude,
          mapCenterPoint.latitude,
          item.wgs84Lon,
          item.wgs84Lat,
        );
        return { info: item, distanceFromLocation };
      })
      .filter((item) => {
        return item.distanceFromLocation <= radius;
      })
      .map(({ info, distanceFromLocation }) => {
        const {
          hpid: hpId,
          dutyName,
          dutyEmclsName,
          dutyAddr,
          dutyTel3,
        } = info;

        return {
          hpInfo: { hpId, dutyName, dutyEmclsName, dutyAddr, dutyTel3 },
          availableBedInfo: ersRTavailableBed.find((er) => er.hpid === hpId),
          distanceFromLocation,
        };
      });

    return ersWithRadius;
  },
});

export { ersWithRadiusState };
