import { atom } from 'recoil';

// 전체 응급실 페이지네이션
const ersPaginationState = atom({
  key: 'ersPaginationState',
  default: 1,
});

export { ersPaginationState };
