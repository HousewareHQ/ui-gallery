import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChatScreenKeywords } from "../components/chatScreen/ChatScreenKeywords";

const ActionsData = {
  handleStartFresh: fn(),
  handleProceed: fn(),
  handleSuggestChanges: fn(),
  handleUpdateCampaignName: fn(),
  handleChangeCountry: fn(),
  handleChangeLanguage: fn(),
  handleRefreshTable: fn(),
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

    productCampaign: {
      description:
        "Sustainable Shoes Sustainable Shoes Sustainable Shoes Sustainable Shoes Sustainable Shoes Sustainable Shoes Sustainable Shoes ",
      countrySelected: "united arab emirates",
      languageSelected: "oman",
      countries: [
        { value: "saint kitts and nevis", label: "Saint Kitts and Nevis" },
        { value: "saint lucia", label: "Saint Lucia" },
        { value: "saint martin", label: "Saint Martin" },
        {
          value: "saint pierre and miquelon",
          label: "Saint Pierre and Miquelon",
        },
        {
          value: "united arab emirates",
          label: "United arab emirates",
        },
      ],
      languages: [
        { value: "mozambique", label: "Mozambique" },
        { value: "oman", label: "Oman" },
        { value: "namibia", label: "Namibia" },
        { value: "nauru", label: "Nauru" },
        { value: "nepal", label: "Nepal" },
      ],
    },
    keywordsData: [
      {
        average_monthly_searches: 135000,
        competition: "High",
        key: "1",
        cpc: 342.53,
        high_cpc: 331.67,
        keyword: "big red boot",
        low_cpc: 10.87,
      },
      {
        average_monthly_searches: 110000,
        competition: "Medium",
        key: "2",
        cpc: 202.29,
        high_cpc: 162.16,
        keyword: "black boots",
        low_cpc: 40.12,
      },
      {
        average_monthly_searches: 74000,
        competition: "Low",
        key: "3",
        cpc: 144.61,
        high_cpc: 123.71,
        keyword: "western clothes near me",
        low_cpc: 20.9,
      },
      {
        average_monthly_searches: 74000,
        competition: "High",
        key: "4",
        cpc: 144.61,
        high_cpc: 123.71,
        keyword: "cowboy clothes near me",
        low_cpc: 20.9,
      },
      {
        average_monthly_searches: 74000,
        competition: "Low",
        key: "5",
        cpc: 144.61,
        high_cpc: 123.71,
        keyword: "western clothes store near me",
        low_cpc: 20.9,
      },
      {
        average_monthly_searches: 60500,
        competition: "Low",
        key: "6",
        cpc: 213.99,
        high_cpc: 183.06,
        keyword: "booties",
        low_cpc: 30.93,
      },
      {
        average_monthly_searches: 49500,
        competition: "Low",
        key: "7",
        cpc: 159.66,
        high_cpc: 132.07,
        keyword: "ankle boots",
        low_cpc: 27.58,
      },
      {
        average_monthly_searches: 49500,
        competition: "Low",
        key: "8",
        cpc: 189.65,
        high_cpc: 157.05,
        keyword: "black boots women",
        low_cpc: 32.6,
      },
      {
        average_monthly_searches: 49500,
        competition: "Low",
        key: "9",
        cpc: 159.66,
        high_cpc: 132.07,
        keyword: "boot for ankle",
        low_cpc: 27.58,
      },
      {
        average_monthly_searches: 33100,
        competition: "Low",
        key: "10",
        cpc: 201.8,
        high_cpc: 175.89,
        keyword: "men's winter boots",
        low_cpc: 25.91,
      },
      {
        average_monthly_searches: 33100,
        competition: "Low",
        key: "11",
        cpc: 171.36,
        high_cpc: 143.77,
        keyword: "chelsea boots women",
        low_cpc: 27.58,
      },
      {
        average_monthly_searches: 33100,
        competition: "Low",
        key: "12",
        cpc: 176.37,
        high_cpc: 150.46,
        keyword: "mens snow boots",
        low_cpc: 25.91,
      },
      {
        average_monthly_searches: 33100,
        competition: "Low",
        key: "13",
        cpc: 148.79,
        high_cpc: 121.21,
        keyword: "booties for women",
        low_cpc: 27.58,
      },
      {
        average_monthly_searches: 33100,
        competition: "Low",
        key: "14",
        cpc: 201.8,
        high_cpc: 175.89,
        keyword: "mens winter snow boots",
        low_cpc: 25.91,
      },
      {
        average_monthly_searches: 33100,
        competition: "Low",
        key: "15",
        cpc: 176.37,
        high_cpc: 150.46,
        keyword: "mens snowmobile boots",
        low_cpc: 25.91,
      },
    ],
    currencySymbol: "b",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    areKeywordsLoading: true,
    keywordsData: [],
  },
};

export const OutdatedTable: Story = {
  args: {
    ...Default.args,
    refreshTableText:
      "This table is outdated. Please refresh to get the latest data.",
  },
};
