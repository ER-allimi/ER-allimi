import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, ErsContent } from '@components';

function ErsBox({ className }) {
  const StyledErsBox = styled(Box)`
    min-height: 260px;
    max-height: calc(100vh - 200px);
  `;

  return (
    <StyledErsBox className={className}>
      <ErsContent />
    </StyledErsBox>
  );
}

ErsBox.propTypes = {
  className: PropTypes.string,
};

export default ErsBox;
