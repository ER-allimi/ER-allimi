import { atom } from 'recoil';

// 병원 상세 페이지의 해당 병원 id
const targetHpIdState = atom({
  key: 'targetHpId',
  default: '',
});

export { targetHpIdState };
