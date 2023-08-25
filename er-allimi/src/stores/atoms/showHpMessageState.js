import { atom } from 'recoil';

// HpDetail 페이지에서 message 나타냄 여부
const showHpMessageState = atom({
  key: 'showHpMessageState',
  default: true,
});

export { showHpMessageState };
