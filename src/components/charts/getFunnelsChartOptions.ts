import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

function getSeriesKey(funnelData: any, funnelsConfiguration: any) {
  const conversionCriteriaLabel = `Overall Conversion (${
    funnelsConfiguration?.conversion?.criteria || 'Uniques'
  })`;

  let seriesNameToGroupBy = `${
    funnelData?.cohort
      ? funnelData?.cohort_value
        ? `${funnelData.cohort}`
        : `Not in ${funnelData.cohort}`
      : funnelData?.value === '$all'
        ? conversionCriteriaLabel
        : funnelData.value
  }`;

  const cohortPefix = funnelData?.cohort
    ? funnelData.cohort_value
      ? `${funnelData.cohort}`
      : `Not in ${funnelData.cohort}`
    : '';

  const dimensions = [...(funnelData?.dimensions ?? [])];

  const dimensionPrefix = !!dimensions?.length
    ? dimensions.map((d) => `${d.name} is ${d.value}`).join(' & ')
    : '';

  if (cohortPefix || dimensionPrefix) {
    seriesNameToGroupBy = `${cohortPefix}${
      cohortPefix && dimensionPrefix ? ', ' : ''
    }${dimensionPrefix}`;
  }

  return { conversionCriteriaLabel, seriesNameToGroupBy };
}

const getEventAndLabelName = ({
  eventName,
  eventIndex,
  columnFields,
  funnelsConfiguration,
}: {
  eventName: string;
  eventIndex: number;
  columnFields?: any;
  funnelsConfiguration: any;
}) => {
  const stringToSplitEventLabel = '////';
  const events = funnelsConfiguration?.steps || [];

  if (columnFields) {
    const usedIndices = new Set();
    const resultMap: Record<number, any> = {};

    columnFields.forEach((name: string, index: number) => {
      const eventMatchIndex = events.findIndex(
        (event: any, idx: any) => !usedIndices.has(idx) && event.name === name,
      );

      if (eventMatchIndex !== -1) {
        resultMap[index] = events[eventMatchIndex].label;
        usedIndices.add(eventMatchIndex);
      }
    });
    return resultMap[eventIndex]?.split(stringToSplitEventLabel)[0];
  }

  const isEventNamePresentAtIndex = events[eventIndex]?.name === eventName;
  if (!isEventNamePresentAtIndex) return eventName;

  return (
    events[eventIndex]?.label?.split(stringToSplitEventLabel)[0] || eventName
  );
};

export default function getFunnelsChartOptions({
  chartData,
  queryConfiguration,
  themeColors,
  themeMode,
}: {
  chartData: any;
  queryConfiguration: any;
  themeColors: any;
  themeMode: 'light' | 'dark';
}) {
  const chartTitle = queryConfiguration.steps
    .map((step: any) => step.name)
    .join(' -> ');
  const funnelSeries: any[] = chartData.reduce((acc: any, funnelData: any) => {
    let { seriesNameToGroupBy: name, conversionCriteriaLabel } = getSeriesKey(
      funnelData,
      queryConfiguration,
    );
    if (name === '<nil>') {
      name = conversionCriteriaLabel;
    }

    return [
      ...acc,
      {
        data: [],
        type: 'bar',
        zlevel: 1,
        emphasis: {
          focus: 'series',
        },
        stack: `conversion_funnel_${name}_${funnelData.value}`,
        name: name,
        label:
          funnelData.dimension !== '$all' || !!chartData[0]?.cohort
            ? {}
            : {
                show: funnelData?.dimensions ? false : true,
                formatter: function ({ data }: { data: any }) {
                  const { conversionNumber, conversionPercentage } = data || {};

                  return [
                    `{percentage|${Number(conversionPercentage).toFixed(2)}%}`,
                    `{number|${conversionNumber}}`,
                  ].join('\n');
                },
                position: 'top',
                align: 'center',
                rich: {
                  percentage: {
                    color: themeColors['--secondary-text'],
                    fontWeight: 600,
                    lineHeight: 18,
                    fontSize: 14,
                  },
                  number: {
                    color: themeColors['--secondary-text'],
                    fontWeight: 500,
                    lineHeight: 14,
                    fontSize: 11,
                  },
                },
              },
      },
      {
        name: name,
        data: [],
        type: 'bar',
        stack: `conversion_funnel_${name}_${funnelData.value}`,
        itemStyle: {
          color: 'rgba(66,56,202, .1)',
        },
      },
    ];
  }, []);

  const funnelsStepsOptions = {
    grid: {
      left: 50,
      top: 95,
      right: 30,
      bottom: 30,
    },
    title: {
      show: true,
      text: `Funnels: ${chartTitle}`,
      left: 20,
      textStyle: {
        fontFamily: 'HousewareFont',
        fontSize: 15,
        fontWeight: 'bold',
        color: themeColors['--primary-text'],
      },
    },
    xAxis: {
      type: 'category',
      data: [] as string[],
      axisLabel: {
        interval: 0,
        width: 300,
        align: 'center',
        overflow: 'break',
        color: themeColors['--secondary-text'],
        hideOverlap: true,
        formatter: (value: any) => {
          return value.split('_').join(' ');
        },
        fontFamily: 'ChartsFont',
        fontSize: 10,
      },
      axisLine: {
        lineStyle: {
          color: themeColors['--border'],
        },
      },
    },
    yAxis: {
      type: 'value',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: themeColors['--border'],
        },
      },
      axisLabel: {
        color: themeColors['--secondary-text'],
        fontFamily: 'ChartsFont',
        fontSize: 10,
      },
      splitLine: {
        lineStyle: {
          color: themeColors['--border'],
          width: 0.4,
        },
      },
      max: 100,
    },
    series: funnelSeries,
    legend: {
      data: funnelSeries.map((series) => series.name),
      top: 40,
      left: 20,
      color: themeColors['--secondary-text'],
      icon: 'circle',
      textStyle: {
        color: themeColors['--primary-text'],
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'HousewareFont',
      },
      inActiveColor: 'red',
    },
    toolbox: {
      feature: {
        saveAsImage: {
          title: 'Download chart',
          name: `Funnel Chart - ${chartTitle}`,
          show: true,
          icon: `image://chart-download-${themeMode}-mode.png`,
        },
      },
    },
    tooltip: {
      trigger: 'item',
      confine: true,
      order: 'valueDesc',
      backgroundColor: themeColors['--foreground'],
      borderColor: themeColors['--border'],
      textStyle: {
        color: themeColors['--secondary-text'],
        fontFamily: 'HousewareFont',
      },
      formatter: function ({ data }: { data: any }) {
        const {
          conversionNumber,
          conversionPercentage,
          dropOffPercentage,
          dropOffNumber,
          name,
          seriesLabel,
          config,
        } = data || {};
        const totalUsersInFunnel = (
          (Number(conversionNumber || dropOffNumber) /
            Number(conversionPercentage || dropOffPercentage)) *
          100
        ).toLocaleString();

        let titleLabel = ` <b>${name}</b>`;

        if (config.start_date) {
          titleLabel = `${titleLabel} (from ${dayjs(config?.start_date).format(
            'Do MMM YY',
          )}`;
        }

        if (config.end_date) {
          titleLabel = `${titleLabel} to ${dayjs(config?.end_date).format(
            'Do MMM YY',
          )})`;
        }

        return `
          ${titleLabel}
          </br>
          <br />
          ${seriesLabel}
          </br>
          ${Number(conversionPercentage).toFixed(
            2,
          )}% (${conversionNumber.toLocaleString()} of ${totalUsersInFunnel}) converted
          </br>
          ${Number(dropOffPercentage).toFixed(
            2,
          )}% (${dropOffNumber.toLocaleString()} of ${totalUsersInFunnel}) drop-off
          `;
      },
    },
  };

  for (let stepIndex = 0; stepIndex < chartData[0].steps.length; stepIndex++) {
    chartData.forEach((fData: any, funnelIndex: number) => {
      const step = fData.steps[stepIndex];
      const conversionPercentage = step.prev_step_conversion_percentage;
      const dropOffPercentage = stepIndex > 0 ? 100 - conversionPercentage : 0;
      const dropOffNumber =
        stepIndex > 0 ? fData.steps[stepIndex - 1].value - step.value : 0;
      funnelsStepsOptions.series[2 * funnelIndex].data.push({
        value: (step.value / chartData[funnelIndex].steps[0].value) * 100,
        name: step.event_name,
        config: queryConfiguration,
        seriesLabel: getSeriesKey(fData, queryConfiguration)
          .seriesNameToGroupBy,
        dimensions: fData.dimensions,
        cohort: {
          cohort_uuid: fData?.cohort_uuid,
          cohort_value: fData?.cohort_value,
        },

        conversionNumber: step.value,
        dropOffPercentage,
        dropOffNumber,
        conversionPercentage: conversionPercentage,
        seriesType: 'converted',
        stepIndex,
      });
      funnelsStepsOptions.series[2 * funnelIndex + 1].data.push({
        value: (dropOffNumber / chartData[funnelIndex].steps[0].value) * 100,
        name: step.event_name,
        config: queryConfiguration,
        seriesLabel: getSeriesKey(fData, queryConfiguration)
          .seriesNameToGroupBy,
        dimensions: fData.dimensions,
        dropOffNumber,
        dropOffPercentage,
        conversionNumber: step.value,
        conversionPercentage: conversionPercentage,
        seriesType: 'dropped off',
        stepIndex,
      });
    });
    const stepsChartLabel: string = getEventAndLabelName({
      eventName: chartData[0].steps[stepIndex].event_name,
      eventIndex: stepIndex,
      funnelsConfiguration: queryConfiguration,
    });
    funnelsStepsOptions?.xAxis?.data.push(stepsChartLabel);
  }

  return funnelsStepsOptions;
}
