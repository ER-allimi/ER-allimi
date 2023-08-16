import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { IoLocationSharp, BiSolidPhone } from '@components';
import { getPathHospitalDetail } from '@utils';

function ErItem() {
  const handlePhoneNumberClick = () => {
    navigator.clipboard
      .writeText('054-532-5001')
      .then(() => {
        alert('응급실 전화번호가 복사되었습니다.');
      })
      .catch((err) => {
        alert('[error] 응급실 전화번호가 복사되지 못했습니다.');
      });
  };

  const handleAddressClick = () => {
    navigator.clipboard
      .writeText('경상북도 상주시 냉림서성길 7 (냉림동)')
      .then(() => {
        alert('응급실 주소가 복사되었습니다.');
      })
      .catch((err) => {
        alert('[error] 응급실 주소가 복사되지 못했습니다.');
      });
  };

  return (
    <StyledErItem>
      <Link
        to={getPathHospitalDetail({
          hospitalId: 1,
          stage1: '서울특별시',
          stage2: '강남구',
        })}
      >
        <HpName>의료법인삼백의료재단상주성모병원</HpName>
      </Link>
      <ErClassName>지역응급의료기관 {`>`} 종합병원</ErClassName>
      <Body>
        <div>
          <IoLocationSharp />
          <p onClick={handleAddressClick}>
            경상북도 상주시 냉림서성길 7 (냉림동)
          </p>
        </div>
        <div>
          <BiSolidPhone />
          <p onClick={handlePhoneNumberClick}>054-532-5001</p>
        </div>
        <div>
          <span className="color"></span>
          <p>
            가용 병상 수&nbsp;
            <span className="highlight">7</span>
            &nbsp;/&nbsp;전체&nbsp;
            <span className="highlight">15</span>
          </p>
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

const HpName = styled.h5`
  font-size: 14px;

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

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 9px;
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(2);
  grid-template-columns: repeat(2);
  align-content: center;
  margin-top: 0.5rem;
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
    line-height: inherit;
    font-size: inherit;
  }

  div {
    display: flex;
    align-items: center;
    font-size: inherit;
  }

  div:nth-of-type(1) {
    grid-row: 1/2;
    grid-column: 1/3;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  div:nth-of-type(2) {
    grid-row: 2/3;
    grid-column: 1/2;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  div:nth-of-type(3) {
    grid-row: 2/3;
    grid-column: 2/3;
    justify-self: right;

    .color {
      display: inline-block;
      margin-right: 0.2rem;
      width: 1rem;
      height: 1rem;
      background-color: ${({ theme }) => theme.colors.yellow};
      border-radius: 50%;
    }

    p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.grayDark};
    }

    .highlight {
      font-size: 13px;
      font-weight: 700;

      @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
        font-size: 12px;
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
        font-size: 11px;
      }
    }
  }
`;

export default ErItem;
