import { atom } from 'recoil';
import {
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE,
  DEFAULT_ADDRESS,
  DEFAULT_ROAD_ADDRESS,
} from '@constants';

// 위치 기본값 서울역
const userLocationState = atom({
  key: 'userLocationState',
  default: {
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
    address: {
      address: DEFAULT_ADDRESS,
      road_address: DEFAULT_ROAD_ADDRESS,
    },
  },
});

export { userLocationState };
