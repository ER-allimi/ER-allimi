import styled from '@emotion/styled';
import { hpDetailState } from '@stores';
import { useRecoilValue } from 'recoil';
import { getDateStrByHvidate, getHpRtHrAvailableBedData } from '@utils';
import { Button, HpTableItem, ScrollBar } from '@components';
import { useState } from 'react';
function HpRtHrAvailableBedContent() {
  const HpRTavailableBedData = useRecoilValue(hpDetailState).HpRTavailableBed;
  const { hrData, icuData, onlyEmergencyData, etcData } =
    getHpRtHrAvailableBedData(HpRTavailableBedData);
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
  const { hpid, hvidate } = HpRTavailableBedData;
  const [selectedName, setSelectedName] = useState(tableData[0].name);
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
      <ScrollBar
        scrollBarWidth={10}
        totalHeight={100}
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
      </ScrollBar>
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

const SortButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
`;

const TableContainer = styled.div`
  
`;

export default HpRtHrAvailableBedContent;
