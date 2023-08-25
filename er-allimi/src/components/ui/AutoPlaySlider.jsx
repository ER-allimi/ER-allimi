import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Slider } from '@components';

function AutoPlaySlider({
  data,
  renderSlide,
  control,
  leftController,
  rightController,
  controllersPosition,
  pagination,
  activeDot,
  inactiveDot,
  dotsPosition,
  intervalTime,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide === data.length - 1) return setCurrentSlide(0);

      setCurrentSlide(currentSlide + 1);
    }, intervalTime * 1000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <Slider
      data={data}
      renderSlide={renderSlide}
      control={control}
      leftController={leftController}
      rightController={rightController}
      controllersPosition={controllersPosition}
      pagination={pagination}
      activeDot={activeDot}
      inactiveDot={inactiveDot}
      dotsPosition={dotsPosition}
      currentSlide={currentSlide}
      setCurrentSlide={setCurrentSlide}
    ></Slider>
  );
}

AutoPlaySlider.propTypes = {
  data: PropTypes.array.isRequired,
  renderSlide: PropTypes.func.isRequired,
  control: PropTypes.bool, // controllers 유뮤
  leftController: PropTypes.node,
  rightController: PropTypes.node,
  controllersPosition: PropTypes.oneOf(['top', 'center', 'bottom']),
  pagination: PropTypes.bool, // dots 유뮤
  activeDot: PropTypes.node,
  inactiveDot: PropTypes.node,
  dotsPosition: PropTypes.oneOf(['top', 'bottom']),
  intervalTime: PropTypes.number, // 단위: s
};

AutoPlaySlider.defaultProps = {
  intervalTime: 5,
};

export default AutoPlaySlider;
