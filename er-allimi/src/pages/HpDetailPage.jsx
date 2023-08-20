import { Map, HpDetailBoxes } from '@pages';
import styled from '@emotion/styled';

function HpDetailPage() {
  const StyledMapView = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const AbsoluteErsBoxes = styled(HpDetailBoxes)`
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

export default HpDetailPage;
