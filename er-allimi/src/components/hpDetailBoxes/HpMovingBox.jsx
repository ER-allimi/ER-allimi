import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { MovingBox } from '@components';
import { showHpMessageState } from '@stores';

function HpMovingBox({ className }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const setShowHpMessage = useSetRecoilState(showHpMessageState);

  const handleExpand = () => {
    isExpanded
      ? setShowHpMessage(false)
      : setTimeout(() => setShowHpMessage(true), 0.3 * 1000);
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledMovingErsBox
      className={className}
      isExpanded={isExpanded}
      handleExpand={handleExpand}
    >
      하단 디테일 박스
    </StyledMovingErsBox>
  );
}
const StyledMovingErsBox = styled(MovingBox)`
  height: calc((100vh - 70px) / 2);
`;

HpMovingBox.propTypes = {
  className: PropTypes.string,
};

export default HpMovingBox;
