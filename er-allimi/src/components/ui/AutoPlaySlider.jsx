import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Slider } from '@components';

function AutoPlaySlider({
  className,
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
  sliding,
  transitionTime,
  infinite,
  intervalTime,
}) {
  const autoSlider = useRef();
  const [currentSlide, setCurrentSlide] = useState(infinite ? 1 : 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // 무한 슬라이드인 경우
      if (infinite && currentSlide === data.length) {
        setCurrentSlide(currentSlide + 1);
        return setTimeout(() => {
          const slideList = autoSlider?.current.querySelector('.slide-list');
          slideList.style.transition = `none`;
          setCurrentSlide(1);
          return setTimeout(() => {
            if (sliding)
              slideList.style.transition = `transform ${transitionTime}s`;
          }, transitionTime * 1000);
        }, transitionTime * 1000);
      }

      // 무한 슬라이드가 아닌 경우
      if (!infinite && currentSlide === data.length - 1)
        return setCurrentSlide(0);

      setCurrentSlide(currentSlide + 1);
    }, intervalTime * 1000);

    return () => clearTimeout(timer);
  }, [currentSlide, autoSlider]);

  return (
    <AutoSlider ref={autoSlider} className={className}>
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
        sliding={sliding}
        transitionTime={transitionTime}
        infinite={infinite}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      ></Slider>
    </AutoSlider>
  );
}

const AutoSlider = styled.div`
  width: 100%;
`;

AutoPlaySlider.propTypes = {
  className: PropTypes.string,
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
  sliding: PropTypes.bool, // 슬라이딩 여부
  transitionTime: PropTypes.number, // 단위: s
  infinite: PropTypes.bool, // 무한 슬라이딩 여부
  intervalTime: PropTypes.number, // 단위: s
};

AutoPlaySlider.defaultProps = {
  sliding: true,
  transitionTime: 0.5,
  infinite: true,
  intervalTime: 5,
};

export default AutoPlaySlider;
