import { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Slider } from '@components';

type dataType = { label: string; [key: string]: any };
type databaseType = Array<dataType>;

interface AutoPlaySliderProps {
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
  intervalTime?: number; // 단위: s
}

function AutoPlaySlider({
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
  sliding = true,
  transitionTime = 0.5,
  infinite = true,
  intervalTime = 5,
}: AutoPlaySliderProps) {
  const autoSlider = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(infinite ? 1 : 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // 무한 슬라이드인 경우
      if (infinite && currentSlide === data.length) {
        setCurrentSlide(currentSlide + 1);
        return setTimeout(() => {
          if (!autoSlider.current) return;
          const slideList = autoSlider.current.querySelector(
            '.slide-list',
          ) as HTMLElement;

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
        paginationDot={paginationDot}
        activeDot={activeDot}
        inactiveDot={inactiveDot}
        paginationFraction={paginationFraction}
        paginationPosition={paginationPosition}
        sliding={sliding}
        transitionTime={transitionTime}
        infinite={infinite}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </AutoSlider>
  );
}

const AutoSlider = styled.div`
  width: 100%;
`;

export default AutoPlaySlider;
