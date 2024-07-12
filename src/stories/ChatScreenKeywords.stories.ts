import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChatScreenKeywords } from "../components/chatScreen/ChatScreenKeywords";

const ActionsData = {
  handleStartFresh: fn(),
  handleProceed: fn(),
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
    productCampaign: "Sustainable Shoes",
    keywordsData: [
      {
        keyword: "sustainable shoes",
        monthlySearchVolume: "1000",
        avgMonthlySearches: "12000",
        cpc: "$1.00",
        competition: "Low",
        lowBid: "$0.50",
        highBid: "$1.50",
        key: "1",
      },
      {
        keyword: "eco-friendly footwear",
        monthlySearchVolume: "1500",
        avgMonthlySearches: "18000",
        cpc: "$1.20",
        competition: "Medium",
        lowBid: "$0.70",
        highBid: "$2.00",
        key: "2",
      },
      {
        keyword: "recycled material shoes",
        monthlySearchVolume: "800",
        avgMonthlySearches: "10000",
        cpc: "$0.90",
        competition: "Low",
        lowBid: "$0.40",
        highBid: "$1.30",
        key: "3",
      },
      {
        keyword: "vegan shoes",
        monthlySearchVolume: "2000",
        avgMonthlySearches: "25000",
        cpc: "$1.50",
        competition: "High",
        lowBid: "$1.00",
        highBid: "$2.50",
        key: "4",
      },
      {
        keyword: "organic shoes",
        monthlySearchVolume: "1200",
        avgMonthlySearches: "14000",
        cpc: "$1.10",
        competition: "Medium",
        lowBid: "$0.60",
        highBid: "$1.80",
        key: "5",
      },
      {
        keyword: "carbon neutral shoes",
        monthlySearchVolume: "900",
        avgMonthlySearches: "11000",
        cpc: "$1.00",
        competition: "Low",
        lowBid: "$0.50",
        highBid: "$1.50",
        key: "6",
      },
    ],
  },
};
