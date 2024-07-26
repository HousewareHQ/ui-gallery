import {
  CheckCircle,
  Copy,
  GlobeHemisphereWest,
  PenNib,
  Translate,
} from "@phosphor-icons/react";
import {
  Button,
  Card,
  Divider,
  Flex,
  Popconfirm,
  TableColumnsType,
  Tooltip,
  Typography,
} from "antd";
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
  currencySymbol?: string;
  handleUpdateCampaignName?: (name: string) => void;
}

export function ChatScreenKeywords({
  pageHeading,
  keywordsData,
  handleStartFresh,
  handleProceed,
  productCampaign,
  handleSuggestChanges,
  areKeywordsLoading,
  currencySymbol = "₹",
  handleUpdateCampaignName,
}: ChatScreenKeywordsProps) {
  const [userQuery, setUserQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<DataType[]>([]);
  const [areKeywordsCopied, setAreKeywordsCopied] = useState(false);
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
      render: (value) => `${currencySymbol}${value}`,
      sorter: (a, b) => a.cpc - b.cpc,
    },
    {
      title: "Competition",
      dataIndex: "competition",
      align: "center",
      sorter: (a, b) => {
        const aValue = parseInt(a.competition.split("/")[0]);
        const bValue = parseInt(b.competition.split("/")[0]);

        return aValue - bValue;
      },
    },
    {
      title: "Low Bid",
      dataIndex: "low_cpc",
      align: "center",
      render: (value) => `${currencySymbol}${value}`,
      sorter: (a, b) => a.low_cpc - b.low_cpc,
    },
    {
      title: "High Bid",
      dataIndex: "high_cpc",
      align: "center",
      render: (value) => `${currencySymbol}${value}`,
      sorter: (a, b) => a.high_cpc - b.high_cpc,
    },
  ];

  const handleCopyKeywords = () => {
    const keywords = selectedRows.map((row) => row.keyword).join(", ");
    navigator.clipboard.writeText(keywords);
    setAreKeywordsCopied(true);
    setTimeout(() => {
      setAreKeywordsCopied(false);
    }, 2000);
  };
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
        editable={{
          onChange: (e) => handleUpdateCampaignName?.(e),
          icon: (
            <PenNib
              size={"1rem"}
              color="var(--secondary-text)"
              style={{
                marginLeft: "8px",
                cursor: "pointer",
              }}
            />
          ),
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
          align="center"
        >
          <Flex gap={24} align="center">
            <Typography.Title
              level={5}
              style={{
                margin: 0,
                maxWidth: "20vw",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {productCampaign.description}
            </Typography.Title>
            <Flex gap={4}>
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
          <Button
            type="primary"
            onClick={() => {
              handleProceed(selectedRows);
            }}
            disabled={selectedRows.length === 0}
            iconPosition="end"
          >
            Proceed
          </Button>
        </Flex>

        <Flex
          vertical
          gap={12}
          style={{
            width: "100%",
          }}
        >
          {selectedRows.length > 0 && (
            <Card
              size="small"
              style={{
                width: "100%",
              }}
            >
              <Flex justify="space-between" align="center">
                <Flex align="center">
                  <Typography.Text>
                    {selectedRows?.length} selected
                  </Typography.Text>
                  <Divider type="vertical" />
                  <Button
                    size="small"
                    onClick={() => {
                      setSelectedRows(keywordsData);
                    }}
                  >
                    Select All {keywordsData?.length}
                  </Button>
                </Flex>
                <Flex align="center" gap={8}>
                  <Tooltip title="Copy selected keywords">
                    <Button
                      size="small"
                      type="text"
                      onClick={handleCopyKeywords}
                    >
                      {areKeywordsCopied ? (
                        <CheckCircle weight="duotone" />
                      ) : (
                        <Copy />
                      )}
                    </Button>
                  </Tooltip>
                  <Button
                    size="small"
                    onClick={() => {
                      setSelectedRows([]);
                    }}
                  >
                    Clear All
                  </Button>
                </Flex>
              </Flex>
            </Card>
          )}

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
              selectedRowKeys: selectedRows.map((row) => row.key),
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
