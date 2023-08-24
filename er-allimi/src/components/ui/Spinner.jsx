import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ImSpinner2 } from '@components';

function Spinner({ icon, color }) {
  return <StyledSpinner color={color}>{icon}</StyledSpinner>;
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  animation: ${rotate} 0.8s linear infinite;

  svg {
    font-size: 2rem;
    color: ${({ theme, color }) => theme.colors[color]};
  }
`;

Spinner.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.oneOf([
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

Spinner.defaultProps = {
  icon: <ImSpinner2 />,
  color: 'gray',
};

export default Spinner;
