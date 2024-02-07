import styled from '@emotion/styled';
import { hpDetailState } from '@stores';
import { useRecoilValue } from 'recoil';
import { getDateStrByHvidate, getHpRtHrAvailableBedData } from '@utils';
import {
  Button,
  HpTableItem,
  ScrollBar,
  Spinner,
  EmptyBox,
  BiNotificationOff,
} from '@components';
import { useState } from 'react';

function HpRtHrAvailableBedContent() {
  const hpRTavailableBedData = useRecoilValue(hpDetailState);
  const [selectedName, setSelectedName] = useState('입원실');

  if (!hpRTavailableBedData)
    return (
      <EmptyBox height={150}>
        <Spinner />
      </EmptyBox>
    );
  if (!hpRTavailableBedData.HpRTavailableBed)
    return (
      <>
        <TitleText>실시간 입원실 가용병상 정보</TitleText>
        <EmptyBox height={80} icon={<BiNotificationOff />}>
          <Text>해당 병원에서는 입원실 데이터를 제공해주지 않음</Text>
        </EmptyBox>
      </>
    );

  const { hrData, icuData, onlyEmergencyData, etcData } =
    getHpRtHrAvailableBedData(hpRTavailableBedData.HpRTavailableBed);
  const tableData = [
    {
      name: '입원실',
      detail: hrData,
    },
    {
      name: '중환자실',
      detail: icuData,
    },
    {
      name: '응급전용',
      detail: onlyEmergencyData,
    },
    {
      name: '기타',
      detail: etcData,
    },
  ].filter((data) => data.detail.length !== 0);

  const {
    HpRTavailableBed: { hvidate },
  } = hpRTavailableBedData;
  const handleShowContentClick = (name) => {
    setSelectedName(name);
  };

  const updateDate = getDateStrByHvidate(hvidate);
  return (
    <>
      <TitleContainer>
        <TitleText>실시간 입원실 가용병상 정보</TitleText>
        <DateText> (전송 일시: {updateDate})</DateText>
      </TitleContainer>
      <SortButtonContainer>
        {tableData.map((data, idx) => {
          return (
            <Button
              key={idx}
              color="gray"
              round="lg"
              outline={data.name !== selectedName}
              onClick={() => handleShowContentClick(data.name)}
            >
              {data.name}
            </Button>
          );
        })}
      </SortButtonContainer>
      <StyledScrollBar
        scrollBarWidth={10}
        scrollBarBackground={'grayLighter'}
        scrollBarColor={'grayLight'}
      >
        <TableContainer>
          {tableData.map((data, idx) => {
            return (
              data.name === selectedName && (
                <HpTableItem
                  key={idx}
                  title={data.name}
                  data={data.detail}
                ></HpTableItem>
              )
            );
          })}
        </TableContainer>
      </StyledScrollBar>
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
const SortButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
`;
const StyledScrollBar = styled(ScrollBar)`
  max-height: calc(100vh - (500px + 3.5rem));
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    overflow-y: visible;
  }
`;
const TableContainer = styled.div``;
const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
`;
export default HpRtHrAvailableBedContent;
