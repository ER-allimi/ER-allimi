import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { HpMessageItem, AutoPlaySlider } from '@components';
import { classifyMsgSymTyp } from '@utils';
import { SYMPTOM_TYPE } from '@constants';

type SymTypCodType = keyof typeof SYMPTOM_TYPE;

type LabelType = {
  label: string;
};

type HpMessageItemType = {
  hpid: string;
  rnum: string;
  symBlkMsgTyp: string;
  symBlkSttDtm: number;
  symBlkEndDtm: number;
  symTypCod: SymTypCodType;
  symBlkMsg: string;
};

interface HpMessageListProps {
  data: Array<HpMessageItemType>;
}

function HpMessageList({ data }: HpMessageListProps) {
  const SlidesData = data.map((item) => {
    return { ...item, label: `${item.hpid}+${item.rnum}` };
  });

  const renderSlide = (data: HpMessageItemType & LabelType) => {
    const { symBlkMsgTyp, symBlkSttDtm, symBlkEndDtm, symTypCod, symBlkMsg } =
      data;

    return (
      <HpMessageItem
        msgType={symBlkMsgTyp}
        msgStartDate={symBlkSttDtm}
        msgEndDate={symBlkEndDtm}
        msgSymType={classifyMsgSymTyp(symTypCod)}
        msgContent={symBlkMsg}
      ></HpMessageItem>
    );
  };

  return (
    <>
      <AutoPlaySliderAtLg
        data={SlidesData}
        renderSlide={renderSlide}
        paginationFraction
        controllersPosition="top"
        paginationPosition="top"
      />
      <AutoPlaySliderAtMd
        data={SlidesData}
        renderSlide={renderSlide}
        paginationFraction
        controllersPosition="bottom"
        paginationPosition="bottom"
      />
    </>
  );
}

const AutoPlaySliderAtLg = styled(AutoPlaySlider)`
  display: block;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      display: none;
    }
  `}
`;

const AutoPlaySliderAtMd = styled(AutoPlaySlider)`
  display: none;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      display: block;
    }
  `}
`;

export default HpMessageList;
