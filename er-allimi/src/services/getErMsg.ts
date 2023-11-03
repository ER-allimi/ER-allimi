import axios from 'axios';

interface GetErMsgProps {
  HPID: string;
}

const serviceKey = encodeURI(import.meta.env.VITE_SERVICE_KEY);

const getErMsg = async ({ HPID }: GetErMsgProps) => {
  const url =
    'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmSrsillDissMsgInqire';
  try {
    const response = await axios.get(url, {
      params: {
        serviceKey,
        HPID,
        numOfRows: 100,
      },
    });

    return response.data.response.body.items?.item || [];
  } catch (error) {
    console.error(error);
  }
};

export { getErMsg };
