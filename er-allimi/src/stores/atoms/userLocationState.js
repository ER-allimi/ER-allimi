import { atom } from 'recoil';
// 위치 기본값 서울역

const userLocationState = atom({
  key: 'userLocationState',
  default: {
    latitude: 37.55460495198728,
    longitude: 126.97058657543889,
    address: {
      address: '동자동 43-205',
      road_address: '서울 용산구 한강대로 405',
    },
  },
});

export { userLocationState };
