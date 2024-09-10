import { Code, Download, ShareFat } from "@phosphor-icons/react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridReact } from "ag-grid-react";
import {
  Button,
  Card,
  Flex,
  Image,
  List,
  message,
  Modal,
  Popover,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
import { CSVLink } from "react-csv";
import Markdown from "react-markdown";

const { Paragraph, Text } = Typography;
export interface AiMessageTableProps {
  title: string;
  sequelQuery?: string;
  description?: string;
  segmentSize: number | null;
  summary: string;
  rowData: Record<string, any>[];
  columnDefs: {
    field: string;
  }[];
}

export const SegmentMetricsCard = ({
  name,
  segmentMetricsData,
}: {
  name: string;
  segmentMetricsData: { title: string; value: string }[];
}) => {
  return (
    <Card
      style={{ backgroundColor: "var(--light-foreground)" }}
      hoverable
      size="small"
      title={<Typography.Title level={3}>Segment Metrics</Typography.Title>}
    >
      <Flex vertical gap={6}>
        <Typography>
          <strong>Segment name:</strong> {name}
        </Typography>
        <Flex gap={20} wrap>
          {segmentMetricsData.map((metric) => (
            <Flex vertical gap={6} key={metric.title}>
              <Text>{metric.title}</Text>
              <Text>
                <strong>{metric.value}</strong>
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};

export default function AiMessageTable({
  title,
  summary,
  segmentSize,
  description,
  sequelQuery,
  rowData,
  columnDefs,
}: AiMessageTableProps) {
  const logoLink =
    window?.location?.hostname === "localhost"
      ? `${window.location.pathname}`
      : `${window.location.origin}${window.location.pathname}`;

  const [ellipsis] = useState(true);
  const [showSqlModal, setShowSqlModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const exportPopOverContent = (
    <List
      itemLayout="horizontal"
      dataSource={[
        {
          text: "HubSpot",
          img: "/hubspot.svg",
        },
        {
          text: "Braze",
          img: "/braze.svg",
        },
      ]}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Image
                preview={false}
                width={26}
                src={`${logoLink}/${item.img}`}
              />
            }
            title={<a href="https://ant.design">{item.text}</a>}
          />
        </List.Item>
      )}
    />
  );

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
        bordered
        hoverable
        style={{
          backgroundColor: "var(--light-foreground)",
          width: "100%",
        }}
        styles={{
          header: {
            backgroundColor: "#FFF",
          },
        }}
        title={
          <Flex justify="space-between" style={{ width: "100%" }}>
            <Typography style={{ width: "80%", overflow: "hidden" }}>
              {title}
            </Typography>
            <Flex align="center" gap={6}>
              <Tooltip title="View sql query">
                <Button
                  disabled={!sequelQuery}
                  type="text"
                  size="small"
                  icon={<Code size={20} />}
                  onClick={() => setShowSqlModal(true)}
                />
              </Tooltip>
              <CSVLink data={rowData} style={{ color: "#3C3838" }}>
                <Tooltip title="Download as CSV">
                  <Button
                    type="text"
                    size="small"
                    icon={<Download size={20} />}
                  />
                </Tooltip>
              </CSVLink>
              <Popover
                title="Export segment to"
                placement="rightTop"
                content={exportPopOverContent}
                arrow={false}
              >
                <Button
                  type="text"
                  size="small"
                  icon={<ShareFat size={20} />}
                />
              </Popover>
            </Flex>
          </Flex>
        }
      >
        {contextHolder}
        <Modal
          title="Copy SQL Query to clip board"
          open={showSqlModal}
          onOk={() => {
            navigator.clipboard.writeText(sequelQuery ?? "");
            messageApi.success("SQL code copied to clipboard");
            setShowSqlModal(false);
          }}
          okText="Copy"
          onCancel={() => setShowSqlModal(false)}
        >
          <Card>
            <Markdown>{sequelQuery}</Markdown>
          </Card>
        </Modal>
        <Flex vertical gap={12}>
          <div
            style={{
              width: "100%",
              height: 300,
            }}
          >
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />
          </div>
          <Flex vertical>
            <Paragraph
              ellipsis={
                ellipsis ? { rows: 2, expandable: true, symbol: "more" } : false
              }
            >
              <strong>Description:</strong> {description}
            </Paragraph>
            <Text>
              <strong>Segment size:</strong> {segmentSize || rowData?.length}
            </Text>
          </Flex>
        </Flex>
      </Card>
      <Typography>
        <Markdown>{summary}</Markdown>
      </Typography>
    </Flex>
  );
}
