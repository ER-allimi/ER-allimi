import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles';

interface InputProps {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  color?: keyof typeof theme.colors;
  round?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

function Input({
  value,
  handleInputChange,
  name,
  placeholder,
  leftIcon,
  rightIcon,
  color = 'gray',
  round = 'md',
  fullWidth = false,
  disabled,
  className,
}: InputProps) {
  return (
    <StyledInput
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      color={color}
      round={round}
      fullWidth={fullWidth}
      className={className}
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

interface ContainerProps {
  theme: typeof theme;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  color: keyof typeof theme.colors;
  round: 'sm' | 'md' | 'lg';
  fullWidth: boolean;
}

const container = ({
  theme,
  leftIcon,
  rightIcon,
  color,
  round,
  fullWidth,
}: ContainerProps) =>
  (leftIcon || rightIcon) &&
  css`
    display: flex;
    align-items: center;
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
      padding: 0.2rem 0.3rem;
      width: 100%;
      border: none;
    }

    label {
      color: ${theme.colors[color]};
    }
  `;

// 인터페이스 T에서 U 속성만 optional로 바꿔주는 유틸리티 타입
type Optional<T, U extends keyof T> = Omit<T, U> & Partial<Pick<T, U>>;

const StyledInput = styled.div<Optional<ContainerProps, 'theme'>>`
  input {
    padding: 0.2rem 0.5rem;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};
    border: 1px solid ${({ theme, color }) => theme.colors[color]};
    border-radius: ${({ round }) => roundValue[round]};
    color: ${({ theme }) => theme.colors.gray};
    word-spacing: -1px;
    letter-spacing: -1px;
    font-size: 13px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  ${container}
`;

export default Input;
