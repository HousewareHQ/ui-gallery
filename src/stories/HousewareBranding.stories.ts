import { Meta, StoryObj } from "@storybook/react";
import { HousewareBranding } from "../components/common/HousewareBranding";

const meta: Meta<typeof HousewareBranding> = {
  title: "Native App/HousewareBranding",
  component: HousewareBranding,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  args: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;

type Story = StoryObj<typeof HousewareBranding>;

export const Default: Story = {
  args: {},
};
