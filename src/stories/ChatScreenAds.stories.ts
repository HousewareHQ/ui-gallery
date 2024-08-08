import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChatScreenAdsPreview } from "../components/chatScreen/ChatScreenAdsPreview";

const ActionsData = {
  handleGoBack: fn(),
  handleStartFresh: fn(),
  handleChangeHeadings: fn(),
  handleChangeDescriptions: fn(),
  handleCreateCampaign: fn(),
  handleUpdateAdGroups: fn(),
  handleUpdateCampaignName: fn(),
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
      date_range: "2021-01-01 to 2021-12-31",
      average_cpc: "32.89",
      click_through_rate: "0.06456159055233002",
      clicks: "611.7352294921875",
      cost: "2",
      impressions: "2324",
      country: "United States",
      language: "English",
      daily_budget: "211",
      disclaimer: "This is a forecast and not a guarantee.",
    },
    adGroups: [
      {
        headlines: [
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
        keywords: [
          "sustainable products",
          "eco-friendly products",
          "sustainable products",
          "Step Into Sustainable Shoes",
          "Eco-Friendly Shoes: New Standard",
          "Recyclable Shoes, Less Waste",
          "Vegan Shoes: Cruelty-Free Steps",
          "Stylish Sustainable Shoes",
          "Tread Lightly: Eco Shoes",
          "Recyclable Shoes: Circular Style",
          "Vegan Shoes for the Conscious",
          "Guide to Sustainable Shoes",
        ],
        negative_keywords: [],
        adStrength: 20,
        url: "https://www.google.com Something",
        sub_urls: ["www.google.com", "www.google.com"],
        name: "Something",
      },
      {
        headlines: [
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
        keywords: [
          "sustainable products",
          "eco-friendly products",
          "sustainable products",
          "Step Into Sustainable Shoes",
          "Eco-Friendly Shoes: New Standard",
          "Recyclable Shoes, Less Waste",
          "Vegan Shoes: Cruelty-Free Steps",
          "Stylish Sustainable Shoes",
          "Tread Lightly: Eco Shoes",
          "Recyclable Shoes: Circular Style",
          "Vegan Shoes for the Conscious",
          "Guide to Sustainable Shoes",
        ],
        negative_keywords: [],
        adStrength: 20,
        url: "https://www.google.com Something",
        sub_urls: ["www.google.com", "www.google.com"],
        name: "Something",
      },
    ],

    isForecastLoading: false,
    areHeadingsDescriptionsLoading: [false],
  },
};

export const ForecastLoading: Story = {
  args: {
    ...Default.args,
    isForecastLoading: true,
    forecast: {},
  },
};

export const HeadingsDescriptionsLoading: Story = {
  args: {
    ...Default.args,
    areHeadingsDescriptionsLoading: [true],
  },
};

export const AdGroupsLoading: Story = {
  args: {
    ...Default.args,
    areAdGroupsLoading: true,
  },
};

export const DisabledNextSteps: Story = {
  args: {
    ...Default.args,
    isReviewCampaignDisabled: true,
  },
};
