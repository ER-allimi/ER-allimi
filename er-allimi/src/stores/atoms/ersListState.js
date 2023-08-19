import { atom } from 'recoil';

// 전체 응급실 목록
const ersListState = atom({
  key: 'ersListState',
  default: [],
});

export { ersListState };
