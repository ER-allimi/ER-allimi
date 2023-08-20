import PropTypes from 'prop-types';
import { Box } from '@components';

function HpMessageBox({ className }) {
  return <Box className={className}>응급실 메시지</Box>;
}

HpMessageBox.propTypes = {
  className: PropTypes.string,
};

export default HpMessageBox;
