import { useQuery } from '@tanstack/react-query';
import { getSrIllAccept } from '@services';

function useFetchHpSrIII(stage1, stage2) {
  const query = useQuery({
    queryKey: ['HpSrIII', stage1, stage2],
    queryFn: () => getSrIllAccept({ STAGE1: stage1, STAGE2: stage2 }),
    onError: () => {
      alert(
        `중증질환자 수용 정보 데이터를 가져오는데 실패했습니다.\n확인 버튼 클릭 시, 자동으로 새로고침됩니다.`,
      );
      location.reload();
    },
    retry: 3,
    refetchInterval: 30 * 60 * 1000, // ms
    refetchIntervalInBackground: true,
  });
  return query;
}

export default useFetchHpSrIII;
