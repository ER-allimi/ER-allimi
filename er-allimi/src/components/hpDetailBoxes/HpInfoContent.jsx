import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IoLocationSharp, BiSolidPhone } from '@components';
import { copyText } from '@utils';

function HpInfoContent() {
  // 나중에 hpDetailState selector에서 실 데이터 가져오기
  const [dutyName, dutyEmclsName, dutyAddr, dutyTel3] = [
    '서울적십자병원',
    '지역응급의료기관',
    '서울특별시 종로구 새문안로 9',
    '02-2002-8888',
  ];

  const handlePhoneNumberClick = () => {
    copyText({
      text: dutyTel3,
      successMessage: '응급실 전화번호가 복사되었습니다.',
      errorMessage: '[실패] 응급실 전화번호가 복사되지 못했습니다.',
    });
  };

  const handleAddressClick = () => {
    copyText({
      text: dutyAddr,
      successMessage: '응급실 주소가 복사되었습니다.',
      errorMessage: '[실패] 응급실 주소가 복사되지 못했습니다.',
    });
  };

  return (
    <StyledHpInfoContent>
      <HpName>{dutyName}</HpName>
      <ErClassName>{dutyEmclsName}</ErClassName>
      <Body>
        <div>
          <IoLocationSharp />
          <p onClick={handleAddressClick}>{dutyAddr}</p>
        </div>
        <div>
          <BiSolidPhone />
          <p onClick={handlePhoneNumberClick}>{dutyTel3}</p>
        </div>
      </Body>
    </StyledHpInfoContent>
  );
}

const StyledHpInfoContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLighter};
  }
`;

const shortening = css`
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const HpName = styled.h5`
  font-size: 14px;

  ${shortening}

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 12px;
  }
`;

const ErClassName = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.gray};

  ${shortening}

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 9px;
  }
`;

const Body = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  line-height: 1.5rem;
  font-size: 12px;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    line-height: 1.3rem;
    font-size: 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    line-height: 1.2rem;
    font-size: 10px;
  }

  svg {
    margin-right: 0.2rem;
  }

  p {
    width: 100%;
    line-height: inherit;
    font-size: inherit;

    ${shortening}
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: inherit;
  }

  div:nth-of-type(1) {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  div:nth-of-type(2) {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default HpInfoContent;
