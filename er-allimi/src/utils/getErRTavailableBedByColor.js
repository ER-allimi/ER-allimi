import { theme } from '@styles/';
const red = theme.colors.red;
const yellow = theme.colors.yellow;
const green = theme.colors.green;

/** 가용병상률에 따라 컬러를 반환하는 함수 */
const getErRTavailableBedByColor = (
  availableBed,
  totalBed,
  isolation = false,
) => {
  const availableRate = (availableBed / totalBed) * 100;

  if (isolation) {
    if (availableRate === 100) {
      return green;
    } else if (availableRate >= 50) {
      return yellow;
    } else {
      return red;
    }
  } else {
    if (availableRate >= 80) {
      return green;
    } else if (availableRate >= 50) {
      return yellow;
    } else {
      return red;
    }
  }
};

export { getErRTavailableBedByColor };
