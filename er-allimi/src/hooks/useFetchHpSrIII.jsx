import { useQuery } from '@tanstack/react-query';
import { getSrIllAccept } from '@services';
import { ErrorMessage } from '@components';

function useFetchHpSrIII(stage1, stage2) {
  const query = useQuery({
    queryKey: ['HpSrIII', stage1, stage2],
    queryFn: () => getSrIllAccept({ STAGE1: stage1, STAGE2: stage2 }),
    meta: {
      errorMessage: (
        <ErrorMessage content="[실패] 중증질환 데이터 가져오기" refreshButton />
      ),
    },
    retry: 3,
    refetchInterval: 30 * 60 * 1000, // ms
    refetchIntervalInBackground: true,
  });

  return query;
}

export default useFetchHpSrIII;
