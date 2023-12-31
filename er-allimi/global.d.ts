declare interface Window {
  daum: any;
}

// 한 응급실 기본 정보 데이터
declare interface erItemType {
  hpid: string;
  dutyName: string;
  dutyEmclsName: string;
  dutyAddr: string;
  dutyTel3: string;
  wgs84Lon: number;
  wgs84Lat: number;
}

// 한 응급실의 실시간 가용 병상 데이터
declare interface erRTavailableBedInfoType {
  [key: string]: any;
}

// 반경 내 응급실 데이터
declare interface erItemWithRadiusStateType {
  hpInfo: erItemType;
  availableBedInfo: erRTavailableBedInfoType | undefined;
  distanceFromLocation: number;
}
