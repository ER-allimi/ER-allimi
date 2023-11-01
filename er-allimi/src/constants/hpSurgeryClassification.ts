import { SYMPTOM_TYPE } from '@constants';

enum Category {
  ADULT = 'adult',
  KID = 'kid',
  ETC = 'etc',
}

enum BodyPart {
  HEAD = 'head',
  CHEST = 'chest',
  STOMACH = 'stomach',
  LIMBS = 'limbs',
}

interface HpSurgeryClassificationTypes {
  [key: string]: {
    name: keyof typeof SYMPTOM_TYPE | string;
    category: Category;
    bodyPart?: BodyPart;
  };
}

const HP_SURGERY_CLASSIFICATION: HpSurgeryClassificationTypes = {
  MKioskTy1: {
    name: SYMPTOM_TYPE.Y0010, // [재관류중재술] 심근경색
    category: Category.ADULT,
    bodyPart: BodyPart.CHEST,
  },
  MKioskTy2: {
    name: SYMPTOM_TYPE.Y0020, // [재관류중재술] 뇌경색
    category: Category.ADULT,
    bodyPart: BodyPart.HEAD,
  },
  MKioskTy3: {
    name: SYMPTOM_TYPE.Y0031, // [뇌출혈수술] 거미막하출혈
    category: Category.ADULT,
    bodyPart: BodyPart.HEAD,
  },
  MKioskTy4: {
    name: SYMPTOM_TYPE.Y0032, // [뇌출혈수술] 거미막하출혈 외
    category: Category.ADULT,
    bodyPart: BodyPart.HEAD,
  },
  MKioskTy5: {
    name: SYMPTOM_TYPE.Y0041, // [대동맥응급] 흉부
    category: Category.ADULT,
    bodyPart: BodyPart.CHEST,
  },
  MKioskTy6: {
    name: SYMPTOM_TYPE.Y0042, // [대동맥응급] 복부
    category: Category.ADULT,
    bodyPart: BodyPart.STOMACH,
  },
  MKioskTy7: {
    name: SYMPTOM_TYPE.Y0051, // [담낭담관질환] 담낭질환
    category: Category.ADULT,
    bodyPart: BodyPart.STOMACH,
  },
  MKioskTy8: {
    name: SYMPTOM_TYPE.Y0052, // [담낭담관질환] 담도포함질환
    category: Category.ADULT,
    bodyPart: BodyPart.STOMACH,
  },
  MKioskTy9: {
    name: SYMPTOM_TYPE.Y0060, // [복부응급수술] 비외상
    category: Category.ADULT,
    bodyPart: BodyPart.STOMACH,
  },
  MKioskTy10: {
    name: SYMPTOM_TYPE.Y0070, // [장중첩/폐색] 영유아
    category: Category.KID,
    bodyPart: BodyPart.STOMACH,
  },
  // MKioskTy10Msg: {name: '장중첩/폐색(영유아) 가능연령', category: '', bodyPart: ''},
  MKioskTy11: {
    name: SYMPTOM_TYPE.Y0081, // [응급내시경] 성인 위장관
    category: Category.ADULT,
    bodyPart: BodyPart.STOMACH,
  },
  MKioskTy12: {
    name: SYMPTOM_TYPE.Y0082, // [응급내시경] 영유아 위장관
    category: Category.KID,
    bodyPart: BodyPart.STOMACH,
  },
  // MKioskTy12Msg: {name: '위장관 응급내시경(영유아) 가능연령', category: '', bodyPart: ''},
  MKioskTy13: {
    name: SYMPTOM_TYPE.Y0091, // [응급내시경] 성인 기관지
    category: Category.ADULT,
    bodyPart: BodyPart.CHEST,
  },
  MKioskTy14: {
    name: SYMPTOM_TYPE.Y0092, // [응급내시경] 영유아 기관지
    category: Category.KID,
    bodyPart: BodyPart.CHEST,
  },
  // MKioskTy14Msg: {name: '기관지 응급내시경(영유아) 가능연령', category: '', bodyPart: ''},
  MKioskTy15: { name: SYMPTOM_TYPE.Y0100, category: Category.ETC }, // [저출생체중아] 집중치료
  // MKioskTy15Msg: {name: '저출생 체중아 가능연령', category: '', bodyPart: ''},
  MKioskTy16: {
    name: SYMPTOM_TYPE.Y0111, // [산부인과응급] 분만
    category: Category.ADULT,
    bodyPart: BodyPart.STOMACH,
  },
  MKioskTy17: {
    name: SYMPTOM_TYPE.Y0112, // [산부인과응급] 산과수술
    category: Category.ADULT,
    bodyPart: BodyPart.STOMACH,
  },
  MKioskTy18: {
    name: SYMPTOM_TYPE.Y0113, // [산부인과응급] 부인과수술
    category: Category.ADULT,
    bodyPart: BodyPart.STOMACH,
  },
  MKioskTy19: { name: SYMPTOM_TYPE.Y0120, category: Category.ETC }, // [중증화상] 전문치료
  MKioskTy20: {
    name: SYMPTOM_TYPE.Y0131, // [사지접합] 수족지접합
    category: Category.ADULT,
    bodyPart: BodyPart.LIMBS,
  },
  MKioskTy21: {
    name: SYMPTOM_TYPE.Y0132, // [사지접합] 수족지접합 외
    category: Category.ADULT,
    bodyPart: BodyPart.LIMBS,
  },
  MKioskTy22: {
    name: SYMPTOM_TYPE.Y0141, // [응급투석] HD
    category: Category.ADULT,
    bodyPart: BodyPart.STOMACH,
  },
  MKioskTy23: {
    name: SYMPTOM_TYPE.Y0142, // [응급투석] CRRT
    category: Category.ADULT,
    bodyPart: BodyPart.STOMACH,
  },
  MKioskTy24: { name: SYMPTOM_TYPE.Y0150, category: Category.ETC }, // [정신과적응급] 폐쇄병동입원
  MKioskTy25: {
    name: SYMPTOM_TYPE.Y0160, // [안과적수술] 응급
    category: Category.ADULT,
    bodyPart: BodyPart.HEAD,
  },
  MKioskTy26: { name: SYMPTOM_TYPE.Y0171, category: Category.ETC }, // [영상의학혈관중재] 성인
  MKioskTy27: { name: SYMPTOM_TYPE.Y0172, category: Category.ETC }, // [영상의학혈관중재] 영유아
  // MKioskTy27Msg: {name: '영상의학 혈관 중재적 시술(영유아) 가능연령', bodyPart: ''},
};

export { HP_SURGERY_CLASSIFICATION, Category, BodyPart };
