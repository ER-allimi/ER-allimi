import { BiCurrentLocation } from '@components/icons';
import styled from '@emotion/styled';

function CurrentLocationButton({currentLocation, map}) {
  const handleButtonClick = () => {
    map.panTo(currentLocation)
  };
  return (
    <Button onClick={handleButtonClick}>
      <BiCurrentLocation size="16" color="#222222" />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;

  width: 2.25rem;
  height: 2.25rem;
  background-color: #ffffff;
  border-radius: 3px;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid rgb(226, 226, 226);
  box-shadow:  rgba(0, 0, 0, 0.15) 0px 2px 2px 0px;
`;

export default CurrentLocationButton;
