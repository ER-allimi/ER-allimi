const getPathHospitalDetail = ({ hospitalId }) => `/hospital/${hospitalId}`;
const getIpFromPathHospitalDetail = (path) => {
  const result = path.split('/')[2];
  return result  
};

export { getPathHospitalDetail, getIpFromPathHospitalDetail };
