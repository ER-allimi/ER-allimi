import { useState } from 'react';
import { Input, BiCurrentLocation, FiSearch } from '@components';

const NAME = 'input';
const PLACEHOLDER = '입력하세요.';

export default {
  title: 'Input',
  component: Input,
  args: {
    name: NAME,
    placeholder: PLACEHOLDER,
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input {...args} value={value} handleInputChange={handleInputChange} />
  );
};

export const Default = Template.bind({});

export const Color = Template.bind({});
Color.args = {
  color: 'red',
};

export const Round = Template.bind({});
Round.args = {
  round: 'lg',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  leftIcon: <BiCurrentLocation />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  rightIcon: <FiSearch />,
};
