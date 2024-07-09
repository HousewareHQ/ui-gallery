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

export const TextResponse: Story = {
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

export const TrendsChart: Story = {
  args: {
    messages: [
      {
        content: "Hey",
        type: "user",
      },
      {
        content: {
          query_configuration: {
            breakdown: {},
            events: [
              {
                label: "A: Home Page",
                measure: "uniques",
                name: "Home Page",
              },
            ],
            filters: {},
            time: {
              end_date: "2024-07-09",
              granularity: "day",
              start_date: "2024-07-02",
            },
          },
          query_response: {
            data: [
              {
                dimension: null,
                label: "A: Home Page",
                measure: 2340,
                period: "2024-07-02",
              },
              {
                dimension: null,
                label: "A: Home Page",
                measure: 2430,
                period: "2024-07-03",
              },
              {
                dimension: null,
                label: "A: Home Page",
                measure: 2341,
                period: "2024-07-04",
              },
              {
                dimension: null,
                label: "A: Home Page",
                measure: 2212,
                period: "2024-07-05",
              },
              {
                dimension: null,
                label: "A: Home Page",
                measure: 2403,
                period: "2024-07-06",
              },
              {
                dimension: null,
                label: "A: Home Page",
                measure: 2445,
                period: "2024-07-07",
              },
              {
                dimension: null,
                label: "A: Home Page",
                measure: 2485,
                period: "2024-07-08",
              },
            ],
            summary:
              "The number of unique users who visited the Home Page over the last 7 days shows a consistent trend with slight fluctuations. The highest number of unique visitors was on 2024-07-08 with 2485 users, and the lowest was on 2024-07-05 with 2212 users.",
            type: "trend",
          },
        },
        type: "ai",
      },
    ],
  },
};

export const FunnelsChart: Story = {
  args: {
    messages: [
      {
        type: "user",
        content: "Hey",
      },
      {
        type: "ai",
        content: {
          query_configuration: {
            breakdown: null,
            conversion: {
              criteria: "uniques",
              window_grain: "hour",
              window_interval: 3600,
            },
            end_date: "2024-07-09",
            filters: null,
            start_date: "2024-07-02",
            steps: [
              {
                filtered_event_properties: [],
                filters: {},
                label: "A: Home Page",
                name: "Home Page",
              },
              {
                filtered_event_properties: [],
                filters: {},
                label: "B: Order Page",
                name: "Order Page",
              },
            ],
          },
          query_response: {
            data: [
              {
                conversion_percentage: 0.0,
                dimensions: null,
                dropoff_percentage: 100.0,
                steps: [
                  {
                    event_name: "Home Page",
                    first_step_conversion_percentage: 100.0,
                    prev_step_conversion_percentage: 100.0,
                    value: 8638,
                  },
                  {
                    event_name: "Order Page",
                    first_step_conversion_percentage: 0.0,
                    prev_step_conversion_percentage: 0.0,
                    value: 0,
                  },
                ],
              },
            ],
            summary:
              "The conversion rate from the Home Page to the Order Page last week was 0%. There were 8638 visits to the Home Page, but none of these visits converted to the Order Page.",
            type: "funnel",
          },
        },
      },
    ],
  },
};
