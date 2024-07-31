export type PiechartProps = {
    title: string;
    subtext?: string;
    series: Array<Array<{
        value: number;
        name: string;
    }>>;
    style: React.CSSProperties;
};
/**
 * A pie chart component that displays data in a pie chart format.
 *
 */
export default function Piechart(props: PiechartProps): import("react/jsx-runtime").JSX.Element;
