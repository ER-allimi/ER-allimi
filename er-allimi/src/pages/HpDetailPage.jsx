import { Map, HpDetailBoxes } from '@pages';
import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { targetHpIdState, ersListState } from '@stores';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function HpDetailPage() {
  const { hospitalId, stage1, stage2 } = useParams();
  const setTargetHpId = useSetRecoilState(targetHpIdState);
  const ersList = useRecoilValue(ersListState);
  const navigate = useNavigate();
  const targetStages = `${stage1} ${stage2}`;
  const targetHp = ersList.find((item) => item.hpid === hospitalId);

  useEffect(() => {
    if (ersList.length === 0) return;

    if (!targetHp || !targetHp.dutyAddr.includes(targetStages)) {
      navigate('/not-found');
    } else {
      setTargetHpId(targetHp.hpid);
    }
  }, [hospitalId]);

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
      <Map targetHp={targetHp} />
      <AbsoluteErsBoxes />
    </StyledMapView>
  );
}

export default HpDetailPage;
