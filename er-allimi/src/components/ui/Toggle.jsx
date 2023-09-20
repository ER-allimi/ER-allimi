import PropTypes from 'prop-types';
import styled from '@emotion/styled';

function Toggle({
  data,
  select,
  handleToggleClick,
  color,
  className,
  ...rest
}) {
  const renderOptions = data.map((item) => {
    return <Option key={item.label}>{item.label}</Option>;
  });

  return (
    <StyledToggle className={className} color={color} {...rest}>
      {renderOptions}
      <Stone onClick={handleToggleClick} select={select} />
    </StyledToggle>
  );
}

const StyledToggle = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 1rem;
  background-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: 2px 2px 3px 2px ${({ theme }) => theme.colors.grayLight};
  overflow: hidden;
`;

const Option = styled.div`
  padding: 0.3rem 0.6rem;
  word-spacing: -1px;
  font-size: 14px;
  font-weight: 700;
  color: white;

  &:nth-of-type(1) {
    text-align: right;
  }

  &:nth-of-type(2) {
    text-align: left;
  }
`;

const Stone = styled.div`
  position: absolute;
  top: 0;
  left: ${({ select }) => (1 - select) * 50}%;
  width: 50%;
  height: 100%;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 5px 5px ${({ theme }) => theme.colors.grayLight};
  cursor: pointer;
  transition: left 0.3s ease-in;
`;

Toggle.defaultProps = {
  color: 'gray',
};

Toggle.propTypes = {
  data: PropTypes.array.isRequired,
  select: PropTypes.number.isRequired,
  handleToggleClick: PropTypes.func.isRequired,
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
  className: PropTypes.string,
};

export default Toggle;
