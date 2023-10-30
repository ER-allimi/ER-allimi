import axios from 'axios';

// 좌표(위도, 경도)로 주소 변환하기
interface GetAddressByCoor {
  latitude: number;
  longitude: number;
}

const getAddressByCoor = async ({ latitude, longitude }: GetAddressByCoor) => {
  const key = import.meta.env.VITE_REST_API_KEY;

  const res = await axios({
    baseURL: 'https://dapi.kakao.com',
    url: '/v2/local/geo/coord2address.json',
    method: 'get',
    headers: {
      Authorization: `KakaoAK ${key}`,
    },
    params: {
      x: longitude,
      y: latitude,
    },
  });

  return res.data?.documents[0];
};

export { getAddressByCoor };
