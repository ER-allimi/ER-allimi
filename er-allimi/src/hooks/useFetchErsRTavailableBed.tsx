import { useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { getErRTavailableBed } from '@services';
import { ersRTavailableBedState } from '@stores';
import { ErrorMessage } from '@components';
import { useCallback } from 'react';

function useFetchErsRTavailableBed() {
  const setErsRTavailableBed = useSetRecoilState(ersRTavailableBedState);

  const query = useQuery({
    queryKey: ['ersRTavailableBed'],
    queryFn: () => getErRTavailableBed({ STAGE1: '', STAGE2: '' }),
    retry: 3,
    select: useCallback(
      (data: erRTavailableBedInfoType[]) => setErsRTavailableBed(data),
      [],
    ),
    meta: {
      errorMessage: (
        <ErrorMessage
          content="[실패] 가용 병상 데이터 가져오기"
          refreshButton
        />
      ),
    },
    refetchInterval: 30 * 60 * 1000, // ms
    refetchIntervalInBackground: true,
  });

  return query;
}

export default useFetchErsRTavailableBed;
