const getHpRtHrAvailableBedData = (data) => {
  const hrData = [
    {
      type: '일반',
      availableBeds: data.hvgc,
      totalBeds: data.hvs38,
    },
    {
      type: '음압격리',
      availableBeds: data.hv41,
      totalBeds: data.hvs25,
    },
    {
      type: '외상전용',
      availableBeds: data.hv38,
      totalBeds: data.hvs21,
    },
    {
      type: '정신과 폐쇄 병동',
      availableBeds: data.hv40,
      totalBeds: data.hvs24,
    },
  ].filter((data) => data.totalBeds);

  const icuData = [
    {
      type: '일반',
      availableBeds: data.hvicc,
      totalBeds: data.hvs17,
    },
    {
      type: '음압격리',
      availableBeds: data.hv35,
      totalBeds: data.hvs18,
    },
    {
      type: '소아',
      availableBeds: data.hv32,
      totalBeds: data.hvs09,
    },
    {
      type: '신생아',
      availableBeds: data.hvncc,
      totalBeds: data.hvs08,
    },
    {
      type: '내과',
      availableBeds: data.hv2,
      totalBeds: data.hvs06,
    },
    {
      type: '신경과',
      availableBeds: data.hvcc,
      totalBeds: data.hvs11,
    },
    {
      type: '화상',
      availableBeds: data.hv8,
      totalBeds: data.hvs13,
    },
    {
      type: '외과',
      availableBeds: data.hv3,
      totalBeds: data.hvs07,
    },
    {
      type: '신경외과',
      availableBeds: data.hv6,
      totalBeds: data.hvs12,
    },
    {
      type: '흉부외과',
      availableBeds: data.hvccc,
      totalBeds: data.hvs16,
    },
    {
      type: '외상',
      availableBeds: data.hv9,
      totalBeds: data.hvs14,
    },
    {
      type: '심장내과',
      availableBeds: data.hv34,
      totalBeds: data.hvs15,
    },
  ].filter((data) => data.totalBeds);

  const onlyEmergencyData = [
    {
      type: '입원실',
      availableBeds: data.hv36,
      totalBeds: data.hvs19,
    },
    {
      type: '입원실 음압격리',
      availableBeds: data.hv19,
      totalBeds: data.hvs52,
    },
    {
      type: '입원실 일반격리',
      availableBeds: data.hv21,
      totalBeds: data.hvs53,
    },
    {
      type: '중환자실',
      availableBeds: data.hv31,
      totalBeds: data.hvs05,
    },
    {
      type: '중환자실 음압격리',
      availableBeds: data.hv17,
      totalBeds: data.hvs50,
    },
    {
      type: '중환자실 일반격리',
      availableBeds: data.hv18,
      totalBeds: data.hvs51,
    },
    {
      type: '소아입원실',
      availableBeds: data.hv37,
      totalBeds: data.hvs20,
    },
    {
      type: '소아중환자실',
      availableBeds: data.hv33,
      totalBeds: data.hvs10,
    },
  ].filter((data) => data.totalBeds);

  const etcData = [
    {
      type: '수술실',
      availableBeds: data.hvoc,
      totalBeds: data.hvs22,
    },
    {
      type: '외상전용 수술실',
      availableBeds: data.hv39,
      totalBeds: data.hvs23,
    },
    {
      type: '분만실',
      availableBeds: data.hv42,
      totalBeds: data.hvs26,
    },
    {
      type: '화상전용처치실',
      availableBeds: data.hv43,
      totalBeds: data.hvs36,
    },
  ].filter((data) => data.totalBeds);
  return { hrData, icuData, onlyEmergencyData, etcData };
};

export { getHpRtHrAvailableBedData };
