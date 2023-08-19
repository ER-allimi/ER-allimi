import { useSetRecoilState } from 'recoil';
import { userLocationState, mapCenterPointState } from '@stores';
import { getAddressByCoor } from '@utils';

// 사용자의 위치 정보를 가져와 recoil에 저장
function useGetUserLocation() {
  const setUserLocation = useSetRecoilState(userLocationState);
  const setMapCenterPoint = useSetRecoilState(mapCenterPointState);

  const handleGetCurPosSuccess = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const addressData = await getAddressByCoor({ latitude, longitude });
    const { address, road_address } = addressData;

    setUserLocation({
      latitude,
      longitude,
      address: {
        address: address?.address_name,
        road_address: road_address?.address_name,
      },
    });

    setMapCenterPoint({
      latitude,
      longitude,
    });
  };

  const handleGetCurPosFail = (err) => {
    alert(
      `사용자의 위치 정보를 가져오지 못했습니다.\n'응급실알리미'에서 위치 정보를 가져올 수 있게, \n설정에서 위치 접근을 허용해주세요.`,
    );
  };

  return { handleGetCurPosSuccess, handleGetCurPosFail };
}

export default useGetUserLocation;
