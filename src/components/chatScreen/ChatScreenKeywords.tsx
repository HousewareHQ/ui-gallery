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
}

export interface ChatScreenKeywordsProps {
  handleStartFresh: () => void;
  keywordsData: Array<DataType>;
  pageHeading: string;
  handleProceed: () => void;
}

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  //   getCheckboxProps: (record: DataType) => ({
  //     disabled: record.name === "Disabled User", // Column configuration not to be checked
  //     name: record.name,
  //   }),
};

export function ChatScreenKeywords({
  pageHeading,
  keywordsData,
  handleStartFresh,
  handleProceed,
}: ChatScreenKeywordsProps) {
  const [userQuery, setUserQuery] = useState("");

  const columns: TableColumnsType<DataType> = [
    {
      title: "Keyword",
      dataIndex: "keyword",
    },
    {
      title: "Monthly Search Volume",
      dataIndex: "monthlySearchVolume",
    },
    {
      title: "Avg Monthly Searches",
      dataIndex: "avgMonthlySearches",
    },
    {
      title: "CPC",
      dataIndex: "cpc",
    },
    {
      title: "Competition",
      dataIndex: "competition",
    },
    {
      title: "Low Bid",
      dataIndex: "lowBid",
    },
    {
      title: "High Bid",
      dataIndex: "highBid",
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
          overflow: "hidden",
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
        <CustomTable
          style={{
            width: "100%",
          }}
          dataSource={keywordsData}
          columns={columns}
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
        />
        <Flex
          justify="flex-end"
          style={{
            width: "100%",
          }}
        >
          <Button type="primary" onClick={handleProceed}>
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
