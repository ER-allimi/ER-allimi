import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { getPathHospitalDetail } from '@utils';
import { RiHospitalLine } from '@components';

function MatchedHpItem({ data, active, handleMouseOver, handleMouseOut }) {
  const { dutyAddr, hpid } = data;
  const hpDetailPath = getPathHospitalDetail({
    stage1: dutyAddr.split(' ')[0],
    stage2: dutyAddr.split(' ')[1],
    hospitalId: hpid,
  });
  const item = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const itemEl = item.current;
    if (!itemEl) return;

    // 해당 아이템에 마우스를 올리고 내렸을 때, 병원 목록에서 초첨 이동시키기
    itemEl.addEventListener('mouseover', handleMouseOver);
    itemEl.addEventListener('mouseout', handleMouseOut);

    return () => {
      itemEl.removeEventListener('mouseover', handleMouseOver);
      itemEl.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    // 해당 아이템이 활성화된 채 enter 키를 누를 때, 해당 병원의 상세 페이지로 이동시키기
    const handleKeyDown = (e) => {
      if (e.key !== 'Enter') return;
      if (!active) return;

      return navigate(hpDetailPath);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  return (
    <StyledMatchedHpItem ref={item} active={active}>
      <Link to={hpDetailPath}>
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

const activeCase = ({ theme }) => css`
  background-color: ${theme.colors.grayLighter};
`;

const StyledMatchedHpItem = styled.div`
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLighter};

  ${({ active }) => active && activeCase}

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
  active: PropTypes.bool,
  handleMouseOver: PropTypes.func,
  handleMouseOut: PropTypes.func,
};

export default MatchedHpItem;
