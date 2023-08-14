import { Input } from '@components';

export default {
  title: 'Input',
  component: Input,
};

const VALUE = '';
const handler = () => {
  return '';
};
const NAME = 'input';
const PLACEHOLDER = '입력하세요.';

export const Color = {
  args: {
    value: VALUE,
    handleInputChange: handler,
    name: NAME,
    placeholder: PLACEHOLDER,
    color: 'red',
  },
};

export const Round = {
  args: {
    value: VALUE,
    handleInputChange: handler,
    name: NAME,
    placeholder: PLACEHOLDER,
    round: 'lg',
  },
};

export const FullWidth = {
  args: {
    value: VALUE,
    handleInputChange: handler,
    name: NAME,
    placeholder: PLACEHOLDER,
    fullWidth: true,
  },
};

export const Disabled = {
  args: {
    value: VALUE,
    handleInputChange: handler,
    name: NAME,
    placeholder: PLACEHOLDER,
    disabled: true,
  },
};
