import styled from '@emotion/styled';
import { hpDetailState } from '@stores';
import { useRecoilValue } from 'recoil';
import { getDateStrByHvidate } from '@utils';
import { ErChart } from '@components';
function HpRtErAvailableBedContent() {
  const HpRTavailableBedData = useRecoilValue(hpDetailState).HpRTavailableBed;
  const {
    hpid,
    hvidate,
    hvec = 0,
    hvs01 = 0,
    hv28 = 0,
    hvs02 = 0,
    hv29 = 0,
    hv13 = 0,
    hvs03 = 0,
    hvs46 = 0,
    hv30 = 0,
    hv14 = 0,
    hvs04 = 0,
    hvs47 = 0,
  } = HpRTavailableBedData;

  const updateDate = getDateStrByHvidate(hvidate);
  return (
    <>
      <TitleContainer>
        <TitleText>실시간 응급실 가용병상 정보</TitleText>
        <DateText> (전송 일시: {updateDate})</DateText>
      </TitleContainer>
      <RateGuideText>가용 병상 수(초과 병상 수) / 전체 병상 수</RateGuideText>
      <ChartContainer>
        {hvs01 > 0 && (
          <ErChart
            availableBed={hvec}
            totalBed={hvs01}
            hpid={hpid}
            title={'응급실일반'}
          />
        )}
        {hvs02 > 0 && (
          <ErChart
            availableBed={hv28}
            totalBed={hvs02}
            hpid={hpid}
            title={'응급실소아'}
          />
        )}
        {hvs03 + hvs46 > 0 && (
          <ErChart
            availableBed={hv29 + hv13}
            totalBed={hvs03 + hvs46}
            hpid={hpid}
            title={'음압격리'}
          />
        )}
        {hvs04 + hvs47 > 0 && (
          <ErChart
            availableBed={hv30 + hv14}
            totalBed={hvs04 + hvs47}
            hpid={hpid}
            title={'일반격리'}
          />
        )}
      </ChartContainer>
      <GuideContainer>
        응급실일반/응급실소아 : <GreenCircle /> 80% 이상 <YellowCircle /> 50~79%{' '}
        <RedCircle /> 50% 미만
        <br />
        음압/일반 : <GreenCircle /> 100% <YellowCircle /> 50~99% <RedCircle />{' '}
        50% 미만
        <br />
        음압격리 = 응급실 음압격리 + 격리진료구역 음압격리
        <br />
        일반격리 = 응급실 일반격리 + 격리진료구역 일반격리
      </GuideContainer>
    </>
  );
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 0.5rem;
`;
const TitleText = styled.h5`
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 12px;
  }
`;

const CommonText = styled.div`
  font-size: 10px;
  letter-spacing: -0.05rem;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 9px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 8px;
  }
`;
const DateText = styled(CommonText)`
  color: ${({ theme }) => theme.colors.gray};
  margin-left: 2px;
  whitespace: 'pre-line';
`;

const RateGuideText = styled(CommonText)`
  text-align: right;
  color: ${({ theme }) => theme.colors.grayDark};
`;
const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
const GuideContainer = styled(CommonText)`
  color: ${({ theme }) => theme.colors.gray};
  margin-left: 2px;
  margin-top: 0.5rem;
  whitespace: 'pre-line';
`;
const Circle = styled.div`
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

export default HpRtErAvailableBedContent;