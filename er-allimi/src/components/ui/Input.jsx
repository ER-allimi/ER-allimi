import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

function Input({
  value,
  handleInputChange,
  name,
  placeholder,
  leftIcon,
  rightIcon,
  color,
  round,
  fullWidth,
  disabled,
}) {
  return (
    <StyledInput
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      color={color}
      round={round}
      fullWidth={fullWidth}
    >
      <label htmlFor={name}>{leftIcon}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        disabled={disabled}
      />
      <label htmlFor={name}>{rightIcon}</label>
    </StyledInput>
  );
}

const roundValue = {
  sm: '0.2rem',
  md: '0.5rem',
  lg: '0.8rem',
};

const container = ({ theme, leftIcon, rightIcon, color, round, fullWidth }) =>
  (leftIcon || rightIcon) &&
  css`
    display: flex;
    padding: 0.2rem 0.5rem;
    width: ${fullWidth ? '100%' : '300px'};
    border: 1px solid ${theme.colors[color]};
    border-radius: ${roundValue[round]};
    background-color: white;

    input {
      ${leftIcon &&
      css`
        margin-left: 0.3rem;
      `}
      ${rightIcon &&
      css`
        margin-right: 0.3rem;
      `}
      padding: 0 0.5rem;
      width: 100%;
      border: none;
    }

    label {
      color: ${theme.colors[color]};
    }
  `;

const StyledInput = styled.div`
  input {
    padding: 0.2rem 0.5rem;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};
    border: 1px solid ${({ theme, color }) => theme.colors[color]};
    border-radius: ${({ round }) => roundValue[round]};
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  ${container}
`;

Input.defaultProps = {
  color: 'gray',
  round: 'md',
  fullWidth: false,
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
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
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;
