import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MatchedHpItem } from '@components';

function MatchedHpList({ data, className }) {
  const [activeItem, setActiveItem] = useState(-1);

  useEffect(() => {
    // 키보드 down/up을 눌렀을 때, 병원 목록에서 초점을 아래/위로 이동시키기
    const handleKeyClick = (e) => {
      if (e.key === 'ArrowDown')
        return activeItem === data.length - 1
          ? null
          : setActiveItem(activeItem + 1);
      if (e.key === 'ArrowUp')
        return activeItem === 0 ? null : setActiveItem(activeItem - 1);
    };
    window.addEventListener('keydown', handleKeyClick);

    return () => {
      window.removeEventListener('keydown', handleKeyClick);
    };
  }, [activeItem]);

  const handleMouseOver = (idx) => {
    setActiveItem(idx);
  };

  const handleMouseOut = () => {
    setActiveItem(-1);
  };

  const renderItems = data.map((item, idx) => (
    <MatchedHpItem
      key={item.hpid}
      data={item}
      active={idx === activeItem}
      handleMouseOver={handleMouseOver.bind(undefined, idx)}
      handleMouseOut={handleMouseOut.bind(undefined, idx)}
    />
  ));

  return (
    <StyledMatchedHpList data={data} className={className}>
      {renderItems}
    </StyledMatchedHpList>
  );
}

const display = ({ data }) =>
  data.length === 0
    ? css`
        display: none;
      `
    : css`
        display: block;
      `;

const StyledMatchedHpList = styled.div`
  ${display}
  width: 100%;
  max-height: calc(34px * 10);
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-top: none;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.grayLight};
  }
`;

MatchedHpList.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default MatchedHpList;
