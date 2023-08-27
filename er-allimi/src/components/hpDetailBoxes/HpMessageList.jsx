import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { HpMessageItem, AutoPlaySlider } from '@components';
import { classifyMsgSymTyp } from '@utils';

function HpMessageList({ data }) {
  const SlidesData = data.map((item) => {
    return { ...item, label: `${item.hpid}+${item.rnum}` };
  });

  const renderSlide = (data) => {
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
        controllersPosition="top"
        dotsPosition="top"
      />
      <AutoPlaySliderAtMd
        data={SlidesData}
        renderSlide={renderSlide}
        controllersPosition="bottom"
        dotsPosition="bottom"
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

HpMessageList.propTypes = {
  data: PropTypes.array,
};

export default HpMessageList;
