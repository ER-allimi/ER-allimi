const getPathHospitalDetail = ({ stage1, stage2, hospitalId }) =>
  `/hospital/${stage1}/${stage2}/${hospitalId}`;

export { getPathHospitalDetail };
