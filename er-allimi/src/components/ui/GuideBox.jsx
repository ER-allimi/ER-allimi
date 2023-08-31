import styled from '@emotion/styled';
import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { Tooltip, BsFillInfoSquareFill, Popover } from '@components';
import { PATH_HOSPITALDETAIL } from '@constants';

function GuideBox() {
  const match = useMatch(PATH_HOSPITALDETAIL);
  const isHpDetailPage = !!match;

  const [showContent, setShowContent] = useState(false);

  const guideContent = isHpDetailPage
    ? [
        <GuideContainer key={0}>
          응급실일반/응급실소아 : <GreenCircle /> 80% 이상 <YellowCircle />{' '}
          50~79% <RedCircle /> 50% 미만
          <br />
          음압/일반 : <GreenCircle /> 100% <YellowCircle /> 50~99% <RedCircle />{' '}
          50% 미만
          <br />
          음압격리 = 응급실 음압격리 + 격리진료구역 음압격리
          <br />
          일반격리 = 응급실 일반격리 + 격리진료구역 일반격리
        </GuideContainer>,
      ]
    : [
        <GuideContainer key={0}>
          응급실일반 : <GreenCircle /> 80% 이상 <YellowCircle /> 50~79%{' '}
          <RedCircle /> 50% 미만
        </GuideContainer>,
      ];

  return (
    <>
      <TooltipWrapper>
        <Tooltip
          direction="right"
          color="grayDarker"
          distanceAwy={10}
          content={guideContent}
        >
          <BsFillInfoSquareFill />
        </Tooltip>
      </TooltipWrapper>
      <PopoverWrapper>
        <Popover
          direction="left"
          containerClassName="hpMovingBox"
          content={guideContent}
          distanceAway={5}
          color="grayDarker"
          showContent={showContent}
          handlePopoverClick={() => {
            setShowContent(!showContent);
          }}
          handleContentRemove={() => setShowContent(false)}
        >
          <BsFillInfoSquareFill />
        </Popover>
      </PopoverWrapper>
    </>
  );
}

const GuideContainer = styled.span`
  font-size: 10px;
  letter-spacing: -0.05rem;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 9px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 8px;
  }
  color: white;
  whitespace: 'pre-line';
`;
const Circle = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin: 0 0.2rem;
`;
const RedCircle = styled(Circle)`
  background-color: ${({ theme }) => theme.colors.red};
`;
const YellowCircle = styled(Circle)`
  background-color: ${({ theme }) => theme.colors.yellow};
`;
const GreenCircle = styled(Circle)`
  background-color: ${({ theme }) => theme.colors.green};
`;
const TooltipWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: none;
  }
`;
const PopoverWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
  }
`;
export default GuideBox;
