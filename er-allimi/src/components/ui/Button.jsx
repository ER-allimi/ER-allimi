import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

function Button({ color, round, outline, children, className, ...rest }) {
  return (
    <StyledButton
      color={color}
      round={round}
      outline={outline}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

const roundValue = {
  sm: '0.2rem',
  md: '0.5rem',
  lg: '0.8rem',
};

const outlined = ({ theme, outline, color }) =>
  outline &&
  css`
    background-color: white;
    color: ${theme.colors[color]};
  `;

const StyledButton = styled.button`
  padding: 0.2rem 0.4rem;
  border: 1px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: ${({ round }) => roundValue[round]};
  background-color: ${({ theme, color }) => theme.colors[color]};
  font-size: 13px;
  font-weight: 700;
  word-spacing: -1px;
  color: white;
  cursor: pointer;

  ${outlined}
`;

Button.defaultProps = {
  color: 'gray',
  round: 'md',
  outlined: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
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
  round: PropTypes.oneOf(['sm', 'md', 'lg']),
  outline: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
