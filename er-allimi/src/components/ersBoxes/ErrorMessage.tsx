import styled from '@emotion/styled';
import { AiFillWarning, RefreshButton } from '@components';
import type { theme } from '@styles';

interface ErrorMessageProps {
  content?: string;
  icon?: React.ReactNode;
  iconColor?: keyof typeof theme.colors;
  refreshButton?: boolean;
}

function ErrorMessage({
  content = '에러 메시지를 입력해주세요.',
  icon = <AiFillWarning />,
  iconColor = 'redLight',
  refreshButton = false,
}: ErrorMessageProps) {
  return (
    <StyledErrorMessage iconColor={iconColor}>
      {icon}
      <p>{content}</p>
      {refreshButton && <RefreshButton />}
    </StyledErrorMessage>
  );
}

interface StyledErrorMessageProps {
  iconColor: keyof typeof theme.colors;
}

const StyledErrorMessage = styled.div<StyledErrorMessageProps>`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.grayDark};

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
    color: ${({ theme, iconColor }) => theme.colors[iconColor]};
  }

  p {
    margin-right: 0.5rem;
    font-size: inherit;
  }

  button {
    font-size: 12px;
  }
`;

export default ErrorMessage;
