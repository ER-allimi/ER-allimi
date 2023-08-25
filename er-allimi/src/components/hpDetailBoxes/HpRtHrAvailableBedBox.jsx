import PropTypes from 'prop-types';
import { ClosedBox, FaBed, HpRtHrAvailableBedContent } from '@components';

function HpRtHrAvailableBedBox({ className }) {
  return (
    <ClosedBox className={className} icon={<FaBed />}>
      {' '}
      <HpRtHrAvailableBedContent />
    </ClosedBox>
  );
}

HpRtHrAvailableBedBox.propTypes = {
  className: PropTypes.string,
};

export default HpRtHrAvailableBedBox;
