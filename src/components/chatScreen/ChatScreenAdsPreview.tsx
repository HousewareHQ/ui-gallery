import {
  Button,
  Card,
  Descriptions,
  Flex,
  Popconfirm,
  Spin,
  Typography,
} from "antd";
import { useState } from "react";
import { ChatInput } from "../common/ChatInput";
import AdGroupWrapper, { AdGroup } from "./components/AdGroupWrapper";

export interface ChatScreenAdsPreviewProps {
  handleGoBack: () => void;
  handleStartFresh: () => void;

  pageHeading: string;
  forecast: {
    date_range: string;
    cost: string;
    average_cpc: string;
    click_through_rate: string;
    daily_budget: string;
    clicks: string;
    impressions: string;
    country: string;
    language: string;
  };
  adGroups: AdGroup[];
  handleChangeHeadings: (headings: string[]) => void;
  handleChangeDescriptions: (descriptions: string[]) => void;
  handleUpdateAdGroups: (adGroups: AdGroup[]) => void;
  isForecastLoading: boolean;
  areHeadingsDescriptionsLoading: Array<boolean>;
  handleCreateCampaign: () => void;
  handleSuggestChanges: (userQuery: string) => void;
  inputPlaceholder?: string;
}

export function ChatScreenAdsPreview({
  pageHeading,
  forecast,
  adGroups,
  handleGoBack,
  handleStartFresh,
  handleUpdateAdGroups,
  isForecastLoading,
  areHeadingsDescriptionsLoading,
  handleCreateCampaign,
  handleSuggestChanges,
  inputPlaceholder = "Type your message here",
}: ChatScreenAdsPreviewProps) {
  const [userQuery, setUserQuery] = useState("");

  return (
    <Flex
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        padding: 16,
        paddingBottom: "20vh",
      }}
      justify="flex-start"
      vertical
      align="center"
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
        style={{
          width: "80vw",
          padding: "1vh 10vw 10vh",
          overflowY: "auto",
        }}
        vertical
        align="center"
        justify="flex-start"
        gap={24}
      >
        <Spin spinning={isForecastLoading}>
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
                  <Typography.Title level={5}>
                    Forecast for {forecast.date_range}
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
                    label: "Avg. CPC",
                    children: forecast.average_cpc,
                  },
                  {
                    label: "Daily Budget",
                    children: forecast.daily_budget,
                  },
                  {
                    label: "CTR",
                    children: forecast.click_through_rate,
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
                    children: forecast.country,
                  },
                  {
                    label: "Language",
                    children: forecast.language,
                  },
                ]}
              />
            </Flex>
          </Card>
        </Spin>
        <Flex
          vertical
          align="flex-start"
          style={{
            width: "100%",
            // height: "100%",
            // overflow: "hidden",
          }}
          gap={4}
        >
          <Typography.Text type="secondary">Your Ad Groups</Typography.Text>

          {adGroups?.map((adGroup, index) => {
            return (
              <AdGroupWrapper
                adGroup={adGroup}
                areHeadingsDescriptionsLoading={
                  areHeadingsDescriptionsLoading[index]
                }
                handleUpdateAdGroup={(updatedAdGroup) => {
                  handleUpdateAdGroups([
                    ...adGroups.slice(0, index),
                    updatedAdGroup,
                    ...adGroups.slice(index + 1),
                  ]);
                }}
              />
            );
          })}
        </Flex>
        <Flex
          justify="flex-end"
          style={{
            width: "100%",
          }}
          gap={16}
        >
          <Button onClick={handleGoBack}>Go Back</Button>
          <Button type="primary" onClick={handleCreateCampaign}>
            Create Campaign
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
        handleSendMessage={() => {
          handleSuggestChanges(userQuery);
          setUserQuery("");
        }}
        placeholder={inputPlaceholder}
        isFollowupDisabled={false}
        width={"60vw"}
      />
    </Flex>
  );
}
