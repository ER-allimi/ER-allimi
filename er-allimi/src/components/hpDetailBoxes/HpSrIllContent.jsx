import styled from '@emotion/styled';
import { useFetchHpSrIII } from '@hooks';
import { AdultModel, KidModel } from '@components';
import { classifySurgery } from '@utils';

function HpSriIllContent() {
  // 나중에 hpDetailState selector에서 실 데이터 가져오기
  const [stage1, stage2, hpId] = ['서울특별시', '종로구', 'A1100006'];
  const { data, isLoading, isFetching, isError, error } = useFetchHpSrIII(
    stage1,
    stage2,
  );

  let content;
  if (isFetching) content = <div>데이터를 가져오는 중...</div>;
  else if (isError) content = <div>데이터를 가져오는데 실패함</div>;
  else {
    const hpData = data?.find((item) => item.dutyName === hpId);

    if (!hpData)
      content = <div>해당 병원에서는 중증질환 데이터를 제공해주지 않음</div>;
    else {
      const { adult: adultData, kid: kidData } = classifySurgery(hpData);

      content = (
        <>
          <Desc>
            * 현 병원에서 신체 각 부위에 대한 수술 여부를 노란색으로 나타냈음
            <br />* 노란색 위에 마우스를 올리면, 진행 가능한 수술을 알 수 있음
            <br />* '정보 미제공' 데이터는 표시하지 않음
          </Desc>
          <Models>
            <AdultModel data={adultData} />
            <KidModel data={kidData} />
          </Models>
        </>
      );
    }
  }

  return (
    <StyledHpSriIllContent>
      <Title>중증응급질환 수술 여부</Title>
      {content}
    </StyledHpSriIllContent>
  );
}

const StyledHpSriIllContent = styled.div``;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Desc = styled.p`
  word-spacing: -1px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Models = styled.div`
  display: flex;
  align-items: end;
`;

export default HpSriIllContent;
