import PropTypes from 'prop-types';
import { ClosedBox, BiBody } from '@components';
import { HpSrIllContent } from '@components';

function HpSrIIIBox({ className }) {
  return (
    <ClosedBox className={className} icon={<BiBody />}>
      <HpSrIllContent />
    </ClosedBox>
  );
}

HpSrIIIBox.propTypes = {
  className: PropTypes.string,
};

export default HpSrIIIBox;
