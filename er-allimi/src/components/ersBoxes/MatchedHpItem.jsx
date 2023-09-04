import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { getPathHospitalDetail } from '@utils';
import { RiHospitalLine } from '@components';

function MatchedHpItem({ data }) {
  const { dutyAddr, hpid } = data;

  return (
    <StyledMatchedHpItem>
      <Link
        to={getPathHospitalDetail({
          stage1: dutyAddr.split(' ')[0],
          stage2: dutyAddr.split(' ')[1],
          hospitalId: hpid,
        })}
      >
        <RiHospitalLine />
        <HpName>{data.dutyName}</HpName>
        <HpAddr>{dutyAddr.split(' ')[1].slice(0, 3)}</HpAddr>
      </Link>
    </StyledMatchedHpItem>
  );
}

const shortening = css`
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const StyledMatchedHpItem = styled.div`
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLighter};

  &:hover {
    font-weight: 600;
  }

  a {
    display: grid;
    grid-template-columns: 1rem 1fr 2rem;
    column-gap: 0.3rem;
    align-items: center;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.grayDark};
  }
`;

const HpName = styled.div`
  width: 100%;
  font-size: inherit;
  color: inherit;

  ${shortening}
`;

const HpAddr = styled.div`
  justify-self: end;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.blueDark};
`;

MatchedHpItem.propTypes = {
  data: PropTypes.object,
};

export default MatchedHpItem;
