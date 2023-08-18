import { useQuery } from '@tanstack/react-query';
import { getErList } from '@services';

// 응급실 전체 목록 정보 가져오기
function useFetchErList() {
  const query = useQuery({
    queryKey: ['erList'],
    queryFn: getErList,
    retry: 3,
  });

  return query;
}

export default useFetchErList;
