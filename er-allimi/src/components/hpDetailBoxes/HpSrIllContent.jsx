import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useFetchHpSrIII } from '@hooks';
import {
  AdultModel,
  KidModel,
  EtcSrIll,
  EmptyBox,
  Spinner,
  BiError,
  TbArticleOff,
} from '@components';
import { classifySurgery } from '@utils';

function HpSriIllContent() {
  const { stage1, stage2, hospitalId: hpId } = useParams();
  const { data, isLoading, isFetching, isError, error } = useFetchHpSrIII(
    stage1,
    stage2,
  );

  let content;
  if (isFetching) {
    content = (
      <EmptyBox height={200}>
        <Spinner />
      </EmptyBox>
    );
  } else if (isError)
    content = (
      <EmptyBox height={200} icon={<BiError />}>
        <Text>데이터를 가져오는데 실패함</Text>
      </EmptyBox>
    );
  else {
    const hpData =
      data &&
      (Array.isArray(data)
        ? data.find((item) => item.dutyName === hpId)
        : data);

    if (!hpData)
      content = (
        <EmptyBox height={200} icon={<TbArticleOff />}>
          <Text>해당 병원에서는 중증질환 데이터를 제공해주지 않음</Text>
        </EmptyBox>
      );
    else {
      const {
        adult: adultData,
        kid: kidData,
        etc: etcData,
      } = classifySurgery(hpData);

      const StyledEtcSrIll = styled(EtcSrIll)`
        justify-self: start;
        align-self: start;
      `;

      content = (
        <>
          <DescAtLg>
            * 현 병원에서 신체 각 부위에 대한 수술 여부를 노란색으로 나타냈음
            <br />* 노란색 위에 마우스를 올리면, 진행 가능한 수술을 알 수 있음
            <br />* '정보 미제공' 데이터는 표시하지 않음
          </DescAtLg>
          <DescAtMd>
            * 현 병원에서 신체 각 부위에 대한 수술 여부를 노란색으로 나타냈음
            <br />* 노란색 부분을 클릭하면, 진행 가능한 수술을 알 수 있음
            <br />* '정보 미제공' 데이터는 표시하지 않음
          </DescAtMd>
          <Models>
            <AdultModel data={adultData} />
            <KidModel data={kidData} />
            {etcData.length !== 0 && <StyledEtcSrIll data={etcData} />}
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

const StyledHpSriIllContent = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const DescAtLg = styled.p`
  display: block;
  word-spacing: -1px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: none;
  }
`;

const DescAtMd = styled.p`
  display: none;
  word-spacing: -1px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
  }
`;

const Models = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  justify-items: center;
  align-items: baseline;
  margin-top: 1rem;
`;

const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default HpSriIllContent;
