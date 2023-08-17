import { useSetRecoilState } from 'recoil';
import { userLocationState } from '@stores';
import { getAddressByCoor } from '@utils';

// 사용자의 위치 정보를 가져와 recoil에 저장
function useGetUserLocation() {
  const setUserLocationState = useSetRecoilState(userLocationState);

  const handleGetCurPosSuccess = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const address = await getAddressByCoor({ latitude, longitude });

    setUserLocationState({ latitude, longitude, address });
  };

  const handleGetCurPosFail = (err) => {
    console.log(`사용자의 위치 정보를 가져오지 못했습니다.(${err.message})`);
  };

  navigator.geolocation.getCurrentPosition(
    handleGetCurPosSuccess,
    handleGetCurPosFail,
  );
}

export default useGetUserLocation;
