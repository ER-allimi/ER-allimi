import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from '@components';

function Slider({
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
  currentSlide,
  setCurrentSlide,
}) {
  const slideList = useRef();

  useEffect(() => {
    slideList.current.style.transform = `translateX(${-currentSlide * 100}%)`;
  }, [currentSlide]);

  const handleCurrentSlideChange = (nexSlide) => {
    if (nexSlide < 0 || nexSlide >= data.length) return;

    setCurrentSlide(nexSlide);
  };

  const renderSlideItems = data.map((item) => (
    <SlideItem key={item.label}>{renderSlide(item)}</SlideItem>
  ));

  const renderDots = Array(data.length)
    .fill(0)
    .map((item, idx) => {
      let dot;
      if (currentSlide === idx) dot = activeDot;
      else dot = inactiveDot;

      return (
        <Dot key={idx} onClick={() => handleCurrentSlideChange(idx)}>
          {dot}
        </Dot>
      );
    });

  return (
    <SliderContainer>
      <SliderWrap>
        <SlideList ref={slideList} dataLength={data.length}>
          {renderSlideItems}
        </SlideList>
      </SliderWrap>
      {control && (
        <Controllers controllersPosition={controllersPosition}>
          <LeftController
            onClick={() => handleCurrentSlideChange(currentSlide - 1)}
          >
            {leftController}
          </LeftController>
          <RightController
            onClick={() => handleCurrentSlideChange(currentSlide + 1)}
          >
            {rightController}
          </RightController>
        </Controllers>
      )}
      {pagination && <Dots dotsPosition={dotsPosition}>{renderDots}</Dots>}
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SliderWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SlideList = styled.div`
  display: flex;
  align-items: top;
`;

const SlideItem = styled.div`
  flex: 1 0 100%;
`;

const contrPos = ({ controllersPosition }) => {
  switch (controllersPosition) {
    case 'top':
      return css`
        top: 0;
      `;
    case 'center':
      return css`
        top: 50%;
        transform: translateY(-50%);
      `;
    case 'bottom':
      return css`
        bottom: 0;
      `;
    default:
      return css`
        top: 50%;
        transform: translateY(-50%);
      `;
  }
};

const Controllers = styled.div`
  position: absolute;
  ${contrPos};
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftController = styled.span``;

const RightController = styled.span``;

const DefaultLeftController = styled(HiMiniArrowSmallLeft)`
  font-size: 1.5rem;
  color: #ffffff9d;
  cursor: pointer;

  /* &:hover {
    color: white;
  } */
`;

const DefaultRightController = styled(HiMiniArrowSmallRight)`
  font-size: 1.5rem;
  color: #ffffff9d;
  cursor: pointer;

  /* &:hover {
    color: white;
  } */
`;

const dotsPos = ({ dotsPosition }) => {
  switch (dotsPosition) {
    case 'top':
      return css`
        top: 5px;
      `;
    case 'bottom':
      return css`
        bottom: 5px;
      `;
    default:
      return css`
        top: 5px;
      `;
  }
};

const Dots = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  ${dotsPos};
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 3px;
  cursor: pointer;
`;

const DefaultActiveDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
`;

const DefaultInactiveDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #ffffff9d;
  border-radius: 50%;
`;

Slider.propTypes = {
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
  currentSlide: PropTypes.number.isRequired,
  setCurrentSlide: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  control: true,
  leftController: <DefaultLeftController />,
  rightController: <DefaultRightController />,
  controllersPosition: 'center',
  pagination: true,
  activeDot: <DefaultActiveDot />,
  inactiveDot: <DefaultInactiveDot />,
  dotsPosition: 'bottom',
  currentSlide: 0,
};

export default Slider;
