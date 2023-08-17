import axios from 'axios';

// 주소로 좌표(위도, 경도) 변환하기
const getCoorByAddress = async ({ address }) => {
  const key = import.meta.env.VITE_REST_API_KEY;

  const res = await axios({
    baseURL: 'https://dapi.kakao.com',
    url: '/v2/local/search/address.json',
    method: 'get',
    headers: {
      Authorization: `KakaoAK ${key}`,
    },
    params: {
      query: address,
    },
  });

  const { x: longitude, y: latitude } = res.data?.documents[0] || {};

  return { longitude: +longitude, latitude: +latitude };
};

export { getCoorByAddress };
