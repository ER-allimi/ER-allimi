import { atom } from 'recoil';

// content 순서
/* 
1. 응급실 가용 병상
2. 입원실 가용 병상
3. 중증질환 수술 여부
**/

// HpDetail 페이지에서 사용자가 현재 선택한 content
const selectedHpDetailContentState = atom({
  key: 'selectedHpDetailContentState',
  default: 0,
});

export { selectedHpDetailContentState };
