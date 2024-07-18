import { GlobeHemisphereWest, Translate } from "@phosphor-icons/react";
import { Button, Flex, Popconfirm, TableColumnsType, Typography } from "antd";
import { useState } from "react";
import { ChatInput } from "../common/ChatInput";
import CustomTable from "../common/CustomTable";

export interface BaseMessage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  type: "ai" | "human";
}

interface DataType {
  average_monthly_searches: number;
  competition: string;
  high_cpc: number;
  keyword: string;
  low_cpc: number;
  cpc: number;
  key: string;
}

export interface ChatScreenKeywordsProps {
  handleStartFresh: () => void;
  keywordsData: Array<DataType>;
  pageHeading: string;
  // eslint-disable-next-line no-unused-vars
  handleProceed: (selectedRows: DataType[]) => void;
  productCampaign: {
    description: string;
    country: string;
    language: string;
  };
  handleSuggestChanges: (userQuery: string) => void;
  areKeywordsLoading: boolean;
}

export function ChatScreenKeywords({
  pageHeading,
  keywordsData,
  handleStartFresh,
  handleProceed,
  productCampaign,
  handleSuggestChanges,
  areKeywordsLoading,
}: ChatScreenKeywordsProps) {
  const [userQuery, setUserQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<DataType[]>([]);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Keyword",
      dataIndex: "keyword",
      width: "10rem",
    },
    {
      title: "Avg. Monthly Searches",
      dataIndex: "average_monthly_searches",
      align: "center",
      render: (value) => value.toLocaleString(),
      sorter: (a, b) => a.average_monthly_searches - b.average_monthly_searches,
    },
    {
      title: "CPC",
      dataIndex: "cpc",
      align: "center",
      render: (value) => `₹${value}`,
      sorter: (a, b) => a.cpc - b.cpc,
    },
    {
      title: "Competition",
      dataIndex: "competition",
      align: "center",
      sorter: (a, b) => {
        const sortOrder = ["low", "medium", "high", "unknown"];
        const aIndex = sortOrder.indexOf(a.competition.toLowerCase());
        const bIndex = sortOrder.indexOf(b.competition.toLowerCase());

        return aIndex - bIndex;
      },
    },
    {
      title: "Low Bid",
      dataIndex: "low_cpc",
      align: "center",
      render: (value) => `₹${value}`,
      sorter: (a, b) => a.low_cpc - b.low_cpc,
    },
    {
      title: "High Bid",
      dataIndex: "high_cpc",
      align: "center",
      render: (value) => `₹${value}`,
      sorter: (a, b) => a.high_cpc - b.high_cpc,
    },
  ];
  return (
    <Flex
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        padding: 16,
      }}
      align="center"
      justify="flex-start"
      vertical
    >
      <Typography.Title
        level={3}
        style={{
          width: "30vw",
          textAlign: "center",
          fontFamily: "Sedan",
        }}
      >
        {pageHeading}
      </Typography.Title>
      <Flex
        style={{
          height: "100%",
          width: "calc(60vw - 38px)",

          overflowY: "auto",
          padding: "2vh 24px 20vh 0",
        }}
        vertical
        align="center"
        justify="flex-start"
        gap={24}
      >
        <Flex
          justify="space-between"
          style={{
            width: "100%",
          }}
          align="flex-start"
        >
          <Typography.Title level={5} style={{ margin: 0 }}>
            {productCampaign.description}
          </Typography.Title>

          <Flex gap={4} align="center">
            <Button
              type="text"
              style={{
                fontSize: "0.8rem",
              }}
              size="small"
              icon={<GlobeHemisphereWest />}
            >
              {productCampaign.country}
            </Button>

            <Button
              type="text"
              style={{
                fontSize: "0.8rem",
              }}
              size="small"
              icon={<Translate />}
            >
              {productCampaign.language}
            </Button>
          </Flex>
        </Flex>
        <CustomTable
          style={{
            width: "100%",
          }}
          dataSource={keywordsData}
          loading={areKeywordsLoading}
          columns={columns}
          rowSelection={{
            type: "checkbox",
            onChange: (
              _selectedRowKeys: React.Key[],
              selectedRows: DataType[]
            ) => {
              setSelectedRows(selectedRows);
            },
          }}
          size="small"
          footer={() => {
            return (
              <Typography.Text
                type="secondary"
                style={{
                  fontSize: "0.7rem",
                }}
              >
                Powered by Google Ads, Semrush
              </Typography.Text>
            );
          }}
        />
        <Flex
          justify="flex-end"
          style={{
            width: "100%",
          }}
        >
          <Button
            type="primary"
            onClick={() => {
              handleProceed(selectedRows);
            }}
            disabled={selectedRows.length === 0}
          >
            Proceed
          </Button>
        </Flex>
      </Flex>
      <Flex
        style={{
          position: "absolute",
          top: 16,
          right: 32,
        }}
        gap={12}
      >
        <Popconfirm
          title="You'll lose your current progress"
          description="Are you sure you want to start from fresh?"
          placement="bottomLeft"
          okText="Yes"
          cancelText="No"
          onConfirm={() => {
            handleStartFresh();
          }}
        >
          <Button type="primary">Start fresh</Button>
        </Popconfirm>
      </Flex>

      <ChatInput
        inputRef={null}
        userQuery={userQuery}
        setUserQuery={setUserQuery}
        handleSendMessage={() => {
          handleSuggestChanges(userQuery);
          setUserQuery("");
        }}
        placeholder="Suggest Changes..."
        isFollowupDisabled={areKeywordsLoading}
        width={"60vw"}
      />
    </Flex>
  );
}
