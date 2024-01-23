import { HP_SURGERY_CLASSIFICATION, Category, BodyPart } from '@constants';

export type HpSurgeryDataType = {
  [K in keyof typeof HP_SURGERY_CLASSIFICATION]: string;
};

interface RstType {
  [Category.ADULT]: {
    [BodyPart.HEAD]: Array<string>;
    [BodyPart.CHEST]: Array<string>;
    [BodyPart.STOMACH]: Array<string>;
    [BodyPart.LIMBS]: Array<string>;
  };
  [Category.KID]: {
    [BodyPart.CHEST]: Array<string>;
    [BodyPart.STOMACH]: Array<string>;
  };
  [Category.ETC]: Array<string>;
}

const classifySurgery = (data: HpSurgeryDataType) => {
  const rst: RstType = {
    [Category.ADULT]: {
      [BodyPart.HEAD]: [],
      [BodyPart.CHEST]: [],
      [BodyPart.STOMACH]: [],
      [BodyPart.LIMBS]: [],
    },
    [Category.KID]: {
      [BodyPart.CHEST]: [],
      [BodyPart.STOMACH]: [],
    },
    [Category.ETC]: [],
  };

  Object.entries(data)
    .filter((item) => {
      // 수술 가능한 것만 추려냄
      const [dataName, dataValue] = item;

      return dataValue !== '정보미제공';
    })
    .forEach((item) => {
      // 수술명으로 변환 및 분류
      const [dataName, dataValue] = item;

      if (!HP_SURGERY_CLASSIFICATION[dataName]) return; // hpid랑 메시지는 걸러냄

      const { name, category, bodyPart } = HP_SURGERY_CLASSIFICATION[dataName];

      if (category === Category.ETC) return rst[Category.ETC].push(name);
      if (!bodyPart) return;

      return rst[category][bodyPart].push(name);
    });

  return rst;
};

export { classifySurgery };
