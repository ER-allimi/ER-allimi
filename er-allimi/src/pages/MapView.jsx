import styled from '@emotion/styled';
import { Map, ErsBoxes } from '@pages';

function MapView() {
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

  return (
    <StyledMapView>
      <Map />
      <AbsoluteErsBoxes />
    </StyledMapView>
  );
}

export default MapView;
