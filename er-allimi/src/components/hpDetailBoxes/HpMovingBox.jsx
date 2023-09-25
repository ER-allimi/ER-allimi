import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import {
  MovingBox,
  HpInfoContent,
  SelectButtons,
  ScrollBar,
  SelectedContent,
} from '@components';
import { showHpMessageState } from '@stores';

function HpMovingBox({ className }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const setShowHpMessage = useSetRecoilState(showHpMessageState);

  const handleExpand = useCallback(() => {
    isExpanded
      ? setShowHpMessage(false)
      : setTimeout(() => {
          setShowHpMessage(true);
        }, 0.5 * 1000);
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const StyledMovingErsBox = styled(MovingBox)`
    height: calc((var(--vh, 1vh) * 100 - (30px + 1rem)) / 2);
    /* overflow-y: auto; */
  `;

  const StyledScrollBar = styled(ScrollBar)`
    width: 100%;
    overflow-y: auto;
    padding-bottom: 2rem;
  `;

  const StyledSelectButtons = styled(SelectButtons)`
    margin: 1rem 0 2rem 0;
  `;

  return (
    <StyledMovingErsBox
      className={className}
      isExpanded={isExpanded}
      handleExpand={handleExpand}
    >
      <StyledScrollBar className="hpMovingBox">
        <HpInfoContent />
        <StyledSelectButtons />
        <SelectedContent />
      </StyledScrollBar>
    </StyledMovingErsBox>
  );
}

HpMovingBox.propTypes = {
  className: PropTypes.string,
};

export default HpMovingBox;
