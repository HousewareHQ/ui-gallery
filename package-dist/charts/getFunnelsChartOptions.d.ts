export default function getFunnelsChartOptions({ chartData, queryConfiguration, themeColors, themeMode, }: {
    chartData: any;
    queryConfiguration: any;
    themeColors: any;
    themeMode: 'light' | 'dark';
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
            interval: number;
            width: number;
            align: string;
            overflow: string;
            color: any;
            hideOverlap: boolean;
            formatter: (value: any) => any;
            fontFamily: string;
            fontSize: number;
        };
        axisLine: {
            lineStyle: {
                color: any;
            };
        };
    };
    yAxis: {
        type: string;
        position: string;
        alignTicks: boolean;
        axisLine: {
            show: boolean;
            lineStyle: {
                color: any;
            };
        };
        axisLabel: {
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
        max: number;
    };
    series: any[];
    legend: {
        data: any[];
        top: number;
        left: number;
        color: any;
        icon: string;
        textStyle: {
            color: any;
            fontSize: number;
            fontWeight: string;
            fontFamily: string;
        };
        inActiveColor: string;
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
        formatter: ({ data }: {
            data: any;
        }) => string;
    };
};
