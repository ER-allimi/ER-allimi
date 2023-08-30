import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
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
  const [showContent, setShowContent] = useState(false);
  const target = useRef();
  const contentBox = useRef();

  useEffect(() => {
    const targetEl = target.current;
    if (!targetEl) return;

    const mouseoverCallback = () => setShowContent(true);
    targetEl.addEventListener('mouseover', mouseoverCallback);

    const mouseoutCallback = () => setShowContent(false);
    targetEl.addEventListener('mouseout', mouseoutCallback);

    return () => {
      targetEl.removeEventListener('mouseover', mouseoverCallback);
      targetEl.removeEventListener('mouseout', mouseoutCallback);
    };
  }, [target]);

  useEffect(() => {
    const targetEl = target.current;
    const contentBoxEl = contentBox.current;

    if (!targetEl || !contentBoxEl) return;

    const { top, bottom, left, right, width, height } =
      targetEl.getBoundingClientRect();

    switch (direction) {
      case 'left':
        contentBoxEl.style.top = `${top + height / 2}px`;
        contentBoxEl.style.left = `${left - distanceAway}px`;
        contentBoxEl.style.transform = `translate(-100%, -50%)`;
        break;
      case 'right':
        contentBoxEl.style.top = `${top + height / 2}px`;
        contentBoxEl.style.left = `${right + distanceAway}px`;
        contentBoxEl.style.transform = `translateY(-50%)`;
        break;
      case 'top':
        contentBoxEl.style.top = `${top - distanceAway}px`;
        contentBoxEl.style.left = `${left + width / 2}px`;
        contentBoxEl.style.transform = `translate(-50%, -100%)`;
        break;
      case 'bottom':
        contentBoxEl.style.top = `${bottom + distanceAway}px`;
        contentBoxEl.style.left = `${left + width / 2}px`;
        contentBoxEl.style.transform = `translateX(-50%)`;
        break;
    }
  }, [target, showContent]);

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
    <StyledTooltip className={className} ref={target}>
      {children}
      {showContent &&
        ReactDom.createPortal(
          <ContentBox
            className="tooltip-content-box"
            direction={direction}
            distanceAway={distanceAway}
            color={color}
            ref={contentBox}
          >
            {renderContent}
            <Pointy direction={direction} />
          </ContentBox>,
          document.querySelector('.tooltip-container'),
        )}
    </StyledTooltip>
  );
}

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
`;

const ContentBox = styled.div`
  position: fixed;
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
