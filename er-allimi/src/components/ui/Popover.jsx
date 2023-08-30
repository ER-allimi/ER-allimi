import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

function Popover({
  className,
  containerClassName,
  children,
  content,
  direction,
  distanceAway,
  color,
  showContent,
  handlePopoverClick,
  handleContentRemove,
}) {
  const target = useRef();
  const contentBox = useRef();

  useEffect(() => {
    // 브라우저 화면 크기가 변경되는 경우, contentBox 안보이게
    const resizeCallback = handleContentRemove;
    window.addEventListener('resize', resizeCallback);

    // target의 위치가 변경되는 경우, contentBox 안보이게
    const containerEl = document.querySelector(`.${containerClassName}`);

    if (!containerEl) return;

    const scrollCallback = handleContentRemove;
    containerEl.addEventListener('scroll', scrollCallback);

    return () => {
      window.removeEventListener('resize', resizeCallback);
      containerEl.removeEventListener('scroll', scrollCallback);
    };
  }, []);

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
    <StyledPopover
      className={className}
      onClick={handlePopoverClick}
      ref={target}
    >
      {children}
      {showContent &&
        ReactDom.createPortal(
          <ContentBox
            className="popover-content-box"
            direction={direction}
            distanceAway={distanceAway}
            color={color}
            ref={contentBox}
          >
            {renderContent}
            <Pointy direction={direction} />
          </ContentBox>,
          document.querySelector('.popover-container'),
        )}
    </StyledPopover>
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

const StyledPopover = styled.div`
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
  z-index: 99999;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 0.4rem 0.6rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 0.3rem 0.5rem;
  }

  p {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;

    @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
      line-height: 16px;
      letter-spacing: 0.2px;
      font-size: 11px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      line-height: 15px;
      letter-spacing: 0.1px;
      font-size: 10px;
    }
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

Popover.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string, // target을 담고 있는 컨테이너의 클래스명
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
  showContent: PropTypes.bool.isRequired,
  handlePopoverClick: PropTypes.func.isRequired,
  handleContentRemove: PropTypes.func.isRequired,
};

Popover.defaultProps = {
  content: '내용',
  direction: 'top',
  distanceAway: 10,
  color: 'grayDarker',
};

export default Popover;
