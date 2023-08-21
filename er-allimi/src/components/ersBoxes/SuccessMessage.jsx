import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { BsCheckCircleFill } from '@components';

function SuccessMessage({ content, icon, iconColor }) {
  return (
    <StyledSuccessMessage iconColor={iconColor}>
      {icon}
      <p>{content}</p>
    </StyledSuccessMessage>
  );
}

const StyledSuccessMessage = styled.div`
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

SuccessMessage.propTypes = {
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

SuccessMessage.defaultProps = {
  content: '성공 메시지를 입력해주세요.',
  icon: <BsCheckCircleFill />,
  iconColor: 'greenDark',
};

export default SuccessMessage;
