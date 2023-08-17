import { atom } from 'recoil';

const userLocationState = atom({
  key: 'userLocationState',
  default: {
    latitude: null,
    longitude: null,
    address: {},
  },
});

export { userLocationState };
