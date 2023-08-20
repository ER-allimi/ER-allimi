import { useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { getErRTavailableBed } from '@services';
import { ersRTavailableBedState } from '@stores';

function useFetchErsRTavailableBed() {
  const setErsRTavailableBed = useSetRecoilState(ersRTavailableBedState);

  const query = useQuery({
    queryKey: ['ersRTavailableBed'],
    queryFn: () => getErRTavailableBed({ STAGE1: '', STAGE2: '' }),
    retry: 3,
    onError: (err) => {
      alert(
        `응급실 실시간 가용 병상 데이터를 가져오는데 실패했습니다.\n확인 버튼 클릭 시, 자동으로 새로고침됩니다.`,
      );
      location.reload();
    },
    onSuccess: (data) => {
      setErsRTavailableBed(data);
    },
    refetchInterval: 30 * 60 * 1000, // ms
    refetchIntervalInBackground: true,
  });

  return query;
}

export default useFetchErsRTavailableBed;
