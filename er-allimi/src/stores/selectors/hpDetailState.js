import { selector } from 'recoil';
import { ersListState, ersRTavailableBedState, targetHpIdState } from '@stores';

const hpDetailState = selector({
  key: 'hpDetailState',
  get: ({ get }) => {
    const ersList = get(ersListState);
    const ersRTavailableBedList = get(ersRTavailableBedState);
    const targetHpId = get(targetHpIdState);

    if (ersList.length === 0) return [];
    if (ersRTavailableBedList.length === 0) return [];
    if (!targetHpId) return [];

    const targetHpInfoData = ersList.find(
      (hpData) => hpData.hpid === targetHpId,
    );

    if (!targetHpInfoData) return [];

    const targetHpRTavailableBedData = ersRTavailableBedList.find(
      (hpData) => hpData.hpid === targetHpId,
    );

    const stages = targetHpInfoData.dutyAddr.split(' ');
    const [stage1, stage2] = [stages[0], stages[1]];

    const hpInfo = {
      dutyName: targetHpInfoData.dutyName,
      dutyEmclsName: targetHpInfoData.dutyEmclsName,
      dutyAddr: targetHpInfoData.dutyAddr,
      dutyTel3: targetHpInfoData.dutyTel3,
    };

    return {
      hpId: targetHpId,
      hpInfo: hpInfo,
      HpRTavailableBed: targetHpRTavailableBedData,
      stage1: stage1,
      stage2: stage2,
    };
  },
});

export { hpDetailState };
