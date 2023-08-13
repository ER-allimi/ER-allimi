const getPathHospitalDetail = ({ hospitalId, stage1, stage2 }) => `/hospital/${stage1}/${stage2}/${hospitalId}`;

export { 
    getPathHospitalDetail,
 }
