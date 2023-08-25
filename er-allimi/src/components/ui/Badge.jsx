import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

function Badge({ color, outline, children, className, ...rest }) {
  return (
    <StyledBadge
      color={color}
      outline={outline}
      className={className}
      {...rest}
    >
      {children}
    </StyledBadge>
  );
}

const outlined = ({ theme, outline, color }) =>
  outline &&
  css`
    background-color: white;
    color: ${theme.colors[color]};
  `;

const StyledBadge = styled.button`
  padding: 0.1rem 0.3rem;
  border: 1px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: 50%;
  background-color: ${({ theme, color }) => theme.colors[color]};
  font-size: 13px;
  font-weight: 700;
  word-spacing: -1px;
  color: white;
  cursor: pointer;

  ${outlined}
`;

Badge.defaultProps = {
  color: 'gray',
  outlined: false,
};

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
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
  outline: PropTypes.bool,
  className: PropTypes.string,
};

export default Badge;
