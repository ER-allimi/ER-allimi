import { useRecoilValue } from 'recoil';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  IoLocationSharp,
  CgPhone,
  Skeleton,
  SuccessMessage,
} from '@components';
import { hpDetailState } from '@stores';

function HpInfoContent() {
  const hpDetail = useRecoilValue(hpDetailState);

  if (hpDetail.length === 0) return <Skeleton />;

  const {
    hpInfo: { dutyName, dutyEmclsName, dutyAddr, dutyTel3 },
  } = hpDetail;

  return (
    <StyledHpInfoContent>
      <HpName title={dutyName}>{dutyName}</HpName>
      <ErClassName>{dutyEmclsName}</ErClassName>
      <Body>
        <div title={dutyAddr}>
          <IoLocationSharp />
          <CopyToClipboard
            text={dutyAddr}
            onCopy={() =>
              toast(() => (
                <SuccessMessage content="응급실 주소가 복사되었습니다." />
              ))
            }
          >
            <p>{dutyAddr}</p>
          </CopyToClipboard>
        </div>
        <div title={dutyTel3}>
          <CgPhone />
          <CopyToClipboard
            text={dutyTel3}
            onCopy={() =>
              toast(() => (
                <SuccessMessage content="응급실 전화번호가 복사되었습니다." />
              ))
            }
          >
            <p>{dutyTel3}</p>
          </CopyToClipboard>
        </div>
      </Body>
    </StyledHpInfoContent>
  );
}

const StyledHpInfoContent = styled.div`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
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
  line-height: 1.2rem;
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
