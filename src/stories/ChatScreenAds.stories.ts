import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChatScreenAdsPreview } from "../components/chatScreen/ChatScreenAdsPreview";

const ActionsData = {
  handleSendFollowupMessage: fn(),
  setMessages: fn(),
};

const meta: Meta<typeof ChatScreenAdsPreview> = {
  title: "Native App/ChatScreen/ChatScreenAdsPreview",
  component: ChatScreenAdsPreview,
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

type Story = StoryObj<typeof ChatScreenAdsPreview>;

export const Default: Story = {
  args: {
    messages: [
      {
        content: "Hey",
        type: "human",
      },
      {
        content: {
          query_configuration: null,
          query_response: {
            data: "Hello! How can I assist you with your product usage data today? I can help you analyze trends and funnels related to your product events. Do you have any specific events or sequences of events in mind?",
            summary: "",
            type: "efwoei",
          },
        },
        type: "ai",
      },
    ],
    pageHeading: "Campagin on Sustainable Products",
    forecast: {
      dateRange: "2021-01-01 to 2021-12-31",
      ctr: "5.9%",
      avgCPC: "$0.50",
      clicks: "1k",
      impressions: "17k",
      dailyBudget: "$50",
      location: "United States",
      language: "English",
      cost: "$500",
    },
    keywords: [
      "sustainable products",
      "eco-friendly products",
      "sustainable products",
    ],
  },
};
