import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import {
  MovingBox,
  HpInfoContent,
  HpRtErAvailableBedContent,
  HpRtHrAvailableBedContent,
  HpSrIllContent,
  SelectButtons,
  ScrollBar,
} from '@components';
import { showHpMessageState, selectedHpDetailContentState } from '@stores';

function HpMovingBox({ className }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const setShowHpMessage = useSetRecoilState(showHpMessageState);
  const selectedHpDetailContent = useRecoilValue(selectedHpDetailContentState);

  const handleExpand = useCallback(() => {
    isExpanded ? setShowHpMessage(false) : setShowHpMessage(true);
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const renderSelectedContent = [
    <HpRtErAvailableBedContent key={0} />,
    <HpRtHrAvailableBedContent key={1} />,
    <HpSrIllContent key={2} />,
  ].find((_, idx) => {
    return idx === selectedHpDetailContent;
  });

  const StyledMovingErsBox = styled(MovingBox)`
    height: calc((100vh - (30px + 1rem)) / 2);
    /* overflow-y: auto; */
  `;

  const StyledScrollBar = styled(ScrollBar)`
    width: 100%;
    overflow-y: auto;
  `;

  const StyledSelectButtons = styled(SelectButtons)`
    margin: 1rem 0;
  `;

  return (
    <StyledMovingErsBox
      className={className}
      isExpanded={isExpanded}
      handleExpand={handleExpand}
    >
      <StyledScrollBar>
        <HpInfoContent />
        <StyledSelectButtons />
        {renderSelectedContent}
      </StyledScrollBar>
    </StyledMovingErsBox>
  );
}

HpMovingBox.propTypes = {
  className: PropTypes.string,
};

export default HpMovingBox;
