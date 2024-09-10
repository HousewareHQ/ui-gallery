import {
  ArrowClockwise,
  CaretDoubleLeft,
  CaretDoubleRight,
  CheckCircle,
  Copy,
  DownloadSimple,
  GlobeHemisphereWest,
  PenNib,
  Translate,
} from "@phosphor-icons/react";
import {
  Button,
  Card,
  Divider,
  Dropdown,
  Flex,
  Popconfirm,
  Select,
  TableColumnsType,
  Tooltip,
  Typography,
} from "antd";
import { MenuProps } from "rc-menu";
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
    countrySelected: string;
    languageSelected: string;
    countries: Array<{ value: string; label: string }>;
    languages: Array<{ value: string; label: string }>;
  };
  handleSuggestChanges: (userQuery: string) => void;
  areKeywordsLoading: boolean;
  currencySymbol?: string;
  handleUpdateCampaignName?: (name: string) => void;
  handleChangeCountry: (country: string) => void;
  handleChangeLanguage: (language: string) => void;
  handleRefreshTable: () => void;
  refreshTableText?: string;
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
  handleChangeCountry,
  handleChangeLanguage,
  handleRefreshTable,
  refreshTableText,
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
      title: "Estimated CPC",
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
        const competitions = ["low", "medium", "high"];
        const aValue = competitions.indexOf(a.competition.toLowerCase());
        const bValue = competitions.indexOf(b.competition.toLowerCase());

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

  function generateCSV(data: DataType[]): void {
    const headers = [
      "Keyword",
      "Average Monthly Searches",
      "Competition",
      "High CPC",
      "Low CPC",
      "CPC",
    ];

    // Create CSV content
    let csvContent = headers.join(",") + "\n";

    // Add data rows
    data.forEach((row) => {
      const rowData = [
        escapeCsvValue(row.keyword),
        row.average_monthly_searches,
        escapeCsvValue(row.competition),
        `${currencySymbol}${row.high_cpc.toFixed(2)}`,
        `${currencySymbol}${row.low_cpc.toFixed(2)}`,
        `${currencySymbol}${row.cpc.toFixed(2)}`,
      ];
      csvContent += rowData.join(",") + "\n";
    });

    // Create Blob and download file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "keywords.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  // Helper function to escape special characters in CSV
  function escapeCsvValue(value: string): string {
    if (value.includes(",") || value.includes('"') || value.includes("\n")) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }

  const handleDownloadKeywords: MenuProps["onClick"] = (e) => {
    if (e.key === "download_all") {
      generateCSV(keywordsData);
    }

    if (e.key === "download_selected") {
      generateCSV(selectedRows);
    }
  };
  return (
    <Flex
      style={{
        width: "100%",
        height: "100%",
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
          width: "50vw",
          textAlign: "center",
          fontFamily: "Sedan",
          marginBottom: 32,
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
        vertical
        style={{
          width: "calc(60vw - 49px)",
          paddingRight: "24px",
          paddingBottom: "16px",
        }}
        align="flex-start"
        gap={8}
      >
        <Flex
          justify="space-between"
          align="center"
          style={{
            width: "100%",
          }}
        >
          <Flex gap={24} align="center">
            <Typography.Title
              level={5}
              style={{
                margin: 0,
                maxWidth: "15vw",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {productCampaign.description}
            </Typography.Title>
            <Flex gap={4}>
              <Select
                size="small"
                variant="borderless"
                suffixIcon={<GlobeHemisphereWest />}
                value={productCampaign?.countrySelected}
                onChange={handleChangeCountry}
                options={productCampaign.countries}
                popupMatchSelectWidth={false}
                showSearch
              />

              <Select
                size="small"
                variant="borderless"
                suffixIcon={<Translate />}
                value={productCampaign?.languageSelected}
                onChange={handleChangeLanguage}
                options={productCampaign?.languages}
                popupMatchSelectWidth={false}
                showSearch
              />
            </Flex>
          </Flex>
          <Tooltip
            placement="bottomRight"
            title={
              selectedRows.length === 0
                ? "Select keywords to proceed"
                : "Proceed with selected keywords"
            }
          >
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
          </Tooltip>
        </Flex>
        {refreshTableText && (
          <Flex gap={4} align="center">
            <Typography.Text
              type="secondary"
              style={{
                fontSize: "0.8rem",
              }}
            >
              {refreshTableText}
            </Typography.Text>
            <Button
              size="small"
              type="text"
              icon={<ArrowClockwise />}
              onClick={handleRefreshTable}
            />
          </Flex>
        )}
      </Flex>
      <Flex
        style={{
          height: "100%",
          width: "calc(60vw - 38px)",

          overflowY: "auto",
          padding: "0 24px 20vh 0",
        }}
        vertical
        align="center"
        justify="flex-start"
        gap={24}
      >
        <Flex
          vertical
          gap={12}
          style={{
            width: "100%",
          }}
          align="center"
        >
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
                <Tooltip title={"Download keywords"}>
                  <Dropdown
                    trigger={["click"]}
                    placement="bottomRight"
                    menu={{
                      items: [
                        {
                          label: "Download all keywords",
                          key: "download_all",
                        },
                        {
                          label: "Download selected keywords",
                          key: "download_selected",
                          disabled: selectedRows?.length === 0,
                        },
                      ],
                      onClick: handleDownloadKeywords,
                    }}
                  >
                    <Button
                      size="small"
                      type="text"
                      icon={<DownloadSimple />}
                    />
                  </Dropdown>
                </Tooltip>
                <Tooltip title={"Copy selected keywords"}>
                  <Button
                    size="small"
                    type="text"
                    onClick={handleCopyKeywords}
                    disabled={selectedRows?.length === 0}
                  >
                    {areKeywordsCopied ? (
                      <CheckCircle weight="duotone" />
                    ) : (
                      <Copy />
                    )}
                  </Button>
                </Tooltip>
                <Button
                  disabled={selectedRows?.length === 0}
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

          <CustomTable
            style={{
              width: "100%",
            }}
            dataSource={keywordsData}
            loading={areKeywordsLoading}
            columns={columns}
            onRowClick={(record) => {
              const isSelected = selectedRows.some(
                (row) => row.key === record.key
              );
              if (isSelected) {
                setSelectedRows(
                  selectedRows.filter((row) => row.key !== record.key)
                );
              } else {
                setSelectedRows([...selectedRows, record as DataType]);
              }
            }}
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
            pagination={{
              style: {
                width: "100%",
                display: "flex",
                justifyItems: "flex-end",
                gap: "0.5rem",
                padding: "10px",
                background: "var(--light-foreground)",
                marginTop: 0,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
              },
              showSizeChanger: false,
              simple: true,
              itemRender: (_, type, originalElement) => {
                if (type === "prev") {
                  return (
                    <Button size="small" type="text">
                      <CaretDoubleLeft />
                    </Button>
                  );
                }
                if (type === "next") {
                  return (
                    <Button size="small" type="text">
                      <CaretDoubleRight />
                    </Button>
                  );
                }
                return originalElement;
              },
            }}
          />
          <Flex
            style={{
              width: "95%",
              marginTop: "calc(-16px - 12px - 0.7rem - 0.5rem - 0.7rem)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <Typography.Text
              type="secondary"
              style={{
                fontSize: "0.7rem",
              }}
            >
              Powered by Google Ads
            </Typography.Text>
          </Flex>
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
