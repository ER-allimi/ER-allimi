import PropTypes from 'prop-types';
import { Box, IoCloseSharp } from '@components';
import styled from '@emotion/styled';
import { useState } from 'react';

function ClosedBox({ className, children, icon }) {
  const [isClosed, setIsClosed] = useState(false);

  const handleToggleClick = () => {
    setIsClosed((prevIsClosed) => !prevIsClosed);
  };
  return (
    <>
      {isClosed ? (
        <CircleBox className={className} onClick={handleToggleClick}>
          {icon}
        </CircleBox>
      ) : (
        <StyledBox className={className}>
          <ClosedButtonContainer>
            <IoCloseSharp onClick={handleToggleClick} />
          </ClosedButtonContainer>
          {children}
        </StyledBox>
      )}
    </>
  );
}

const StyledBox = styled(Box)`
  position: relative;
`;

const CircleBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.grayDarker};
  border: 1.5px solid ${({ theme }) => theme.colors.redLighter};
  box-shadow: 3px 3px 5px 3px ${({ theme }) => theme.colors.grayLight};
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ClosedButtonContainer = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.55rem;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
`;
ClosedBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.element,
};

export default ClosedBox;
