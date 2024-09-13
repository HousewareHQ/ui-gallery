import EChartsReact from "echarts-for-react";
import { useMemo } from "react";
import echartTheme from "../echartTheme";

export type PiechartProps = {
    series: { name: string, data: Array<number> }[];
    style: React.CSSProperties;
};

/**
 * A pie chart component that displays data in a pie chart format.
 * 
 */
export default function Linechart(props: PiechartProps) {
    const chartOptions = useMemo(
        () => ({
            ...echartTheme,
            xAxis: {
                data: props.series.map(series => series.name),
            },
            yAxis: {
                type: 'value'
            },
            series: props.series.map((series, i) => ({
                name: `Series ${i}`,
                type: "line",
                data: series.data,
                smooth: true,
            })),
        }),
        [props.series]
    );


    return (
        <div style={{ width: '100%', height: '100%', ...(props.style || {}) }}>
            <EChartsReact option={chartOptions} />
        </div>
    );
}
