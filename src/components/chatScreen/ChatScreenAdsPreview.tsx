import {
  Button,
  Card,
  Descriptions,
  Divider,
  Flex,
  Popconfirm,
  Progress,
  Tag,
  Typography,
} from "antd";
import { useEffect, useRef } from "react";

export interface BaseMessage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  type: "ai" | "human";
}

export interface ChatScreenAdsPreviewProps<T> {
  messages: T[];

  handleSendFollowupMessage: (
    // eslint-disable-next-line no-unused-vars
    userQuery: string,
    // eslint-disable-next-line no-unused-vars
    regenerateResponse?: boolean
  ) => void;
  isMessageLoading: boolean;
  setMessages: React.Dispatch<React.SetStateAction<T[]>>;

  pageHeading: string;
  forecast: {
    dateRange: string;
    cost: string;
    avgCPC: string;
    dailyBudget: string;
    clicks: string;
    impressions: string;
    ctr: string;
    location: string;
    language: string;
  };
  keywords: string[];
}

export function ChatScreenAdsPreview<T extends BaseMessage>({
  messages,
  setMessages,
  pageHeading,
  forecast,
  keywords,
}: ChatScreenAdsPreviewProps<T>) {
  const chatsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = chatsContainerRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  return (
    <Flex
      style={{
        height: "100vh",
        width: "50vw",
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
      <Card
        size="small"
        style={{
          width: "100%",
        }}
        styles={{
          body: {
            padding: "16px 24px 4px",
          },
        }}
      >
        <Flex vertical gap={12}>
          <Descriptions
            layout="vertical"
            column={6}
            size="small"
            colon={false}
            contentStyle={{
              fontSize: "1.5rem",
            }}
            title={
              <Typography.Title
                level={5}
                style={{
                  fontFamily: "Sedan",
                }}
              >
                Forecast for {forecast.dateRange}
              </Typography.Title>
            }
            items={[
              {
                label: "Clicks",
                children: forecast.clicks,
              },
              {
                label: "Impressions",
                children: forecast.impressions,
              },
              {
                label: "Cost",
                children: forecast.cost,
              },
              {
                label: "Avg CPC",
                children: forecast.avgCPC,
              },
              {
                label: "Daily Budget",
                children: forecast.dailyBudget,
              },
              {
                label: "CTR",
                children: forecast.ctr,
              },
            ]}
          />
          {/* <Divider
            style={{
              margin: 0,
            }}
          /> */}
          <Descriptions
            colon={false}
            size="small"
            items={[
              {
                label: "Location",
                children: forecast.location,
              },
              {
                label: "Language",
                children: forecast.language,
              },
            ]}
          />
        </Flex>
      </Card>
      <Flex
        vertical
        align="flex-start"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        gap={4}
      >
        <Typography.Text type="secondary">Your Ad Group</Typography.Text>
        <Card
          style={{
            width: "100%",
          }}
        >
          <Flex vertical gap={8}>
            <Flex
              style={{
                width: "100%",
              }}
              justify="space-between"
            >
              <Typography.Title level={5}>Ad Group 1</Typography.Title>
              <Flex gap={8}>
                <Progress type="circle" percent={75} size={20} />
                <Typography.Text>Ad Strength</Typography.Text>
              </Flex>
            </Flex>
            <Flex>
              {keywords.map((keyword) => (
                <Tag key={keyword}>{keyword}</Tag>
              ))}
            </Flex>
            <Divider
              style={{
                margin: 0,
              }}
            />
          </Flex>
        </Card>
      </Flex>
      <Flex
        justify="flex-end"
        style={{
          width: "100%",
        }}
      >
        <Button type="primary">Create Campaign</Button>
      </Flex>
      <Popconfirm
        title="You'll lose your current chat history."
        description="Are you sure you want to start a new chat?"
        placement="bottomLeft"
        okText="Yes"
        cancelText="No"
        onConfirm={() => {
          setMessages([]);
        }}
      >
        <Button
          type="primary"
          style={{
            position: "absolute",
            top: 16,
            right: 32,
          }}
        >
          Start fresh
        </Button>
      </Popconfirm>
    </Flex>
  );
}
