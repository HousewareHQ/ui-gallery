import { Info, PenNib } from "@phosphor-icons/react";
import {
  Button,
  Card,
  Descriptions,
  Flex,
  Popconfirm,
  Skeleton,
  Spin,
  Tooltip,
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
    disclaimer: string;
  };
  adGroups: AdGroup[];
  handleUpdateAdGroups: (adGroups: AdGroup[]) => void;
  isForecastLoading: boolean;
  areHeadingsDescriptionsLoading: Array<boolean>;
  handleReviewCampaign: () => void;
  handleSuggestChanges: (userQuery: string) => void;
  inputPlaceholder?: string;
  areAdGroupsLoading?: boolean;
  handleUpdateCampaignName: (name: string) => void;
  isReviewCampaignDisabled?: boolean;
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
  handleReviewCampaign,
  handleSuggestChanges,
  inputPlaceholder = "Type your message here",
  areAdGroupsLoading = false,
  handleUpdateCampaignName,
  isReviewCampaignDisabled = false,
}: ChatScreenAdsPreviewProps) {
  const [userQuery, setUserQuery] = useState("");

  return (
    <Flex
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        padding: 16,
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
          width: "70vw",
          padding: "1vh 16px 20vh",
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
                  <Flex align="center" gap={8}>
                    Forecast for {forecast.date_range}
                    <Tooltip placement="right" title={forecast.disclaimer}>
                      <Info />
                    </Tooltip>
                  </Flex>
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
          {areAdGroupsLoading ? (
            <Skeleton active />
          ) : (
            <Flex vertical gap={24}>
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
          )}
        </Flex>
        <Flex
          justify="flex-end"
          style={{
            width: "100%",
          }}
          gap={16}
        >
          <Button onClick={handleGoBack}>Go Back</Button>
          <Tooltip
            placement="right"
            title={isReviewCampaignDisabled ? "Coming Soon!" : undefined}
          >
            <Button
              disabled={isReviewCampaignDisabled}
              type="primary"
              onClick={handleReviewCampaign}
            >
              Review Campaign
            </Button>
          </Tooltip>
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
        width={"70vw"}
      />
    </Flex>
  );
}
