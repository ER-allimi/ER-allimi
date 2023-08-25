const getDateStrByHvidate = (date) => {
  const dateStr = date.toString()
  // const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);
  const hour = dateStr.substring(8, 10);
  const minute = dateStr.substring(10, 12);
  // const second = dateStr.substring(12, 14);
  const result = `${month}/${day}  ${hour}:${minute}`;
  return result;
};

export { getDateStrByHvidate };
