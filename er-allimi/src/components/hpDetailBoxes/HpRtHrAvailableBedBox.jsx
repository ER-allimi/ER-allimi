import PropTypes from 'prop-types';
import { ClosedBox, FaBed } from '@components';

function HpRtHrAvailableBedBox({ className }) {
  return <ClosedBox className={className} icon={<FaBed />}>실시간 입원실 가용 병상 정보</ClosedBox>;
}

HpRtHrAvailableBedBox.propTypes = {
  className: PropTypes.string,
};

export default HpRtHrAvailableBedBox;
