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
      <ChartContainer>
        {hvs01 > 0 && (
          <ErChart availableBed={hvec} totalBed={hvs01} hpid={hpid} />
        )}
        {hvs02 > 0 && (
          <ErChart availableBed={hv28} totalBed={hvs02} hpid={hpid} />
        )}
        {hvs03 + hvs46 > 0 && (
          <ErChart
            availableBed={hv29 + hv13}
            totalBed={hvs03 + hvs46}
            hpid={hpid}
          />
        )}
        {hvs04 + hvs47 > 0 && (
          <ErChart
            availableBed={hv30 + hv14}
            totalBed={hvs04 + hvs47}
            hpid={hpid}
          />
        )}
      </ChartContainer>
      <GuideContainer></GuideContainer>
    </>
  );
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
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

const DateText = styled.p`
  font-size: 10px;
  letter-spacing: -0.05rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-left: 2px;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 9px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 8px;
  }
`;
const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* max-width: 100%; */
  /* justify-content: center; */
  /* gap: auto; */
  /* width: 300px; */
`;
const GuideContainer = styled.div`
  display: flex;
`;

export default HpRtErAvailableBedContent;
