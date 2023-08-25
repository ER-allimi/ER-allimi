import PropTypes from 'prop-types';
import { HpMessageItem } from '@components';
import { classifyMsgSymTyp } from '@utils';

function HpMessageList({ data }) {
  return (
    <div>
      {data.map((item, idx) => {
        const {
          symBlkMsgTyp,
          symBlkSttDtm,
          symBlkEndDtm,
          symTypCod,
          symBlkMsg,
        } = item;
        return (
          <HpMessageItem
            key={idx}
            msgType={symBlkMsgTyp}
            msgStartDate={symBlkSttDtm}
            msgEndDate={symBlkEndDtm}
            msgSymType={classifyMsgSymTyp(symTypCod)}
            msgContent={symBlkMsg}
          ></HpMessageItem>
        );
      })}
    </div>
  );
}

HpMessageList.propTypes = {
  data: PropTypes.array,
};

export default HpMessageList;
