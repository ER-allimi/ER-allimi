import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles';

interface BadgeProps {
  color?: keyof typeof theme.colors;
  outline?: boolean;
  children: string | number | React.ReactNode;
  className?: string;
}

function Badge({
  color = 'gray',
  outline = false,
  children,
  className,
  ...rest
}: BadgeProps) {
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

interface OutlineProps {
  theme?: any;
  outline: boolean;
  color: string;
}

const outlined = ({ theme, outline, color }: OutlineProps) =>
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

export default Badge;
