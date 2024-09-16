import { EChartsOption } from "echarts-for-react";

const echartTheme: EChartsOption = {
  color: ["#4ea397", "#22c3aa", "#7bd9a5", "#d0648a", "#f58db2", "#f2b3c9"],
  backgroundColor: "rgba(255,255,255,0)",
  textStyle: {},
  title: {
    left: "center",
    padding: 12,
    top: "bottom",
    textStyle: {
      color: "#666666",
    },
    subtextStyle: {
      color: "#999999",
    },
  },
  line: {
    itemStyle: {
      borderWidth: "2",
    },
    lineStyle: {
      width: "3",
    },
    symbolSize: "8",
    symbol: "emptyCircle",
    smooth: false,
  },
  bar: {
    itemStyle: {
      barBorderWidth: 0,
      barBorderColor: "#ccc",
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  sankey: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  funnel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#999999",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#999999",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#999999",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#999999",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  toolbox: {
    iconStyle: {
      borderColor: "#999999",
    },
    emphasis: {
      iconStyle: {
        borderColor: "#666666",
      },
    },
  },
  legend: {
    textStyle: {
      color: "#999999",
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: "#cccccc",
        width: 1,
      },
      crossStyle: {
        color: "#cccccc",
        width: 1,
      },
    },
  },
  // timeline: {
  //   lineStyle: {
  //     color: "#4ea397",
  //     width: 1,
  //   },
  //   itemStyle: {
  //     color: "#4ea397",
  //     borderWidth: 1,
  //   },
  //   controlStyle: {
  //     color: "#4ea397",
  //     borderColor: "#4ea397",
  //     borderWidth: 0.5,
  //   },
  //   checkpointStyle: {
  //     color: "#4ea397",
  //     borderColor: "#3cebd2",
  //   },
  //   label: {
  //     color: "#4ea397",
  //   },
  //   emphasis: {
  //     itemStyle: {
  //       color: "#4ea397",
  //     },
  //     controlStyle: {
  //       color: "#4ea397",
  //       borderColor: "#4ea397",
  //       borderWidth: 0.5,
  //     },
  //     label: {
  //       color: "#4ea397",
  //     },
  //   },
  // },
  // visualMap: {
  //   color: ["#d0648a", "#22c3aa", "#adfff1"],
  // },
  dataZoom: {
    backgroundColor: "rgba(255,255,255,0)",
    dataBackgroundColor: "rgba(222,222,222,1)",
    fillerColor: "rgba(114,230,212,0.25)",
    handleColor: "#cccccc",
    handleSize: "100%",
    textStyle: {
      color: "#999999",
    },
  },
  markPoint: {
    label: {
      color: "#ffffff",
    },
    emphasis: {
      label: {
        color: "#ffffff",
      },
    },
  },
};

export default echartTheme;
