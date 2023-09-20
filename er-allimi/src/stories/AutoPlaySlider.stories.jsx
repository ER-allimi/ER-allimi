import { AutoPlaySlider } from '@components';

const data = [
  { label: 1, text: 1, backgroundColor: 'red' },
  { label: 2, text: 2, backgroundColor: 'yellow' },
  { label: 3, text: 3, backgroundColor: 'green' },
];

const renderSlide = (data) => {
  return (
    <div
      key={data.label}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '300px',
        backgroundColor: data.backgroundColor,
      }}
    >
      {data.text}
    </div>
  );
};

export default {
  title: 'AutoPlaySlider',
  component: AutoPlaySlider,
  args: {
    data,
    renderSlide,
  },
};

const Template = (args) => <AutoPlaySlider {...args} />;

export const Default = Template.bind({});

export const Control = Template.bind({});
Control.args = {
  control: false,
};

export const ControllersPosition = Template.bind({});
ControllersPosition.args = {
  controllersPosition: 'top',
};

export const Pagination = Template.bind({});
Pagination.args = {
  pagination: false,
};

export const DotsPosition = Template.bind({});
DotsPosition.args = {
  dotsPosition: 'top',
};

export const Sliding = Template.bind({});
Sliding.args = {
  sliding: false,
};

export const TransitionTime = Template.bind({});
TransitionTime.args = {
  transitionTime: 1,
};

export const Infinite = Template.bind({});
Infinite.args = {
  infinite: false,
};

export const IntervalTime = Template.bind({});
IntervalTime.args = {
  intervalTime: 3,
};
