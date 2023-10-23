import PropTypes from 'prop-types';
import { Box, IoCloseSharp } from '@components';
import styled from '@emotion/styled';
import { useState } from 'react';

function ClosedBox({ className, children, icon, outlineColor }) {
  const [isClosed, setIsClosed] = useState(false);

  const handleToggleClick = () => {
    setIsClosed((prevIsClosed) => !prevIsClosed);
  };
  return (
    <>
      {isClosed ? (
        <CircleBox
          className={className}
          onClick={handleToggleClick}
          outlineColor={outlineColor}
        >
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
  border: 1.5px solid ${({ theme, outlineColor }) => theme.colors[outlineColor]};
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

ClosedBox.defaultProps = {
  outlineColor: 'redLighter',
};
ClosedBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.element,
  outlineColor: PropTypes.oneOf([
    'gray',
    'grayDark',
    'grayDarker',
    'grayLight',
    'grayLighter',
    'red',
    'redDark',
    'redDarker',
    'redLight',
    'redLighter',
    'yellow',
    'yellowDark',
    'yellowDarker',
    'yellowLight',
    'yellowLighter',
    'green',
    'greenDark',
    'greenDarker',
    'greenLight',
    'greenLighter',
  ]),
};

export default ClosedBox;
