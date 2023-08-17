import { useSetRecoilState } from 'recoil';
import { userLocationState } from '@stores';

// 사용자 위치 정보 가져오기
function useGetUserLocation() {
  const setUserLocationState = useSetRecoilState(userLocationState);

  const handleGetCurPosSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(longitude, latitude);
    setUserLocationState({ latitude, longitude });
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
