import { atom } from 'recoil';

interface erRTavailableBedInfoType {
  [key: string]: any;
}

// 전체 응급실 실시간 가용 병상 목록
const ersRTavailableBedState = atom<erRTavailableBedInfoType[]>({
  key: 'ersRTavailableBedState',
  default: [],
});

export { ersRTavailableBedState };
