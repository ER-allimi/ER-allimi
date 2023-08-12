import axios from 'axios';
const serviceKey = encodeURI(import.meta.env.VITE_SERVICE_KEY);

const getErRTavailableBed = async ({ STAGE1, STAGE2 }) => {
  const url =
    'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire';
  try {
    const response = await axios.get(url, {
      params: {
        serviceKey,
        STAGE1,
        STAGE2,
      },
    });
    return response.data.response.items?.item;
  } catch (error) {
    console.error(error);
  }
};

export { getErRTavailableBed };
