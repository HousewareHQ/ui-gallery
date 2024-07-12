import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { WelcomeScreen } from "../components/welcomeScreen/WelcomeScreenConversations";

const ActionsData = {
  handleSendMessage: fn(),
};

const meta: Meta<typeof WelcomeScreen> = {
  title: "Native App/WelcomeScreen/Conversations",
  component: WelcomeScreen,
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

type Story = StoryObj<typeof WelcomeScreen>;

export const Default: Story = {
  args: {
    heading: "Welcome to Houseware",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    suggestions: [
      {
        title: "FIrst Suggested Question",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Second Suggested Question",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      // {
      //   title: "Third Suggested Question",
      //   content:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      // },
      // {
      //   title: "Fourth Suggested Question",
      //   content:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      // },
    ],
  },
};
