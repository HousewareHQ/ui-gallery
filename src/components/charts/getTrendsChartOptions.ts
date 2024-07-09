import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export type TimeGranularity =
  | "hour"
  | "day"
  | "week"
  | "month"
  | "quarter"
  | "year"
  | "all_time";

export function getTrendsChartOptions({
  chartData,
  queryConfiguration,
  themeColors,
  themeMode,
}: {
  chartData: any;
  queryConfiguration: any;
  themeColors: any;
  themeMode: "light" | "dark";
}) {
  const chartTitle = queryConfiguration.events
    .map((event: any) => event.name)
    .join(" , ");
  const chartBreakdown = queryConfiguration?.breakdown;
  const breakdownKey = chartBreakdown?.dimension
    ? {
        name: chartBreakdown.dimension,
        is_event_property: chartBreakdown?.is_event_property,
        type: "dimension",
      }
    : null;
  const eventMeasureMap: any = {};
  queryConfiguration?.events?.forEach((e: any) => {
    eventMeasureMap[e.label] = e.measure || "uniques";
  });
  const unsortedPeriodsMap: any = {};
  chartData.map((row: any) => {
    unsortedPeriodsMap[row.period] = true;
  });
  const periodsMap: any = Object.keys(unsortedPeriodsMap)
    .sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf())
    .reduce((result: any, key: string) => {
      result[key] = unsortedPeriodsMap[key];
      return result;
    }, {});
  const defaultSeriesData = {
    data: {},
    type: "line",
    smooth: true,
    name: "",
  };
  const seriesMap: any = {};
  if (breakdownKey?.name === undefined) {
    chartData.forEach((row: any) => {
      const [label] =
        typeof row?.label === "string" ? row.label.split(":") : [];
      const measure = Number(row.measure);
      const roundedValue = Number.isInteger(measure)
        ? measure
        : measure.toFixed(2);
      const period = row.period;
      if (seriesMap[label]) {
        const unit = "";
        seriesMap[label].data[period] = {
          value: roundedValue,
          unit,
        };
      } else {
        const seriesName = `${label} (${row.label})`;
        const unit = "";
        // const color =
        //   chartColors[Object.keys(seriesMap).length] ?? chartColors[0];
        seriesMap[label] = {
          ...defaultSeriesData,
          lineStyle: {
            type: "solid",
          },
          name: seriesName,
          data: {},
          yAxisIndex: 0,
          unit,
        };
        seriesMap[label].data[period] = {
          value: roundedValue,
          unit,
        };
      }
    });
  } else {
    chartData.forEach((row: any) => {
      const label = row.label;
      const measure = Number(row.measure);
      const roundedValue = Number.isInteger(measure)
        ? measure
        : measure.toFixed(2);
      const breakDownValue = row[breakdownKey?.name];
      const dimValueKey = `${label} / ${breakDownValue}`;
      const period = row.period;
      if (seriesMap[dimValueKey]) {
        let unit = "";
        seriesMap[dimValueKey].data[period] = {
          value: roundedValue,
          unit,
          breakdown: {
            ...breakdownKey,
            value: breakDownValue,
          },
        };
      } else {
        let unit = "";
        const seriesName = `${dimValueKey} (${eventMeasureMap[label]})`;
        seriesMap[dimValueKey] = {
          ...defaultSeriesData,
          lineStyle: {
            type: "solid",
          },
          name: seriesName,
          data: {},
          yAxisIndex: 0,
        };
        seriesMap[dimValueKey].data[period] = {
          value: roundedValue,
          unit,
          breakdown: {
            ...breakdownKey,
            value: breakdownKey.type === "cohort" ? row.cohort : breakDownValue,
          },
        };
      }
    });
  }
  // Check through all periods from the data and see if any series doesn't have data for that period, if not add a defualt data point
  for (const seriesKey in seriesMap) {
    const seriesKeyData = seriesMap[seriesKey];
    const completePeriodsData = Object.keys(periodsMap)?.map(
      (possiblePeriod) => {
        return (
          seriesKeyData.data[possiblePeriod] || {
            value: 0,
            unit: "",
            ...(seriesKeyData.originalSeriesName && {
              seriesLabel: seriesKeyData.originalSeriesName,
            }),
          }
        );
      }
    );
    seriesMap[seriesKey].data = completePeriodsData;
  }
  const seriesData: any[] = Object.values(seriesMap);
  const xAxisPeriods = Object.keys(periodsMap);
  const lineChartOptions = {
    grid: {
      left: 50,
      top: 95,
      right: 30,
      bottom: 30,
    },
    title: {
      show: true,
      text: `Trends: ${chartTitle}`,
      left: 20,
      textStyle: {
        fontFamily: "HousewareFont",
        fontSize: 15,
        fontWeight: "bold",
        color: themeColors["--primary-text"],
      },
    },
    xAxis: {
      type: "category",
      data: xAxisPeriods,
      axisLabel: {
        width: 200,
        align: "center",
        overflow: "break",
        hideOverlap: true,
        fontFamily: "ChartsFont",
        fontSize: 10,
        cursor: "pointer",
        color: themeColors["--secondary-text"],
        formatter: (value: string) => {
          const formattedDate = getFormattedDate(
            value,
            queryConfiguration?.time?.granularity,
            false
          );
          return formattedDate;
        },
      },
      axisLine: {
        lineStyle: {
          color: themeColors["--border"],
        },
      },
    },
    yAxis: [
      {
        name: "",
        type: "value",
        position: "left",
        alignTicks: true,
        nameTextStyle: {
          fontWeight: "bolder",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: themeColors["--border"],
          },
        },
        axisLabel: {
          hideOverlap: true,
          color: themeColors["--secondary-text"],
          fontFamily: "ChartsFont",
          fontSize: 10,
        },
        splitLine: {
          lineStyle: {
            color: themeColors["--border"],
            width: 0.4,
          },
        },
      },
    ],
    legend: {
      data: seriesData.map((series) => series.name),
      top: 40,
      left: 20,
      color: themeColors["--primary-text"],
      icon: "circle",
      textStyle: {
        color: themeColors["--secondary-text"],
        fontFamily: "HousewareFont",
        fontSize: 12,
        fontWeight: "normal",
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {
          title: "Download chart",
          name: `Trends Chart - ${chartTitle}`,
          show: true,
          icon: `image://chart-download-${themeMode}-mode.png`,
        },
      },
    },
    series: [...seriesData],
    tooltip: {
      trigger: "axis",
      confine: true,
      order: "valueDesc",
      backgroundColor: themeColors["--foreground"],
      borderColor: themeColors["--border"],
      textStyle: {
        color: themeColors["--secondary-text"],
        fontFamily: "HousewareFont",
      },
      formatter: (params: any) => {
        let tooltipHTML = `<div>`;
        tooltipHTML += `<div><strong>${getFormattedDateTooltip(
          params[0].name,
          queryConfiguration?.time?.granularity
        )}</strong></div><br />`;
        const uniqueParams = params.filter(
          (p: any, index: any, self: any) =>
            index ===
            self.findIndex(
              (t: any) =>
                t.seriesName === p.seriesName &&
                t.value === p.value &&
                t.data?.period === p.data?.period
            )
        );
        tooltipHTML += uniqueParams
          .map(
            (s: any) =>
              `<div style="display:flex; align-items:center"><div style="height:1rem; width:1rem; border-radius:.5rem; background:${
                s.color
              }"></div> &nbsp;${
                s.data?.prevPeriod
                  ? `(${getFormattedDate(
                      s.data.prevPeriod,
                      queryConfiguration?.time?.granularity === "hour"
                        ? "day"
                        : queryConfiguration?.time?.granularity,
                      false
                    )}):  ${s.data.seriesLabel}`
                  : s.seriesName
              }:  &nbsp; &nbsp; &nbsp;<strong>${Number(s.value)}${
                s.data.unit ? s.data.unit : ""
              }</strong></div>`
          )
          .join("");
        tooltipHTML += `</div>`;
        return tooltipHTML;
      },
    },
    axisPointer: {
      type: "line",
    },
  };
  return lineChartOptions;
}
export const periodFormatByTimegrainLabel: Record<TimeGranularity, string> = {
  hour: "h:mm A, Do MMM",
  day: "Do MMM",
  week: "Do MMM YYYY",
  month: "MMM YYYY",
  quarter: "[Q]Q-Y",
  year: "YYYY",
  all_time: "",
};
export function getFormattedDate(
  value: string,
  timeGranularity: TimeGranularity,
  lineBreak: boolean = true
) {
  if (timeGranularity === "week") {
    return `${dayjs(value).format(
      periodFormatByTimegrainLabel[timeGranularity]
    )} - ${dayjs(value)
      .add(6, "day")
      .format(periodFormatByTimegrainLabel[timeGranularity])}`;
  }
  if (!lineBreak) {
    return dayjs(value).format(periodFormatByTimegrainLabel[timeGranularity]);
  }
  return dayjs(value)
    .format(periodFormatByTimegrainLabel[timeGranularity])
    .replace(/ /g, "\n");
}
export function getFormattedDateTooltip(
  value: string,
  timeGranularity: TimeGranularity
) {
  if (timeGranularity === "week") {
    return `${dayjs(value).format(`[Week] WW, Do MMM YYYY`)} - ${dayjs(value)
      .add(6, "day")
      .format(`Do MMM YYYY`)}`;
  }
  if (timeGranularity === "day") {
    return dayjs(value).format("Do MMM YYYY");
  }
  return dayjs(value).format(periodFormatByTimegrainLabel[timeGranularity]);
}

export const getFunnelsChartOptions = () => {
  return {};
};
