import axios from 'axios';
const serviceKey = encodeURI(import.meta.env.VITE_SERVICE_KEY);

const getErMsg = async ({ HPID }) => {
  const url =
    'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmSrsillDissMsgInqire';
  try {
    const response = await axios.get(url, {
      params: {
        serviceKey,
        HPID,
      },
    });
    return response.data.response.body.items?.item || '1';
  } catch (error) {
    console.error(error);
  }
};

export { getErMsg };
