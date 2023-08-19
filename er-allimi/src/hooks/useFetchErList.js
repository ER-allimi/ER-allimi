import { useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { getErList } from '@services';
import { ersListState } from '@stores';

// 응급실 전체 목록 정보 가져오기
function useFetchErList() {
  const setErsListState = useSetRecoilState(ersListState);

  const query = useQuery({
    queryKey: ['erList'],
    queryFn: getErList,
    retry: 3,
    onError: (err) => {
      alert(
        `응급실 목록 데이터를 가져오는데 실패했습니다.\n확인 버튼 클릭 시, 자동으로 새로고침됩니다.`,
      );
      location.reload();
    },
    onSuccess: (data) => {
      setErsListState(data);
    },
  });

  return query;
}

export default useFetchErList;
