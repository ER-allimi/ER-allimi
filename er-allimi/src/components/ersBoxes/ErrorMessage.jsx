import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AiFillWarning, RefreshButton } from '@components';

function ErrorMessage({ content, icon, iconColor, refreshButton }) {
  return (
    <StyledErrorMessage iconColor={iconColor}>
      {icon}
      <p>{content}</p>
      {refreshButton && <RefreshButton />}
    </StyledErrorMessage>
  );
}

const StyledErrorMessage = styled.div`
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

ErrorMessage.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.element,
  iconColor: PropTypes.oneOf([
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
  refreshButton: PropTypes.bool,
};

ErrorMessage.defaultProps = {
  content: '에러 메시지를 입력해주세요.',
  icon: <AiFillWarning />,
  iconColor: 'redLight',
  refreshButton: false,
};

export default ErrorMessage;
