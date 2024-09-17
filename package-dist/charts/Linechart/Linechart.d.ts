export type LinechartProps = {
    xAxisLabels: string[];
    series: {
        name: string;
        data: Array<number>;
    }[];
    style: React.CSSProperties;
};
/**
 * A pie chart component that displays data in a pie chart format.
 *
 */
export default function Linechart(props: LinechartProps): import("react/jsx-runtime").JSX.Element;
