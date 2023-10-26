import { ClosedBox, AiTwotoneAlert } from '@components';

const TEXT = '닫힘이 가능한 박스의 내용';

export default {
  title: 'ClosedBox',
  component: ClosedBox,
  args: {
    children: TEXT,
    icon: <AiTwotoneAlert />,
  },
};


export const Default = {};

export const OutlineColor = {
  args: {
    outlineColor: 'redLight',
  },
};
