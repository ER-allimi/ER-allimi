import { atom } from 'recoil';

interface erItemType {
  hpid: string;
  dutyName: string;
  dutyEmclsName: string;
  dutyAddr: string;
  dutyTel3: string;
  wgs84Lon: number;
  wgs84Lat: number;
}

// 전체 응급실 목록
const ersListState = atom<erItemType[]>({
  key: 'ersListState',
  default: [],
});

export { ersListState };
