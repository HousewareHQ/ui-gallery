import EChartsReact from "echarts-for-react";
import { useMemo } from "react";

export type PiechartProps = {
    title: string;
    subtext?: string;
    series: Array<Array<{ value: number; name: string }>>;
    style: React.CSSProperties;
};

/**
 * A pie chart component that displays data in a pie chart format.
 * 
 */
export default function Piechart(props: PiechartProps) {
    const chartOptions = useMemo(
        () => ({
            title: {
                text: props.title,
                subtext: props.subtext,
                left: "center"
            },
            tooltip: {
                trigger: "item"
            },
            legend: {
                orient: "vertical",
                left: "right"
            },
            series: props.series.map((data, i) => ({
                name: `Series ${i}`,
                type: "pie",
                radius: "60%",
                data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            })),
        }),
        [props.series, props.subtext, props.title]
    );

    return (
        <div style={{ width: '100%', height: '100%', ...(props.style || {}) }}>
            <EChartsReact option={chartOptions} />
        </div>
    );
}
