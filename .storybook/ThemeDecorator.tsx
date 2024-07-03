import { Decorator } from "@storybook/react";
import React from "react";
import AppThemeProvider from "../src/components/AppThemeProvider";

export const ThemeDecorator: Decorator = (Story) => (
  <AppThemeProvider>
    <Story />
  </AppThemeProvider>
);
