import { useState } from 'react';
import { Popover } from '@components';

export default {
  title: 'Popover',
  component: Popover,
  args: {
    content: 'popover 내용',
  },
};

const Template = (args) => {
  const [showContent, setShowContent] = useState(false);

  const handlePopoverClick = () => setShowContent(!showContent);
  const handleContentRemove = () => setShowContent(false);

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
      <Popover
        {...args}
        showContent={showContent}
        handleContentRemove={handleContentRemove}
        handlePopoverClick={handlePopoverClick}
      >
        <p>여기를 클릭해보세요.</p>
      </Popover>
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
