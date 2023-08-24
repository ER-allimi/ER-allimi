import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

function Tooltip({
  children,
  content,
  direction,
  distanceAway,
  color,
  className,
}) {
  let renderContent;
  if (typeof content === 'string') renderContent = <p>{content}</p>;
  else if (Array.isArray(content)) {
    renderContent = (
      <>
        {content.map((word, i) => (
          <p key={i}>{word}</p>
        ))}
      </>
    );
  }

  return (
    <StyledTooltip className={className}>
      {children}
      <ContentBox
        className="tooltip-content-box"
        direction={direction}
        distanceAway={distanceAway}
        color={color}
      >
        {renderContent}
        <Pointy direction={direction} />
      </ContentBox>
    </StyledTooltip>
  );
}

const contentBoxPosition = ({ direction, distanceAway }) => {
  const dis = distanceAway + 'px';

  switch (direction) {
    case 'left':
      return css`
        top: 50%;
        right: calc(100% + ${dis});
        transform: translateY(-50%);
      `;
    case 'right':
      return css`
        top: 50%;
        left: calc(100% + ${dis});
        transform: translateY(-50%);
      `;
    case 'top':
      return css`
        bottom: calc(100% + ${dis});
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'bottom':
      return css`
        top: calc(100% + ${dis});
        left: 50%;
        transform: translateX(-50%);
      `;
  }
};

const pointyPosition = ({ direction }) => {
  switch (direction) {
    case 'left':
      return css`
        top: 50%;
        left: 100%;
      `;
    case 'right':
      return css`
        top: 50%;
        left: 0;
      `;
    case 'top':
      return css`
        top: 100%;
        left: 50%;
      `;
    case 'bottom':
      return css`
        top: 0%;
        left: 50%;
      `;
  }
};

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .tooltip-content-box {
    display: inline-block;
  }
`;

const ContentBox = styled.div`
  display: none;
  position: absolute;
  ${contentBoxPosition}
  width: max-content;
  padding: 0.5rem 0.7rem;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 0.2rem;
  line-height: 18px;
  letter-spacing: 0.8px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  z-index: 10;

  p {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
`;

const Pointy = styled.div`
  position: absolute;
  ${pointyPosition}
  width: 5px;
  height: 5px;
  background-color: inherit;
  transform: rotate(45deg) translate(-50%);
`;

Tooltip.propTypes = {
  children: PropTypes.node, // target의 id명
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  distanceAway: PropTypes.number, // 단위: px
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
    'blue',
    'blueDark',
    'blueDarker',
    'blueLight',
    'blueLighter',
  ]),
  className: PropTypes.string,
};

Tooltip.defaultProps = {
  content: '내용',
  direction: 'top',
  distanceAway: 10,
  color: 'grayDarker',
};

export default Tooltip;
