import { useState } from 'react';
import { Dropdown } from '@components';

const data = [
  { value: 'small', label: '작은 사이즈' },
  { value: 'medium', label: '중간 사이즈' },
  { value: 'large', label: '큰 사이즈' },
];

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    label: '선택하세요.',
    data,
  },
};

const Template = (args) => {
  const [select, setSelect] = useState(-1);
  return <Dropdown {...args} select={select} handleOptionClick={setSelect} />;
};

export const Default = Template.bind({});
