import PropTypes from 'prop-types';
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
    <AutoPlaySlider
      data={SlidesData}
      renderSlide={renderSlide}
      controllersPosition="top"
      dotsPosition="top"
    />
  );
}

HpMessageList.propTypes = {
  data: PropTypes.array,
};

export default HpMessageList;
