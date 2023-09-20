import { useState } from 'react';
import { Toggle } from '@components';

const data = [
  { label: 'Alarm On', value: 'on' },
  { label: 'Alarm Off', value: 'off' },
];

export default {
  title: 'Toggle',
  component: Toggle,
  args: {
    data,
  },
};

const Template = (args) => {
  const [select, setSelect] = useState(0);

  const handleToggleClick = () => setSelect(1 - select);

  return (
    <Toggle
      {...args}
      select={select}
      handleToggleClick={handleToggleClick}
      style={{ width: 'max-content' }}
    />
  );
};

export const Default = Template.bind();

export const Color = Template.bind();
Color.args = {
  color: 'redLight',
};
