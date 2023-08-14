import styled from '@emotion/styled';
import { Map, ErsBoxes } from '@pages';

function MapView() {
  return (
    <StyledMapView>
      <Map />
      <AbsoluteErsBoxes />
    </StyledMapView>
  );
}

const StyledMapView = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const AbsoluteErsBoxes = styled(ErsBoxes)`
  position: absolute;
  top: 0;
  left: 0;
`;

export default MapView;
