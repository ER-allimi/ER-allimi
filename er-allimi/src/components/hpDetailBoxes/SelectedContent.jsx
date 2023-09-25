import { useRecoilValue } from 'recoil';
import {
  HpRtErAvailableBedContent,
  HpRtHrAvailableBedContent,
  HpSrIllContent,
} from '@components';
import { selectedHpDetailContentState } from '@stores';

function SelectedContent() {
  const selectedHpDetailContent = useRecoilValue(selectedHpDetailContentState);

  const renderSelectedContent = [
    <HpRtErAvailableBedContent key={0} />,
    <HpRtHrAvailableBedContent key={1} />,
    <HpSrIllContent key={2} />,
  ].find((_, idx) => {
    return idx === selectedHpDetailContent;
  });

  return <>{renderSelectedContent}</>;
}

export default SelectedContent;
