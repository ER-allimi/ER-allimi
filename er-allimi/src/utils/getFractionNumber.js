const getFractionNumber = (infinite, dataLength, currentSlide) => {
  if (infinite) {
    if (currentSlide > dataLength) return 1;
    else if (currentSlide === 0) return dataLength;
    else return currentSlide;
  } else {
    return currentSlide + 1;
  }
};

export { getFractionNumber };
