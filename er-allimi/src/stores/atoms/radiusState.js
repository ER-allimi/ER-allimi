import { atom } from 'recoil';

// 반경
const radiusState = atom({
  key: 'radiusState',
  default: 2,
});

export { radiusState };
