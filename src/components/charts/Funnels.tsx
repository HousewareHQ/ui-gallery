import { Card, Flex, Typography, Tag } from "antd";
import ReactECharts from "echarts-for-react";
import Markdown from "react-markdown";
import { useThemeManager } from "../useThemeManager";
import getFunnelsChartOptions from "./getFunnelsChartOptions";
import { CalendarOutlined, FieldTimeOutlined } from "@ant-design/icons";

function formatConversionWindow(intervalInSeconds: number): string {
  const units = [
    { value: 60 * 60 * 24 * 30, name: 'month' },
    { value: 60 * 60 * 24 * 7, name: 'week' },
    { value: 60 * 60 * 24, name: 'day' },
    { value: 60 * 60, name: 'hour' },
    { value: 60, name: 'minute' },
    { value: 1, name: 'second' }
  ];

  for (const unit of units) {
    if (intervalInSeconds >= unit.value) {
      const value = Math.round(intervalInSeconds / unit.value * 100) / 100;
      const unitName = value === 1 ? unit.name : `${unit.name}s`;
      return `${value} ${unitName}`;
    }
  }

  return `${intervalInSeconds} seconds`;
}

export function Funnels({
  chartResponse,
  queryConfiguration,
}: {
  chartResponse?: any;
  queryConfiguration?: any;
}) {
  const { themeColors, currentTheme } = useThemeManager();
  const chartOptions = getFunnelsChartOptions({
    chartData: chartResponse?.data,
    queryConfiguration: queryConfiguration,
    themeColors,
    themeMode: currentTheme,
  });

  const startDate = queryConfiguration?.start_date;
  const endDate = queryConfiguration?.end_date;

  const windowInterval = queryConfiguration?.conversion?.window_interval;
  const formattedWindow = formatConversionWindow(windowInterval);

  return (
    <Flex
      vertical
      gap={16}
      style={{
        width: "100%",
      }}
    >
      <Card
        size="small"
        style={{
          backgroundColor: "var(--background)",
          width: "100%",
        }}
      >
        <Flex justify="flex-end" align="center" style={{ marginBottom: 16 }}>
          <Tag icon={<CalendarOutlined />} color="blue">
            {startDate} - {endDate}
          </Tag>
          <Tag icon={<FieldTimeOutlined />} color="green" style={{ marginLeft: 8 }}>
            {formattedWindow} window
          </Tag>
        </Flex>
        <ReactECharts
          style={{ height: "40vh", width: "100%" }}
          option={chartOptions}
          theme={{
            color: themeColors["--chart-colors"],
          }}
          notMerge
          opts={{ renderer: "canvas" }}
        />
      </Card>
      <Typography>
        <Markdown>{chartResponse.summary}</Markdown>
      </Typography>
    </Flex>
  );
}
