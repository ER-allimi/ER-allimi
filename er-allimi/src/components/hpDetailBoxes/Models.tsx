import { useState } from 'react';
import styled from '@emotion/styled';
import { AdultModel, KidModel, EtcSrIll } from '@components';
import { classifySurgery } from '@utils';
import type { HpSurgeryDataType } from '@utils';
import type { BodyPartType } from '@constants';

interface ModelsProps {
  hpData: HpSurgeryDataType;
}

function Models({ hpData }: ModelsProps) {
  const [displayedPopover, setDisplayedPopover] = useState<BodyPartType>();

  const handlePopoverClick = (bodyPart: BodyPartType) => {
    if (displayedPopover === bodyPart) setDisplayedPopover(undefined);
    else setDisplayedPopover(bodyPart);
  };

  const handleContentRemove = () => {
    setDisplayedPopover(undefined);
  };

  const {
    adult: adultData,
    kid: kidData,
    etc: etcData,
  } = classifySurgery(hpData);

  const StyledEtcSrIll = styled(EtcSrIll)`
    justify-self: start;
    align-self: start;
  `;

  const StyledModels = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    justify-items: center;
    align-items: baseline;
    margin-top: 1rem;
  `;

  return (
    <StyledModels>
      <AdultModel
        data={adultData}
        displayedPopover={displayedPopover}
        handlePopoverClick={handlePopoverClick}
        handleContentRemove={handleContentRemove}
      />
      <KidModel
        data={kidData}
        displayedPopover={displayedPopover}
        handlePopoverClick={handlePopoverClick}
        handleContentRemove={handleContentRemove}
      />
      {etcData.length !== 0 && (
        <StyledEtcSrIll
          data={etcData}
          displayedPopover={displayedPopover}
          handlePopoverClick={handlePopoverClick}
          handleContentRemove={handleContentRemove}
        />
      )}
    </StyledModels>
  );
}

export default Models;
