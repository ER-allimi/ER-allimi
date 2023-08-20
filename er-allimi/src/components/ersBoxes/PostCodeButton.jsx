import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';
import {
  userLocationState,
  mapCenterPointState,
  ersPaginationState,
} from '@stores';
import { Button } from '@components';
import { getCoorByAddress } from '@utils';
import { theme } from '@styles';

const width =
  document.body.offsetWidth > 768
    ? 500
    : document.body.offsetWidth > 320
    ? 400
    : 300;
const height =
  document.body.offsetWidth > 768
    ? 600
    : document.body.offsetWidth > 320
    ? 500
    : 400;

const themeObj = {
  bgColor: theme.colors.grayLighter, //바탕 배경색
  pageBgColor: theme.colors.gray, //페이지 배경색
  textColor: theme.colors.grayDarker, //기본 글자색
  queryTextColor: theme.colors.grayDarker, //검색창 글자색
  postcodeTextColor: theme.colors.red, //우편번호 글자색
};

function PostCodeButton({ className }) {
  const setUserLocation = useSetRecoilState(userLocationState);
  const setMapCenterPoint = useSetRecoilState(mapCenterPointState);
  const setErsPagination = useSetRecoilState(ersPaginationState);

  const handleButtonClick = () => {
    new window.daum.Postcode({
      oncomplete: async function (data) {
        const { roadAddress, jibunAddress } = data;

        const { longitude, latitude } = await getCoorByAddress({
          address: jibunAddress || roadAddress,
        });

        setUserLocation({
          latitude,
          longitude,
          address: {
            address: jibunAddress,
            road_address: roadAddress,
          },
        });

        setMapCenterPoint({
          latitude,
          longitude,
        });

        setErsPagination(1);
      },
      width, //생성자에 크기 값을 명시적으로 지정해야 합니다.
      height,
      theme: themeObj,
    }).open({
      left: window.screen.width / 2 - width / 2,
      top: window.screen.height / 2 - height / 2,
      popupTitle: '우편번호 검색 팝업', //팝업창 타이틀 설정 (영문,한글,숫자 모두 가능)
      popupKey: 'popup1',
    });
  };

  return (
    <Button
      className={className}
      color="gray"
      round="lg"
      onClick={handleButtonClick}
    >
      위치 찾기
    </Button>
  );
}

PostCodeButton.propTypes = {
  className: PropTypes.string,
};

export default PostCodeButton;
