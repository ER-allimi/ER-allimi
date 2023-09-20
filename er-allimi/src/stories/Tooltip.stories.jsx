import { Tooltip } from '@components';

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    content: 'tooltip 내용',
  },
};

const Template = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '300px',
      }}
    >
      <Tooltip {...args}>
        <p>여기에 마우스를 올려보세요.</p>
      </Tooltip>
    </div>
  );
};

export const Default = Template.bind();

export const Direction = Template.bind();
Direction.args = {
  direction: 'right',
};

export const DistanceAway = Template.bind();
DistanceAway.args = {
  distanceAway: 30,
};

export const Color = Template.bind();
Color.args = {
  color: 'redLight',
};
