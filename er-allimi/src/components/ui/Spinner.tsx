import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ImSpinner2 } from '@components';
import { theme } from '@styles';

interface SpinnerProps {
  icon?: React.ReactNode;
  color?: keyof typeof theme.colors;
}

function Spinner({ icon = <ImSpinner2 />, color = 'gray' }: SpinnerProps) {
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

interface StyledSpinnerProps {
  color: keyof typeof theme.colors;
}

const StyledSpinner = styled.div<StyledSpinnerProps>`
  display: inline-block;
  animation: ${rotate} 0.8s linear infinite;

  svg {
    font-size: 2rem;
    color: ${({ theme, color }) => theme.colors[color]};
  }
`;

export default Spinner;
