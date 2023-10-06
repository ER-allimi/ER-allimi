import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from '@components';
import { getFractionNumber } from '@utils';

function Slider({
  className,
  data,
  renderSlide,
  control,
  leftController,
  rightController,
  controllersPosition,
  paginationDot,
  activeDot,
  inactiveDot,
  paginationFraction,
  paginationPosition,
  sliding,
  transitionTime,
  infinite,
  currentSlide,
  setCurrentSlide,
}) {
  const slideList = useRef();

  let newData = data;
  if (infinite) newData = [data.at(-1), ...data, data.at(0)]; // 무한 슬라이드인 경우

  useEffect(() => {
    slideList.current.style.transform = `translateX(${-currentSlide * 100}%)`;
  }, [currentSlide]);

  const handleCurrentSlideChange = (nextSlide) => {
    // 무한 슬라이드인 경우
    if (infinite) {
      if (nextSlide === newData.length - 1) {
        setCurrentSlide(nextSlide);
        return setTimeout(() => {
          slideList.current.style.transition = `none`;
          setCurrentSlide(1);
          return setTimeout(() => {
            if (sliding)
              slideList.current.style.transition = `transform ${transitionTime}s`;
          }, transitionTime * 1000);
        }, transitionTime * 1000);
      }

      if (nextSlide === 0) {
        setCurrentSlide(nextSlide);
        return setTimeout(() => {
          slideList.current.style.transition = `none`;
          setCurrentSlide(newData.length - 2);
          return setTimeout(() => {
            if (sliding)
              slideList.current.style.transition = `transform ${transitionTime}s`;
          }, transitionTime * 1000);
        }, transitionTime * 1000);
      }
    }

    // 무한 슬라이드가 아닌 경우
    if (nextSlide < 0 || nextSlide >= newData.length) return;

    setCurrentSlide(nextSlide);
  };

  const renderSlideItems = newData.map((item, idx) => {
    // 무한 슬라이드인 경우
    if (infinite) {
      if (idx === 0) {
        return (
          <SlideItem key={`${item.label}+addFirst`}>
            {renderSlide(item)}
          </SlideItem>
        );
      }

      if (idx === newData.length - 1) {
        return (
          <SlideItem key={`${item.label}+addLast`}>
            {renderSlide(item)}
          </SlideItem>
        );
      }
    }

    // 무한 슬라이드가 아닌 경우
    return <SlideItem key={item.label}>{renderSlide(item)}</SlideItem>;
  });

  const renderDots = Array(data.length)
    .fill(0)
    .map((item, idx) => {
      let dot;
      // 무한 슬라이드인 경우
      if (infinite) {
        if (currentSlide === 0 && idx === data.length - 1) dot = activeDot;
        else if (currentSlide === newData.length - 1 && idx === 0)
          dot = activeDot;
        else if (currentSlide - 1 === idx) dot = activeDot;
        else dot = inactiveDot;

        return (
          <Dot key={idx} onClick={() => handleCurrentSlideChange(idx + 1)}>
            {dot}
          </Dot>
        );
      }

      // 무한 슬라이드가 아닌 경우
      if (currentSlide === idx) dot = activeDot;
      else dot = inactiveDot;

      return (
        <Dot key={idx} onClick={() => handleCurrentSlideChange(idx)}>
          {dot}
        </Dot>
      );
    });

  const fractionNumber = getFractionNumber(infinite, data.length, currentSlide);

  return (
    <SliderContainer className={className}>
      <SliderWrap>
        <SlideList
          className="slide-list"
          ref={slideList}
          dataLength={newData.length}
          sliding={sliding}
          transitionTime={transitionTime}
          paginationPosition={paginationPosition}
        >
          {renderSlideItems}
        </SlideList>
      </SliderWrap>
      {control && (
        <Controllers controllersPosition={controllersPosition}>
          <LeftController
            infinite={infinite}
            firstSlide={currentSlide === 0}
            onClick={() => handleCurrentSlideChange(currentSlide - 1)}
          >
            {leftController}
          </LeftController>
          <RightController
            infinite={infinite}
            lastSlide={currentSlide === data.length - 1}
            onClick={() => handleCurrentSlideChange(currentSlide + 1)}
          >
            {rightController}
          </RightController>
        </Controllers>
      )}
      {paginationDot && (
        <Dots paginationPosition={paginationPosition}>{renderDots}</Dots>
      )}
      {paginationFraction && (
        <Fraction
          paginationPosition={paginationPosition}
        >{`${fractionNumber} / ${data.length}`}</Fraction>
      )}
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

const sliding = ({ sliding, transitionTime }) => {
  if (!sliding) return;

  return css`
    transition: transform ${transitionTime}s;
  `;
};

const slideListAlign = ({ paginationPosition }) => {
  switch (paginationPosition) {
    case 'top':
      return css`
        align-items: start;
      `;
    case 'bottom':
      return css`
        align-items: end;
      `;
    default:
      return css`
        align-items: end;
      `;
  }
};

const SlideList = styled.div`
  display: flex;
  ${slideListAlign}
  ${sliding}
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

const LeftController = styled.span`
  color: white;
  cursor: pointer;

  ${({ infinite, firstSlide }) => {
    if (!infinite && firstSlide)
      return css`
        color: #ffffff9d;
        cursor: default;
      `;
  }}
`;

const RightController = styled.span`
  color: white;
  cursor: pointer;

  ${({ infinite, lastSlide }) => {
    if (!infinite && lastSlide)
      return css`
        color: #ffffff9d;
        cursor: default;
      `;
  }}
`;

const DefaultLeftController = styled(HiMiniArrowSmallLeft)`
  font-size: 1.5rem;
  color: inherit;
  cursor: pointer;
`;

const DefaultRightController = styled(HiMiniArrowSmallRight)`
  font-size: 1.5rem;
  color: inherit;
  cursor: pointer;
`;

const dotsPos = ({ paginationPosition }) => {
  switch (paginationPosition) {
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

const fractionPos = ({ paginationPosition }) => {
  switch (paginationPosition) {
    case 'top':
      return css`
        top: 3px;
      `;
    case 'bottom':
      return css`
        bottom: 3px;
      `;
    default:
      return css`
        top: 3px;
      `;
  }
};

const Fraction = styled.div`
  position: absolute;
  ${fractionPos};
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 10px;
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
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  renderSlide: PropTypes.func.isRequired,
  control: PropTypes.bool, // controllers 유뮤
  leftController: PropTypes.node,
  rightController: PropTypes.node,
  controllersPosition: PropTypes.oneOf(['top', 'center', 'bottom']),
  paginationDot: PropTypes.bool, // dots 유뮤
  activeDot: PropTypes.node,
  inactiveDot: PropTypes.node,
  paginationFraction: PropTypes.bool, // fraction 유뮤
  paginationPosition: PropTypes.oneOf(['top', 'bottom']),
  sliding: PropTypes.bool, // 슬라이딩 여부
  transitionTime: PropTypes.number, // 단위: s
  infinite: PropTypes.bool, // 무한 슬라이딩 여부
  currentSlide: PropTypes.number.isRequired,
  setCurrentSlide: PropTypes.func.isRequired,
  onlyOnePagination: function ({ paginationDot, paginationFraction }) {
    // paginationDot와 paginationFraction 중 하나만 선택해야 함
    const count = Number(paginationDot) + Number(paginationFraction);

    if (count === 2) {
      return new Error(
        `You must choose only one of 'paginationDot' and 'paginationFraction`,
      );
    }
  },
};

Slider.defaultProps = {
  control: true,
  leftController: <DefaultLeftController />,
  rightController: <DefaultRightController />,
  controllersPosition: 'center',
  paginationDot: false,
  activeDot: <DefaultActiveDot />,
  inactiveDot: <DefaultInactiveDot />,
  paginationFraction: false,
  paginationPosition: 'bottom',
  sliding: true,
  transitionTime: 0.5,
  infinite: false,
  currentSlide: 0,
};

export default Slider;
