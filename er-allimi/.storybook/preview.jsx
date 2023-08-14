/** @type { import('@storybook/react').Preview } */
import { ThemeProvider, Global } from '@emotion/react';
import { globalStyles, theme } from '@styles';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
