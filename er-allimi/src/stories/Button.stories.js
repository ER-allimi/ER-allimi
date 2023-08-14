import { Button } from '@components';

export default {
  title: 'Button',
  component: Button,
};

const TEXT = '버튼';

export const Color = {
  args: {
    color: 'red',
    children: TEXT,
  },
};

export const Round = {
  args: {
    round: 'lg',
    children: TEXT,
  },
};

export const Outline = {
  args: {
    outline: true,
    children: TEXT,
  },
};
