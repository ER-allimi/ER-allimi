import { useState } from 'react';
import { Slider, BiLeftArrow, BiRightArrow } from '@components';

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
  title: 'Slider',
  component: Slider,
  args: {
    data,
    renderSlide,
  },
};

const Template = (args) => {
  const infinite = args.infinite;
  const [currentSlide, setCurrentSlide] = useState(infinite ? 1 : 0);
  return (
    <Slider
      {...args}
      currentSlide={currentSlide}
      setCurrentSlide={setCurrentSlide}
    />
  );
};

export const Default = Template.bind({});

export const Control = Template.bind({});
Control.args = {
  control: false,
};

export const ControlIcon = Template.bind({});
ControlIcon.args = {
  leftController: <BiLeftArrow />,
  rightController: <BiRightArrow />,
};

export const ControllersPosition = Template.bind({});
ControllersPosition.args = {
  controllersPosition: 'top',
};

export const PaginationDot = Template.bind({});
PaginationDot.args = {
  paginationDot: true,
};

export const DotShape = Template.bind({});
DotShape.args = {
  paginationDot: true,
  activeDot: (
    <span
      style={{
        display: 'inline-block',
        width: '30px',
        height: '8px',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
      }}
    ></span>
  ),
  inactiveDot: (
    <span
      style={{
        display: 'inline-block',
        width: '8px',
        height: '8px',
        backgroundColor: '#ffffff9d',
        borderRadius: '50%',
      }}
    ></span>
  ),
};

export const PaginationFraction = Template.bind({});
PaginationFraction.args = {
  paginationFraction: true,
};

export const PaginationPosition = Template.bind({});
PaginationPosition.args = {
  paginationDot: true,
  paginationPosition: 'top',
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
  infinite: true,
};
