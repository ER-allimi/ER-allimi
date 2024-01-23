import { useState } from 'react';
import styled from '@emotion/styled';
import { AdultModel, KidModel, EtcSrIll } from '@components';
import { classifySurgery } from '@utils';
import type { HpSurgeryDataType } from '@utils';
import {
  ADULT_HEAD,
  ADULT_CHEST,
  ADULT_STOMACH,
  ADULT_ARM1,
  ADULT_ARM2,
  ADULT_LEG1,
  ADULT_LEG2,
  KID_CHEST,
  KID_STOMACH,
  ETC,
} from '@constants';
import type { BodyPartType } from '@constants';

interface ModelsProps {
  hpData: HpSurgeryDataType;
}

type DisplayedPopoverProps = Array<{
  bodyPart: BodyPartType;
  showContent: boolean;
}>;

function Models({ hpData }: ModelsProps) {
  const [displayedPopover, setDisplayedPopover] =
    useState<DisplayedPopoverProps>([
      { bodyPart: ADULT_HEAD, showContent: false },
      { bodyPart: ADULT_CHEST, showContent: false },
      { bodyPart: ADULT_STOMACH, showContent: false },
      { bodyPart: ADULT_ARM1, showContent: false },
      { bodyPart: ADULT_ARM2, showContent: false },
      { bodyPart: ADULT_LEG1, showContent: false },
      { bodyPart: ADULT_LEG2, showContent: false },
      { bodyPart: KID_CHEST, showContent: false },
      { bodyPart: KID_STOMACH, showContent: false },
      { bodyPart: ETC, showContent: false },
    ]);

  const handlePopoverClick = (bodyPart: BodyPartType) => {
    const newDisplayedPopover = displayedPopover.map((part) => {
      if (part.bodyPart === bodyPart)
        return { ...part, showContent: !part.showContent };
      return { ...part, showContent: false };
    });

    setDisplayedPopover(newDisplayedPopover);
  };

  const handleContentRemove = () => {
    const newDisplayedPopover = displayedPopover.map((part) => {
      return { ...part, showContent: false };
    });

    setDisplayedPopover(newDisplayedPopover);
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
