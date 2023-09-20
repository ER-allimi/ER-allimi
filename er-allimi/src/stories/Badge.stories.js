import { Badge } from '@components';

const TEXT = '15';

export default {
  title: 'Badge',
  component: Badge,
  args: {
    children: TEXT,
  },
};

export const Default = {};

export const Color = {
  args: {
    color: 'red',
  },
};

export const Outline = {
  args: {
    outline: true,
  },
};
