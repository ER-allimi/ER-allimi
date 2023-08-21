import { useQuery } from '@tanstack/react-query';
import { getErMsg } from '@services';
function useFetchHpMsg(hpId) {
  const query = useQuery({
    queryKey: ['erMsg', hpId],
    queryFn: () => getErMsg({ HPID : hpId }),
    onError: () => {
      alert(
        `응급실 및 진료불가능 메시지 데이터를 가져오는데 실패했습니다.\n확인 버튼 클릭 시, 자동으로 새로고침됩니다.`,
      );
      location.reload();
    },
    retry: 3,
    refetchInterval: 30 * 60 * 1000, // ms
    refetchIntervalInBackground: true,
    select: (data) => {
      return {
        hpId : data.hpid,
        msgDate: data.symBlkSttDtm,
        msgType: data.symBlkMsgTyp,
        msgContent: data.symBlkMsg,
        msgSymType: data.symTypCodMag,
      };
    },
  });
  return query;
}

export default useFetchHpMsg;
