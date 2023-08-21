import PropTypes from 'prop-types';
import { ClosedBox, BiBody } from '@components';
import { useRecoilValue } from 'recoil';
import { targetHpIdState, sortedErsWithRadiusState } from '@stores';
import { useFetchHpSrIII } from '@hooks';

function HpSrIIIBox({ className }) {
  const targetHpId = useRecoilValue(targetHpIdState);
  const sortedErs = useRecoilValue(sortedErsWithRadiusState);
  const targetHpStages = sortedErs
    .filter((item) => {
      return item.hpInfo.hpid === targetHpId;
    })
    .map((hpInfoData) => {
      const addrArr = hpInfoData.hpInfo.dutyAddr.split(' ');
      const [stage1, stage2] = [addrArr[0], addrArr[1]];
      return {stage1, stage2};
    });
  const { data, isLoading, isError } = useFetchHpSrIII(...targetHpStages);

  console.log(targetHpStages,'타겟')
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
