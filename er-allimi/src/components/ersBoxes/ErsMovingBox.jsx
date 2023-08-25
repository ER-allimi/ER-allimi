import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from '@emotion/styled';
import { MovingBox, ErsContent } from '@components';

function ErsMovingBox({ className }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const StyledMovingErsBox = styled(MovingBox)`
    height: calc((100vh - 70px) / 2);
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

ErsMovingBox.propTypes = {
  className: PropTypes.string,
};

export default ErsMovingBox;
