const RED = '#E31926';
const YELLOW = '#FFE710';
const GREEN = '#2B8F06';

/** 가용병상률에 따라 컬러를 반환하는 함수 */
const getErRTavailableBedByColor = (availableBed, totalBed) => {
  const availableRate = (availableBed / totalBed) * 100;
  if (availableRate >= 80) {
    return GREEN;
  } else if (availableRate >= 50) {
    return YELLOW;
  } else {
    return RED;
  }
};

export { getErRTavailableBedByColor };
