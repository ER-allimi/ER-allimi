import { SYMPTOM_TYPE } from '@constants';

type SymTypCodType = keyof typeof SYMPTOM_TYPE;

const classifyMsgSymTyp = (symTypCod: SymTypCodType) => {
  return SYMPTOM_TYPE[symTypCod] || '알수없음';
};

export { classifyMsgSymTyp };
