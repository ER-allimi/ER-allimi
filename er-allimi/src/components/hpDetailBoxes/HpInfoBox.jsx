import PropTypes from 'prop-types';
import { Box, HpInfoContent } from '@components';

function HpInfoBox({ className }) {
  return (
    <Box className={className}>
      <HpInfoContent />
    </Box>
  );
}

HpInfoBox.propTypes = {
  className: PropTypes.string,
};

export default HpInfoBox;
