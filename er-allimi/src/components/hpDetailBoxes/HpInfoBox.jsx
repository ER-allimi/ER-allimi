import PropTypes from 'prop-types';
import { Box } from '@components';

function HpInfoBox({ className }) {
  return <Box className={className}>병원 기본정보</Box>;
}

HpInfoBox.propTypes = {
  className: PropTypes.string,
};

export default HpInfoBox;
