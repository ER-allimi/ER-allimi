import PropTypes from 'prop-types';
import {
  ClosedBox,
  AiTwotoneAlert,
  HpRtErAvailableBedContent,
} from '@components';

function HpRtErAvailableBedBox({ className }) {
  return (
    <ClosedBox className={className} icon={<AiTwotoneAlert />}>
      <HpRtErAvailableBedContent />
    </ClosedBox>
  );
}

HpRtErAvailableBedBox.propTypes = {
  className: PropTypes.string,
};

export default HpRtErAvailableBedBox;
