interface GetFractionNumberProps {
  infinite: boolean;
  dataLength: number;
  currentSlide: number;
}

const getFractionNumber = ({
  infinite,
  dataLength,
  currentSlide,
}: GetFractionNumberProps) => {
  if (infinite) {
    if (currentSlide > dataLength) return 1;
    else if (currentSlide === 0) return dataLength;
    else return currentSlide;
  } else {
    return currentSlide + 1;
  }
};

export { getFractionNumber };
