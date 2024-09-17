import { Meta, StoryObj } from "@storybook/react";
import Linechart from "./Linechart";

const meta: Meta<typeof Linechart> = {
    title: "Charts/Linechart",
    component: Linechart,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Linechart>;

export const Default: Story = {
    args: {
        xAxisLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            {
                name: "Line 1",
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: "Line 2",
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: "Line 3",
                data: [150, 232, 201, 154, 190, 330, 410]
            },
        ],
        style: { width: "400px", height: "100vh", }
    },
};
