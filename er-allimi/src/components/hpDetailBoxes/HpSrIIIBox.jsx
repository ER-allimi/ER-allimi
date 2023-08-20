import PropTypes from 'prop-types';
import { ClosedBox, BiBody } from '@components';

function HpSrIIIBox({ className }) {
  return (
    <ClosedBox className={className} icon={<BiBody />}>
      중증질환정보
    </ClosedBox>
  );
}

HpSrIIIBox.propTypes = {
  className: PropTypes.string,
};

export default HpSrIIIBox;
