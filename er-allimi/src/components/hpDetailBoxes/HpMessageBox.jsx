import PropTypes from 'prop-types';
import { Box } from '@components';
import { useFetchHpMsg } from '@hooks';
import { useRecoilValue } from 'recoil';
import { targetHpIdState } from '@stores';

function HpMessageBox({ className }) {
  const targetHpId = useRecoilValue(targetHpIdState);
  const { data, isLoading, isError } = useFetchHpMsg(targetHpId);

  return (
    <>
      <Box className={className}>응급실 메시지</Box>;
    </>
  );
}

HpMessageBox.propTypes = {
  className: PropTypes.string,
};

export default HpMessageBox;
