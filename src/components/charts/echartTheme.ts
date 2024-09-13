import { EChartsOption } from "echarts-for-react";

const echartTheme: EChartsOption = {
  color: [
    "#d87c7c",
    "#919e8b",
    "#d7ab82",
    "#6e7074",
    "#61a0a8",
    "#efa18d",
    "#787464",
    "#cc7e63",
    "#724e58",
    "#4b565b",
  ],
  textStyle: {},
  title: {
    left: "center",
    textStyle: {
      color: "#333333",
    },
    subtextStyle: {
      color: "#aaaaaa",
    },
  },
  line: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: 4,
    symbol: "emptyCircle",
    smooth: false,
  },

  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#333",
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#ccc"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#333",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#ccc"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#333",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#ccc"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#333",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#ccc"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
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
    orient: "horizontal",
    textStyle: {
      color: "#333333",
    },
    type: "scroll",
  },
  tooltip: {
    trigger: "item",
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
  markPoint: {
    label: {
      color: "#eee",
    },
    emphasis: {
      label: {
        color: "#eee",
      },
    },
  },
};

export default echartTheme;
