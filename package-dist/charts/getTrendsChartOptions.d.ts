export type TimeGranularity = "hour" | "day" | "week" | "month" | "quarter" | "year" | "all_time";
export declare function getTrendsChartOptions({ chartData, queryConfiguration, themeColors, themeMode, }: {
    chartData: any;
    queryConfiguration: any;
    themeColors: any;
    themeMode: "light" | "dark";
}): {
    grid: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    title: {
        show: boolean;
        text: string;
        left: number;
        textStyle: {
            fontFamily: string;
            fontSize: number;
            fontWeight: string;
            color: any;
        };
    };
    xAxis: {
        type: string;
        data: string[];
        axisLabel: {
            width: number;
            align: string;
            overflow: string;
            hideOverlap: boolean;
            fontFamily: string;
            fontSize: number;
            cursor: string;
            color: any;
            formatter: (value: string) => string;
        };
        axisLine: {
            lineStyle: {
                color: any;
            };
        };
    };
    yAxis: {
        name: string;
        type: string;
        position: string;
        alignTicks: boolean;
        nameTextStyle: {
            fontWeight: string;
        };
        axisLine: {
            show: boolean;
            lineStyle: {
                color: any;
            };
        };
        axisLabel: {
            hideOverlap: boolean;
            color: any;
            fontFamily: string;
            fontSize: number;
        };
        splitLine: {
            lineStyle: {
                color: any;
                width: number;
            };
        };
    }[];
    legend: {
        data: any[];
        top: number;
        left: number;
        color: any;
        icon: string;
        textStyle: {
            color: any;
            fontFamily: string;
            fontSize: number;
            fontWeight: string;
        };
    };
    toolbox: {
        feature: {
            saveAsImage: {
                title: string;
                name: string;
                show: boolean;
                icon: string;
            };
        };
    };
    series: any[];
    tooltip: {
        trigger: string;
        confine: boolean;
        order: string;
        backgroundColor: any;
        borderColor: any;
        textStyle: {
            color: any;
            fontFamily: string;
        };
        formatter: (params: any) => string;
    };
    axisPointer: {
        type: string;
    };
};
export declare const periodFormatByTimegrainLabel: Record<TimeGranularity, string>;
export declare function getFormattedDate(value: string, timeGranularity: TimeGranularity, lineBreak?: boolean): string;
export declare function getFormattedDateTooltip(value: string, timeGranularity: TimeGranularity): string;
export declare const getFunnelsChartOptions: () => {};
