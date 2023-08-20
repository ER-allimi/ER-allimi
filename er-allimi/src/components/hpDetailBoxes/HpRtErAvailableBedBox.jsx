import PropTypes from 'prop-types';
import { ClosedBox, AiTwotoneAlert } from '@components';

function HpRtErAvailableBedBox({ className }) {
  return (
    <ClosedBox className={className} icon={<AiTwotoneAlert />}>
      실시간 응급실 가용 병상 정보
    </ClosedBox>
  );
}

HpRtErAvailableBedBox.propTypes = {
  className: PropTypes.string,
};

export default HpRtErAvailableBedBox;
