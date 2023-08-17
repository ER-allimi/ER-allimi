import { theme } from '@styles/'
const red = theme.colors.red;
const yellow = theme.colors.yellow;
const green = theme.colors.green;

/** 가용병상률에 따라 컬러를 반환하는 함수 */
const getErRTavailableBedByColor = (availableBed, totalBed) => {
  const availableRate = (availableBed / totalBed) * 100;
  if (availableRate >= 80) {
    return green;
  } else if (availableRate >= 50) {
    return yellow;
  } else {
    return red;
  }
};

export { getErRTavailableBedByColor };
