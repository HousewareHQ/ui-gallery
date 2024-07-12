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
  keyword: string;
  monthlySearchVolume: string;
  avgMonthlySearches: string;
  cpc: string;
  competition: string;
  lowBid: string;
  highBid: string;
  key: string;
}

export interface ChatScreenKeywordsProps {
  handleStartFresh: () => void;
  keywordsData: Array<DataType>;
  pageHeading: string;
  // eslint-disable-next-line no-unused-vars
  handleProceed: (selectedRows: DataType[]) => void;
  productCampaign: string;
}

// const rowSelection = {
//   onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   //   getCheckboxProps: (record: DataType) => ({
//   //     disabled: record.name === "Disabled User", // Column configuration not to be checked
//   //     name: record.name,
//   //   }),
// };

export function ChatScreenKeywords({
  pageHeading,
  keywordsData,
  handleStartFresh,
  handleProceed,
  productCampaign,
}: ChatScreenKeywordsProps) {
  const [userQuery, setUserQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<DataType[]>([]);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Keyword",
      dataIndex: "keyword",
    },
    {
      title: "Monthly Search Volume",
      dataIndex: "monthlySearchVolume",
      align: "center",
    },
    // {
    //   title: "Avg Monthly Searches",
    //   dataIndex: "avgMonthlySearches",
    // },
    {
      title: "CPC",
      dataIndex: "cpc",
      align: "center",
    },
    {
      title: "Competition",
      dataIndex: "competition",
      align: "center",
    },
    {
      title: "Low Bid",
      dataIndex: "lowBid",
      align: "center",
    },
    {
      title: "High Bid",
      dataIndex: "highBid",
      align: "center",
    },
  ];
  return (
    <Flex
      style={{
        width: "100vw",
        height: "100vh",
      }}
      align="center"
      justify="center"
    >
      <Flex
        style={{
          height: "100%",
          width: "60vw",
          padding: 16,
          overflow: "auto",
        }}
        vertical
        align="center"
        justify="flex-start"
        gap={24}
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
          justify="space-between"
          style={{
            width: "100%",
          }}
        >
          <Typography.Title level={5} style={{ marginBottom: 0 }}>
            {productCampaign}
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
              India
            </Button>

            <Button
              type="text"
              style={{
                fontSize: "0.8rem",
              }}
              size="small"
              icon={<Translate />}
            >
              English
            </Button>
          </Flex>
        </Flex>
        <CustomTable
          style={{
            width: "100%",
          }}
          dataSource={keywordsData}
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
        />
        <Flex
          justify="space-between"
          style={{
            width: "100%",
          }}
        >
          <Typography.Text
            type="secondary"
            style={{
              marginTop: "-4px",
              fontSize: "0.7rem",
            }}
          >
            Powered by Google Ads, Semrush
          </Typography.Text>
          <Button
            type="primary"
            onClick={() => {
              handleProceed(selectedRows);
            }}
          >
            Proceed
          </Button>
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
      </Flex>
      <ChatInput
        inputRef={null}
        userQuery={userQuery}
        setUserQuery={setUserQuery}
        handleSendMessage={() => {}}
        placeholder="Suggest Changes..."
        isFollowupDisabled={false}
        width={"60vw"}
      />
    </Flex>
  );
}
