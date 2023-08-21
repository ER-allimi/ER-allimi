import { useSetRecoilState } from 'recoil';
import toast from 'react-hot-toast';
import { userLocationState, mapCenterPointState } from '@stores';
import { getAddressByCoor } from '@utils';
import { ErrorMessage, MdLocationOff } from '@components';

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
    toast(() => (
      <ErrorMessage
        content="[실패] 사용자의 위치 정보 가져오기"
        icon={<MdLocationOff />}
        iconColor="yellowDark"
      />
    ));
  };

  return { handleGetCurPosSuccess, handleGetCurPosFail };
}

export default useGetUserLocation;
