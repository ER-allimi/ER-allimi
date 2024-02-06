import styled from '@emotion/styled';
import { hpDetailState } from '@stores';
import { useRecoilValue } from 'recoil';
import { getDateStrByHvidate } from '@utils';
import {
  ErChart,
  EmptyBox,
  Spinner,
  BiNotificationOff,
  GuideBox,
} from '@components';
function HpRtErAvailableBedContent() {
  const hpRTavailableBedData = useRecoilValue(hpDetailState);

  if (hpRTavailableBedData.length === 0)
    return (
      <EmptyBox height={150}>
        <Spinner />
      </EmptyBox>
    );
  if (!hpRTavailableBedData.HpRTavailableBed)
    return (
      <>
        <TitleText>실시간 응급실 가용병상 정보</TitleText>
        <EmptyBox height={80} icon={<BiNotificationOff />}>
          <Text>해당 병원에서는 응급실 데이터를 제공해주지 않음</Text>
        </EmptyBox>
      </>
    );
  const {
    HpRTavailableBed: {
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
    },
  } = hpRTavailableBedData;

  const updateDate = getDateStrByHvidate(hvidate);
  return (
    <>
      <TitleContainer>
        <TitleText>실시간 응급실 가용병상 정보</TitleText>
        <DateText> (전송 일시: {updateDate})</DateText>
      </TitleContainer>
      <GuideInfoContainer>
        <RateGuideText>가용 병상 수(초과 병상 수) / 전체 병상 수</RateGuideText>
        <GuideBox />
      </GuideInfoContainer>
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
  font-size: 15px;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 14px;
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
  color: ${({ theme }) => theme.colors.grayDark};
  margin-right: 0.5rem;
`;
const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  row-gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  }
`;
const GuideInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-right: 1rem;
  }
`;

const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default HpRtErAvailableBedContent;
