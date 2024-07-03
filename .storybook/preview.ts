import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "./ThemeDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [ThemeDecorator];

export default preview;
