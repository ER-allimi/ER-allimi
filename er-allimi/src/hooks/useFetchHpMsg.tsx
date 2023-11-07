import { useQuery } from '@tanstack/react-query';
import { getErMsg } from '@services';
import { ErrorMessage } from '@components';

function useFetchHpMsg(hpId: string) {
  const query = useQuery({
    queryKey: ['erMsg', hpId],
    queryFn: () => getErMsg({ HPID: hpId }),
    meta: {
      errorMessage: (
        <ErrorMessage
          content="[실패] 응급/중증질환 메시지 가져오기"
          refreshButton
        />
      ),
    },
    staleTime: 30 * 60 * 1000, // ms
    cacheTime: 30 * 60 * 1000, // ms
    retry: 3,
    refetchInterval: 30 * 60 * 1000, // ms
    refetchIntervalInBackground: true,
  });
  return query;
}

export default useFetchHpMsg;
