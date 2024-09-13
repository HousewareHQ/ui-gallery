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
        series: [
            {
                name: "Mon",
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: "Tue",
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: "Wed",
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: "Thu",
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: "Fri",
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ],
        style: { width: "400px", height: "100vh", }
    },
};
