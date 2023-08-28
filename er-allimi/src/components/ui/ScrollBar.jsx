import styled from '@emotion/styled';
import PropTypes from 'prop-types';

function ScrollBar({
  className,
  scrollBarWidth,
  scrollBarBackground,
  scrollBarColor,
  children,
}) {
  return (
    <ScrollBarContainer
      scrollBarWidth={scrollBarWidth}
      scrollBarBackground={scrollBarBackground}
      scrollBarColor={scrollBarColor}
      className={className}
    >
      {children}
    </ScrollBarContainer>
  );
}

const ScrollBarContainer = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: ${({ scrollBarWidth }) => `${scrollBarWidth}px`};
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: ${({ theme, scrollBarColor }) => theme.colors[scrollBarColor]};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme, scrollBarBackground }) =>
      theme.colors[scrollBarBackground]};
  }
`;

ScrollBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  scrollBarWidth: PropTypes.number,
  scrollBarColor: PropTypes.oneOf([
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
  scrollBarBackground: PropTypes.oneOf([
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
};
export default ScrollBar;
