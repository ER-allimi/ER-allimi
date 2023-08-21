import HpMessageItem from './HpMessageItem';

function HpMessageList() {
  const dummyData = [
    {
      type: '응급',
      content: '소아 중증환자, 소아외상 진료함',
      date: '2023-08-07 10:00:00',
    },
    {
      type: '중증',
      content:
        '영상의학과 staff학회참석으로 angiography  (PCD, PTBD, pigtail,  AV shunt 관련시술) 불가',
      date: '2023-08-07 10:00:00',
    },
  ];
  return dummyData.map((data, idx) => {
    <HpMessageItem
      key={idx}
      megType={data.type}
      msgContent={data.content}
      msgDate={data.date}
    ></HpMessageItem>;
  });
}

export default HpMessageList;
