import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { MovingBox, ErsContent } from '@components';

function ErsMovingBox({ className }) {
  const StyledMovingErsBox = styled(MovingBox)`
    height: calc((100vh - 70px) / 2);
  `;

  return (
    <StyledMovingErsBox className={className}>
      <ErsContent />
    </StyledMovingErsBox>
  );
}

ErsMovingBox.propTypes = {
  className: PropTypes.string,
};

export default ErsMovingBox;
