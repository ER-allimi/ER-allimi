import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IoLocationSharp, BiSolidPhone } from '@components';
import { getPathHospitalDetail, getErRTavailableBedByColor } from '@utils';
import { copyText } from '@utils';

function ErItem({ item: { hpInfo, availableBedInfo }, order }) {
  const handlePhoneNumberClick = () => {
    copyText({
      text: hpInfo.dutyTel3,
      successMessage: '응급실 전화번호가 복사되었습니다.',
      errorMessage: '[실패] 응급실 전화번호가 복사되지 못했습니다.',
    });
  };

  const handleAddressClick = () => {
    copyText({
      text: hpInfo.dutyAddr,
      successMessage: '응급실 주소가 복사되었습니다.',
      errorMessage: '[실패] 응급실 주소가 복사되지 못했습니다.',
    });
  };

  return (
    <StyledErItem>
      <Link
        to={getPathHospitalDetail({
          hospitalId: hpInfo.hpid,
        })}
      >
        <HpName>
          {order}. {hpInfo.dutyName}
        </HpName>
      </Link>
      <ErClassName>{hpInfo.dutyEmclsName}</ErClassName>
      <Body
        availableBed={availableBedInfo?.hvec}
        totalBed={availableBedInfo?.hvs01}
      >
        <div>
          <IoLocationSharp />
          <p onClick={handleAddressClick}>{hpInfo.dutyAddr}</p>
        </div>
        <div>
          <BiSolidPhone />
          <p onClick={handlePhoneNumberClick}>{hpInfo.dutyTel3}</p>
        </div>
        <div>
          {availableBedInfo ? (
            <>
              <span className="color"></span>
              가용 병상 수&nbsp;
              <span className="highlight">
                {availableBedInfo.hvec > 0
                  ? availableBedInfo.hvec
                  : `0 (초과 ${-availableBedInfo.hvec})`}
              </span>
              &nbsp;/&nbsp;전체&nbsp;
              <span className="highlight">{availableBedInfo.hvs01}</span>
            </>
          ) : (
            <span className="no-info-text">
              * 응급실 가용 병상 정보를 제공하지 않음
            </span>
          )}
        </div>
      </Body>
    </StyledErItem>
  );
}

const StyledErItem = styled.div`
  padding: 0.5rem 0.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLighter};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayLighter};
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

  &:hover {
    text-decoration: underline;
  }

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

  div:nth-of-type(3) {
    justify-content: right;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grayDark};

    .color {
      display: inline-block;
      margin-right: 0.4rem;
      width: 1rem;
      height: 1rem;
      background-color: ${({ availableBed, totalBed }) =>
        getErRTavailableBedByColor(availableBed, totalBed)};
      border-radius: 50%;
    }

    .highlight {
      font-size: 13px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.grayDarker};

      @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
        font-size: 12px;
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
        font-size: 11px;
      }
    }

    .no-info-text {
      line-height: inherit;
      font-size: 10px;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

ErItem.propTypes = {
  item: PropTypes.object,
  order: PropTypes.number,
};

export default ErItem;
