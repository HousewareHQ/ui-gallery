import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChatScreenPA } from "../components/ChatScreenPA";

const ActionsData = {
  handleSendFollowupMessage: fn(),
  setMessages: fn(),
};

const meta: Meta<typeof ChatScreenPA> = {
  title: "Native App/ChatScreenPA",
  component: ChatScreenPA,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  args: {
    ...ActionsData,
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;

type Story = StoryObj<typeof ChatScreenPA>;

export const Default: Story = {
  args: {
    messages: [
      {
        content: "Hey",
        type: "user",
      },
      {
        content: "Hey",
        type: "ai",
      },
    ],
  },
};
