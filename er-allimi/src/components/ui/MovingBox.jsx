import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { VscTriangleDown, VscTriangleUp } from '@components';

function MovingBox({ className, children }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleTriangleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledMovingBox className={className} isExpanded={isExpanded}>
      <ExpandIcon onClick={handleTriangleClick}>
        {isExpanded ? <VscTriangleDown /> : <VscTriangleUp />}
      </ExpandIcon>
      {children}
    </StyledMovingBox>
  );
}

const expand = ({ isExpanded }) =>
  !isExpanded &&
  css`
    transform: translateY(calc(100% - 2rem));
  `;

const StyledMovingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0rem 1rem 0.7rem 1rem;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 0.7rem 0.7rem 0 0;
  box-shadow: -3px 0 5px 3px ${({ theme }) => theme.colors.grayLight};
  transition: transform 0.3s linear;

  ${expand}
`;

const ExpandIcon = styled.div`
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
  }
`;

MovingBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default MovingBox;
