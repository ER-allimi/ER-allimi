import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getSrIllAccept } from '@services';
import { ErrorMessage } from '@components';
import type { HpSurgeryDataType } from '@utils';

export type UseFetchHpSrIllReturnType =
  | Array<HpSurgeryDataType>
  | HpSurgeryDataType;

function useFetchHpSrIII(
  stage1: string,
  stage2: string,
  select: (data: UseFetchHpSrIllReturnType) => void,
) {
  const query = useQuery({
    queryKey: ['HpSrIII', stage1, stage2],
    queryFn: () => getSrIllAccept({ STAGE1: stage1, STAGE2: stage2 }),
    meta: {
      errorMessage: (
        <ErrorMessage content="[실패] 중증질환 데이터 가져오기" refreshButton />
      ),
    },
    select,
    staleTime: 30 * 60 * 1000, // ms
    cacheTime: 30 * 60 * 1000, // ms
    retry: 3,
    refetchInterval: 30 * 60 * 1000, // ms
    refetchIntervalInBackground: true,
    suspense: true,
  });

  return query;
}

export default useFetchHpSrIII;
