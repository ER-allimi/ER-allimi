import { Button } from '@components';

const TEXT = '버튼';

export default {
  title: 'Button',
  component: Button,
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

export const Round = {
  args: {
    round: 'lg',
  },
};

export const Outline = {
  args: {
    outline: true,
  },
};
