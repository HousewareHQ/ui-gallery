export type MetricProps = {
    title: string;
    value: number;
    valuePrefix?: string;
    change: number;
    changeType?: "up" | "down";
};
export default function Metric({ title, value, change, valuePrefix, changeType }: MetricProps): import("react/jsx-runtime").JSX.Element;
