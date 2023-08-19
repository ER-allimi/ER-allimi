import { atom } from 'recoil';
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '@constants';

// 지도 중심 위치
const mapCenterPointState = atom({
  key: 'mapCenterPointState',
  default: {
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
  },
});

export { mapCenterPointState };
