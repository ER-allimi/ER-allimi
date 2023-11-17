import { useState } from 'react';
import styled from '@emotion/styled';
import { MovingBox, ErsContent } from '@components';

interface ErsMovingBoxProps {
  className: string;
}

function ErsMovingBox({ className }: ErsMovingBoxProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const StyledMovingErsBox = styled(MovingBox)`
    height: calc((var(--vh, 1vh) * 100 - (30px + 1rem)) / 2);
  `;

  return (
    <StyledMovingErsBox
      className={className}
      isExpanded={isExpanded}
      handleExpand={handleExpand}
    >
      <ErsContent />
    </StyledMovingErsBox>
  );
}

export default ErsMovingBox;
