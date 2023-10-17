import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles';

interface ButtonProps {
  color?: keyof typeof theme.colors;
  round?: 'sm' | 'md' | 'lg';
  outline?: boolean;
  children: string | number | React.ReactNode;
  className?: string;
  [key: string]: any;
}

function Button({
  color = 'gray',
  round = 'md',
  outline = false,
  children,
  className,
  ...rest
}: ButtonProps) {
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

interface outlinedProps {
  theme: typeof theme;
  outline: boolean;
  color: keyof typeof theme.colors;
}

const outlined = ({ theme, outline, color }: outlinedProps) =>
  outline &&
  css`
    background-color: white;
    color: ${theme.colors[color]};
  `;

interface StyledButtonProps {
  theme?: typeof theme;
  round: 'sm' | 'md' | 'lg';
  color: keyof typeof theme.colors;
  outline: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
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

export default Button;
