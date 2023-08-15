import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { IoLocationSharp, BiSolidPhone } from '@components';
import { getPathHospitalDetail } from '@utils';

function ErItem() {
  const handlePhoneNumberClick = () => {
    navigator.clipboard
      .writeText('054-532-5001')
      .then(() => {
        console.log('Text copied to clipboard...');
      })
      .catch((err) => {
        console.log('Something went wrong', err);
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
          <p>경상북도 상주시 냉림서성길 7 (냉림동)</p>
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
  padding: 0.5rem 0;
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
`;

const ErClassName = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(2);
  grid-template-columns: repeat(2);
  align-content: center;
  margin-top: 0.5rem;

  svg {
    margin-right: 0.2rem;
  }

  p {
    font-size: 13px;
    line-height: 1.5rem;
  }

  div {
    display: flex;
    align-items: center;
  }

  div:nth-child(1) {
    grid-row: 1/2;
    grid-column: 1/3;
  }

  div:nth-child(2) {
    grid-row: 2/3;
    grid-column: 1/2;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  div:nth-child(3) {
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
      font-size: 11px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.grayDark};
    }

    .highlight {
      font-size: 13px;
      font-weight: 700;
    }
  }
`;

export default ErItem;
