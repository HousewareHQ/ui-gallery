import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChatInput } from "../components/ChatInput";

const ActionsData = {
  handleSendMessage: fn(),
  setUserQuery: fn(),
};

const meta: Meta<typeof ChatInput> = {
  title: "Native App/ChatInput",
  component: ChatInput,
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

type Story = StoryObj<typeof ChatInput>;

export const Default: Story = {
  args: {
    userQuery: "Somethign",
    placeholder: "Ask me anything about your product data",
  },

  // render: function Render(args) {
  //     const [{ userQuery }, updateArgs] = useArgs();

  //     function sendMessage() {

  //     }
  //     function updateQuery(e) {
  //         updateArgs({ userQuery: e.target.value });
  //     }

  //     return <ChatInput />
  // }
};
