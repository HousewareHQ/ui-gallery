import type { Meta, StoryObj } from "@storybook/react";

import { TextInput, TextInputProps } from "./TextInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<TextInputProps> = {
  title: "Example/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type here",
    value: "Something",
  },
};
