import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { VscArrowSmallLeft, VscArrowSmallRight } from '@components';
import { getFractionNumber } from '@utils';

type dataType = { label: string; [key: string]: any };
type databaseType = Array<dataType>;
type paginationType = { paginationDot: boolean; paginationFraction: boolean };

interface SliderProps {
  className?: string;
  data: databaseType;
  renderSlide: (data: dataType) => React.ReactNode;
  control?: boolean; // controllers 유무
  leftController?: React.ReactNode;
  rightController?: React.ReactNode;
  controllersPosition?: 'top' | 'center' | 'bottom';
  paginationDot?: boolean; // dots 유무
  activeDot?: React.ReactNode;
  inactiveDot?: React.ReactNode;
  paginationFraction?: boolean; // fraction 유무
  paginationPosition?: 'top' | 'bottom';
  sliding?: boolean; // 슬라이딩 여부
  transitionTime?: number; // 단위: s
  infinite?: boolean; // 무한 슬라이딩 여부
  currentSlide: number; // 0부터 시작
  setCurrentSlide: (slide: number) => void;
}

Slider.propTypes = {
  // paginationDot와 paginationFraction 중 하나만 선택해야 함
  onlyOnePagination: function ({
    paginationDot,
    paginationFraction,
  }: paginationType) {
    const count = Number(paginationDot) + Number(paginationFraction);

    if (count === 2) {
      return new Error(
        `You must choose only one of 'paginationDot' and 'paginationFraction`,
      );
    }
  },
};

function Slider({
  className,
  data,
  renderSlide,
  control = true,
  leftController = <DefaultLeftController />,
  rightController = <DefaultRightController />,
  controllersPosition = 'center',
  paginationDot = false,
  activeDot = <DefaultActiveDot />,
  inactiveDot = <DefaultInactiveDot />,
  paginationFraction = false,
  paginationPosition = 'bottom',
  sliding = true,
  transitionTime = 0.5,
  infinite = false,
  currentSlide,
  setCurrentSlide,
}: SliderProps) {
  const slideList = useRef<HTMLDivElement>(null);

  let newData: databaseType = data;
  if (infinite) newData = [data[data.length - 1], ...data, data[0]]; // 무한 슬라이드인 경우

  useEffect(() => {
    if (!slideList.current) return;

    slideList.current.style.transform = `translateX(${-currentSlide * 100}%)`;
  }, [currentSlide]);

  const handleCurrentSlideChange = (nextSlide: number) => {
    const slideListEl = slideList.current as HTMLDivElement;

    // 무한 슬라이드인 경우
    if (infinite) {
      if (nextSlide === newData.length - 1) {
        setCurrentSlide(nextSlide);
        return setTimeout(() => {
          slideListEl.style.transition = `none`;
          setCurrentSlide(1);
          return setTimeout(() => {
            if (sliding)
              slideListEl.style.transition = `transform ${transitionTime}s`;
          }, transitionTime * 1000);
        }, transitionTime * 1000);
      }

      if (nextSlide === 0) {
        setCurrentSlide(nextSlide);
        return setTimeout(() => {
          slideListEl.style.transition = `none`;
          setCurrentSlide(newData.length - 2);
          return setTimeout(() => {
            if (sliding)
              slideListEl.style.transition = `transform ${transitionTime}s`;
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

  const fractionNumber = getFractionNumber({
    infinite,
    dataLength: data.length,
    currentSlide,
  });

  return (
    <SliderContainer className={className}>
      <SliderWrap>
        <SlideList
          className="slide-list"
          ref={slideList}
          // dataLength={newData.length}
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
            isFirstSlide={currentSlide === 0}
            onClick={() => handleCurrentSlideChange(currentSlide - 1)}
          >
            {leftController}
          </LeftController>
          <RightController
            infinite={infinite}
            isLastSlide={currentSlide === data.length - 1}
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

interface SlidingProps {
  sliding: boolean;
  transitionTime: number;
}

const sliding = ({ sliding, transitionTime }: SlidingProps) => {
  if (!sliding) return;

  return css`
    transition: transform ${transitionTime}s;
  `;
};

interface PaginationPositionType {
  paginationPosition: 'top' | 'bottom';
}
interface SlideListAlignProps extends PaginationPositionType {}

const slideListAlign = ({ paginationPosition }: SlideListAlignProps) => {
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

const SlideList = styled.div<SlidingProps & SlideListAlignProps>`
  display: flex;
  ${slideListAlign}
  ${sliding}
`;

const SlideItem = styled.div`
  flex: 1 0 100%;
`;

interface ContrPosProps {
  controllersPosition: 'top' | 'center' | 'bottom';
}

const contrPos = ({ controllersPosition }: ContrPosProps) => {
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

interface InfiniteType {
  infinite: boolean;
}
interface LeftControllerProps extends InfiniteType {
  isFirstSlide: boolean;
}

const LeftController = styled.span<LeftControllerProps>`
  color: white;
  cursor: pointer;

  ${({ infinite, isFirstSlide }) => {
    if (!infinite && isFirstSlide)
      return css`
        color: #ffffff9d;
        cursor: default;
      `;
  }}
`;

interface RightControllerProps extends InfiniteType {
  isLastSlide: boolean;
}

const RightController = styled.span<RightControllerProps>`
  color: white;
  cursor: pointer;

  ${({ infinite, isLastSlide }) => {
    if (!infinite && isLastSlide)
      return css`
        color: #ffffff9d;
        cursor: default;
      `;
  }}
`;

const DefaultLeftController = styled(VscArrowSmallLeft)`
  font-size: 1.5rem;
  color: inherit;
  cursor: pointer;
`;

const DefaultRightController = styled(VscArrowSmallRight)`
  font-size: 1.5rem;
  color: inherit;
  cursor: pointer;
`;

const dotsPos = ({ paginationPosition }: PaginationPositionType) => {
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

const fractionPos = ({ paginationPosition }: PaginationPositionType) => {
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

export default Slider;
