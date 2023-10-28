interface GetPathHospitalDetailProps {
  stage1: string;
  stage2: string;
  hospitalId: string;
}

const getPathHospitalDetail = ({
  stage1,
  stage2,
  hospitalId,
}: GetPathHospitalDetailProps) => `/hospital/${stage1}/${stage2}/${hospitalId}`;

export { getPathHospitalDetail };
