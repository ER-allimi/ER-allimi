import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { VscTriangleDown, VscTriangleUp } from '@components';

function MovingBox({ className, children, isExpanded, handleExpand }) {
  return (
    <StyledMovingBox className={className} isExpanded={isExpanded}>
      <ExpandIcon onClick={handleExpand}>
        {isExpanded ? <VscTriangleDown /> : <VscTriangleUp />}
      </ExpandIcon>
      {children}
    </StyledMovingBox>
  );
}

const transform = ({ isExpanded }) => {
  if (isExpanded)
    return css`
      transform: translateY(0);
    `;
  else {
    return css`
      transform: translateY(calc(100% - 2rem));
    `;
  }
};

const StyledMovingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0rem 1rem 0.7rem 1rem;
  width: 100vw;
  height: 100%;
  background-color: white;
  border-radius: 0.7rem 0.7rem 0 0;
  box-shadow: -3px 0 5px 3px ${({ theme }) => theme.colors.grayLight};
  ${transform}
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
  isExpanded: PropTypes.bool,
  handleExpand: PropTypes.func,
};

export default MovingBox;
