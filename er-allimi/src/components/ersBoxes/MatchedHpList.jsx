import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MatchedHpItem } from '@components';

function MatchedHpList({ data, className }) {
  const renderItems = data.map((item) => (
    <MatchedHpItem key={item.hpid} data={item} />
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
