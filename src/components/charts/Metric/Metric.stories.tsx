import { Meta, StoryObj } from "@storybook/react";
import Metric from "./Metric";

const meta: Meta<typeof Metric> = {
    title: "Charts/Metric",
    component: Metric,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Metric>;

export const Default: Story = {
    args: {
        title: "CPC",
        value: 2.5,
        valuePrefix: "$",
        change: 0.5,
        changeType: "up",
    },
};
