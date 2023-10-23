import { ScrollBar } from '@components';
const dumyContent =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

export default {
  title: 'ScrollBar',
  component: ScrollBar,
  args: {},
};

const Template = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <ScrollBar
        {...args}
        style={{ width: '100%', height: '100px', 'overflow-y': 'auto' }}
      >
        <div style={{ height: '300px' }}>
          {dumyContent}
        </div>
      </ScrollBar>
    </div>
  );
};

export const Default = Template.bind();
export const ScrollBarWidth = Template.bind();
ScrollBarWidth.args = {
  scrollBarWidth: 10,
};
export const ScrollBarBackground = Template.bind();
ScrollBarBackground.args = {
  scrollBarBackground: 'gray',
};
export const ScrollBarColor = Template.bind();
ScrollBarColor.args = {
  scrollBarColor: 'gray',
};
