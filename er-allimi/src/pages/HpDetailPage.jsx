import { Map, HpDetailBoxes } from '@pages';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { targetHpIdState } from '@stores';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HpDetailPage() {
  const targetHpId = useParams();
  const setTargetHpId = useSetRecoilState(targetHpIdState);
  useEffect(() => {
    setTargetHpId(targetHpId.hospitalId);
  }, [targetHpId]);

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
