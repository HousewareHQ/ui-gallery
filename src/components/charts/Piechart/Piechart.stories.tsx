import { Meta, StoryObj } from "@storybook/react";
import Piechart from "./Piechart";

const meta: Meta<typeof Piechart> = {
  title: "Charts/Piechart",
  component: Piechart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Piechart>;

export const Default: Story = {
  args: {
    title: "Piechart",
    subtext: "Piechart subtext",
    series: [
      [
        { value: 1608, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    ],
    style: { width: "400px", height: "100vh" }
  },
};
