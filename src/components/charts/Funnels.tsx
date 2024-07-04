import { Card, Flex, Typography } from "antd";
import ReactECharts from "echarts-for-react";

import { useThemeManager } from "../useThemeManager";
import getFunnelsChartOptions from "./getFunnelsChartOptions";

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

  return (
    <Flex vertical gap={16}>
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
      <Typography>{chartResponse.summary}</Typography>
    </Flex>
  );
}
