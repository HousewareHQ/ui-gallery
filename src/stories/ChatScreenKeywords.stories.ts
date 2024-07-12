import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChatScreenKeywords } from "../components/chatScreen/ChatScreenKeywords";

const ActionsData = {
  handleStartFresh: fn(),
};

const meta: Meta<typeof ChatScreenKeywords> = {
  title: "Native App/ChatScreen/ChatScreenKeywords",
  component: ChatScreenKeywords,
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

type Story = StoryObj<typeof ChatScreenKeywords>;

export const Default: Story = {
  args: {
    pageHeading: "Campagin on Sustainable Products",
    keywordsData: [
      {
        keyword: "keyword1",
        monthlySearchVolume: "1000",
        avgMonthlySearches: "12000",
        cpc: "$1.00",
        competition: "Low",
        lowBid: "$0.50",
        highBid: "$1.50",
      },
    ],
  },
};
