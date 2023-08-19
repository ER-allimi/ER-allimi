import { atom } from 'recoil';
import { SORTING_DISTANCE } from '@constants';

// 정렬
const sortingState = atom({
  key: 'sortingState',
  default: SORTING_DISTANCE,
});

export { sortingState };
