import { useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { getErList } from '@services';
import { ersListState } from '@stores';
import { ErrorMessage } from '@components';
import { useCallback } from 'react';

// 응급실 전체 목록 정보 가져오기
function useFetchErList() {
  const setErsListState = useSetRecoilState(ersListState);

  const query = useQuery({
    queryKey: ['erList'],
    queryFn: getErList,
    retry: 3,
    select:useCallback(
      (data) => setErsListState(data),
      []
    ),
    meta: {
      errorMessage: (
        <ErrorMessage
          content="[실패] 응급실 목록 데이터 가져오기"
          refreshButton
        />
      ),
    },
  });

  return query;
}

export default useFetchErList;
