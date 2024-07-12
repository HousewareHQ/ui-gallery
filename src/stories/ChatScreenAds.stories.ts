import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChatScreenAdsPreview } from "../components/chatScreen/ChatScreenAdsPreview";

const ActionsData = {
  handleGoBack: fn(),
  handleStartFresh: fn(),
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
    headings: [
      "Step Into Sustainable Shoes",
      "Eco-Friendly Shoes: New Standard",
      "Recyclable Shoes, Less Waste",
      "Vegan Shoes: Cruelty-Free Steps",
      "Stylish Sustainable Shoes",
      "Tread Lightly: Eco Shoes",
      "Recyclable Shoes: Circular Style",
      "Vegan Shoes for the Conscious",
      "Guide to Sustainable Shoes",
      "Eco Shoes: Innovative Steps",
      "Fashionable Recyclable Shoes",
      "Ethical Vegan Shoes Lead",
      "Comfort in Sustainable Shoes",
      "Sustainable Fashion: Eco Shoes",
      "Zero Waste: Recyclable Shoes",
    ],
    descriptions: [
      "Discover sustainable shoes that blend style, comfort, and eco-conscious materials.",
      "Eco-friendly shoes designed to reduce your carbon footprint without compromising on style.",
      "Step into recyclable shoes that promote a circular economy and fashion with a purpose.",
      "Vegan shoes offering cruelty-free, ethical choices for the modern, conscious consumer.",
    ],
    finalURL: "https://www.google.com",
    displayLink: ["www.google.com", "www.google.com"],
  },
};
