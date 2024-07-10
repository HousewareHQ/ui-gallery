import { Card, Flex, Typography } from "antd";
import ReactECharts from "echarts-for-react";
import Markdown from "react-markdown";
import { useThemeManager } from "../useThemeManager";
import { getTrendsChartOptions } from "./getTrendsChartOptions";

export function Trends({
  chartResponse,
  queryConfiguration,
}: {
  chartResponse?: any;
  queryConfiguration?: any;
}) {
  const { themeColors, currentTheme } = useThemeManager();
  const chartOptions = getTrendsChartOptions({
    chartData: chartResponse?.data ?? [],
    queryConfiguration: queryConfiguration ?? {},
    themeColors,
    themeMode: currentTheme,
  });

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
