const ADULT_HEAD = 'adult-head';
const ADULT_CHEST = 'adult-chest';
const ADULT_STOMACH = 'adult-stomach';
const ADULT_ARM1 = 'adult-arm1';
const ADULT_ARM2 = 'adult-arm2';
const ADULT_LEG1 = 'adult-leg1';
const ADULT_LEG2 = 'adult-leg2';

const KID_CHEST = 'kid-chest';
const KID_STOMACH = 'kid-stomach';

const ETC = 'etc';

export type BodyPartType =
  | typeof ADULT_HEAD
  | typeof ADULT_CHEST
  | typeof ADULT_STOMACH
  | typeof ADULT_ARM1
  | typeof ADULT_ARM2
  | typeof ADULT_LEG1
  | typeof ADULT_LEG2
  | typeof KID_CHEST
  | typeof KID_STOMACH
  | typeof ETC;

export {
  ADULT_HEAD,
  ADULT_CHEST,
  ADULT_STOMACH,
  ADULT_ARM1,
  ADULT_ARM2,
  ADULT_LEG1,
  ADULT_LEG2,
  KID_CHEST,
  KID_STOMACH,
  ETC,
};
