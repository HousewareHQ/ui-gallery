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
            "color": [
                "#d87c7c",
                "#919e8b",
                "#d7ab82",
                "#6e7074",
                "#61a0a8",
                "#efa18d",
                "#787464",
                "#cc7e63",
                "#724e58",
                "#4b565b"
            ],
            "textStyle": {},
            "title": {
                text: props.title,
                subtext: props.subtext,
                left: "center",
                "textStyle": {
                    "color": "#333333"
                },
                "subtextStyle": {
                    "color": "#aaaaaa"
                }
            },
            "line": {
                "itemStyle": {
                    "borderWidth": 1
                },
                "lineStyle": {
                    "width": 2
                },
                "symbolSize": 4,
                "symbol": "emptyCircle",
                "smooth": false
            },


            "categoryAxis": {
                "axisLine": {
                    "show": true,
                    "lineStyle": {
                        "color": "#333"
                    }
                },
                "axisTick": {
                    "show": true,
                    "lineStyle": {
                        "color": "#333"
                    }
                },
                "axisLabel": {
                    "show": true,
                    "color": "#333"
                },
                "splitLine": {
                    "show": false,
                    "lineStyle": {
                        "color": [
                            "#ccc"
                        ]
                    }
                },
                "splitArea": {
                    "show": false,
                    "areaStyle": {
                        "color": [
                            "rgba(250,250,250,0.3)",
                            "rgba(200,200,200,0.3)"
                        ]
                    }
                }
            },
            "valueAxis": {
                "axisLine": {
                    "show": true,
                    "lineStyle": {
                        "color": "#333"
                    }
                },
                "axisTick": {
                    "show": true,
                    "lineStyle": {
                        "color": "#333"
                    }
                },
                "axisLabel": {
                    "show": true,
                    "color": "#333"
                },
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "color": [
                            "#ccc"
                        ]
                    }
                },
                "splitArea": {
                    "show": false,
                    "areaStyle": {
                        "color": [
                            "rgba(250,250,250,0.3)",
                            "rgba(200,200,200,0.3)"
                        ]
                    }
                }
            },
            "logAxis": {
                "axisLine": {
                    "show": true,
                    "lineStyle": {
                        "color": "#333"
                    }
                },
                "axisTick": {
                    "show": true,
                    "lineStyle": {
                        "color": "#333"
                    }
                },
                "axisLabel": {
                    "show": true,
                    "color": "#333"
                },
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "color": [
                            "#ccc"
                        ]
                    }
                },
                "splitArea": {
                    "show": false,
                    "areaStyle": {
                        "color": [
                            "rgba(250,250,250,0.3)",
                            "rgba(200,200,200,0.3)"
                        ]
                    }
                }
            },
            "timeAxis": {
                "axisLine": {
                    "show": true,
                    "lineStyle": {
                        "color": "#333"
                    }
                },
                "axisTick": {
                    "show": true,
                    "lineStyle": {
                        "color": "#333"
                    }
                },
                "axisLabel": {
                    "show": true,
                    "color": "#333"
                },
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "color": [
                            "#ccc"
                        ]
                    }
                },
                "splitArea": {
                    "show": false,
                    "areaStyle": {
                        "color": [
                            "rgba(250,250,250,0.3)",
                            "rgba(200,200,200,0.3)"
                        ]
                    }
                }
            },
            "toolbox": {
                "iconStyle": {
                    "borderColor": "#999999"
                },
                "emphasis": {
                    "iconStyle": {
                        "borderColor": "#666666"
                    }
                }
            },
            "legend": {
                orient: "vertical",
                left: "right",
                "textStyle": {
                    "color": "#333333"
                }
            },
            "tooltip": {
                trigger: "item",
                "axisPointer": {
                    "lineStyle": {
                        "color": "#cccccc",
                        "width": 1
                    },
                    "crossStyle": {
                        "color": "#cccccc",
                        "width": 1
                    }
                }
            },
            "markPoint": {
                "label": {
                    "color": "#eee"
                },
                "emphasis": {
                    "label": {
                        "color": "#eee"
                    }
                }
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
