import {
  CaretDown,
  Globe,
  PauseCircle,
  PlayCircle,
} from "@phosphor-icons/react";
import {
  Button,
  Card,
  Descriptions,
  Divider,
  Flex,
  Input,
  Popconfirm,
  Progress,
  Select,
  Space,
  Spin,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import { useCallback, useEffect, useState } from "react";

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
  keywords: string[];
  headings: string[];
  descriptions: string[];
  finalURL: string;
  displayLink: [string, string];
  handleChangeHeadings: (headings: string[]) => void;
  handleChangeDescriptions: (descriptions: string[]) => void;
  adStrength: number;
  isForecastLoading: boolean;
  areHeadingsDescriptionsLoading: boolean;
  handleCreateCampaign: () => void;
}

const SuffixForSelect = ({
  maxCount,
  data,
}: {
  maxCount: number;
  data: string[];
}) => {
  return (
    <Flex
      style={{
        width: "100%",
        marginTop: -4,
      }}
      justify="flex-end"
    >
      <Typography.Text
        type="secondary"
        style={{
          fontSize: "0.7rem",
        }}
      >
        {data.length} / {maxCount}
      </Typography.Text>
    </Flex>
  );
};
export function ChatScreenAdsPreview({
  pageHeading,
  forecast,
  keywords,
  headings,
  descriptions,
  finalURL,
  displayLink,
  handleGoBack,
  handleStartFresh,
  handleChangeHeadings,
  handleChangeDescriptions,
  isForecastLoading,
  areHeadingsDescriptionsLoading,
  adStrength,
  handleCreateCampaign,
}: ChatScreenAdsPreviewProps) {
  const [previewHeadline, setPreviewHeadline] = useState(
    headings[0] || "Headline"
  );
  const [previewDescription, setPreviewDescription] = useState(
    descriptions[0] || "Description"
  );

  const [finalURLEntered, setFinalURLEntered] = useState(finalURL);
  const [shouldStartPreview, setShouldStartPreview] = useState(false);

  const handleRandomizePreview = useCallback(() => {
    const randomHeading = headings[Math.floor(Math.random() * headings.length)];
    const randomDescription =
      descriptions[Math.floor(Math.random() * descriptions.length)];
    setPreviewHeadline(randomHeading);
    setPreviewDescription(randomDescription);
  }, [headings, descriptions]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (shouldStartPreview) {
      interval = setInterval(() => {
        handleRandomizePreview();
      }, 2000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [shouldStartPreview, handleRandomizePreview]);

  return (
    <Flex
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "scroll",
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
      >
        {pageHeading}
      </Typography.Title>
      <Flex
        style={{
          width: "75vw",
          padding: "1vh 16px 5vh",
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
          <Typography.Text type="secondary">Your Ad Group</Typography.Text>
          <Card
            style={{
              width: "100%",
            }}
          >
            <Flex vertical gap={12}>
              <Flex
                style={{
                  width: "100%",
                }}
                justify="space-between"
              >
                <Typography.Title level={5}>Ad Group 1</Typography.Title>
                <Flex gap={8}>
                  <Progress type="circle" percent={adStrength} size={20} />
                  <Typography.Text>Ad Strength</Typography.Text>
                </Flex>
              </Flex>
              <Flex wrap gap={4}>
                {keywords.map((keyword) => (
                  <Tag key={keyword}>{keyword}</Tag>
                ))}
              </Flex>
              <Divider
                style={{
                  margin: 0,
                }}
              />
              <Flex gap={24}>
                <Flex
                  vertical
                  flex={0.5}
                  style={{
                    maxWidth: "50%",
                  }}
                  gap={16}
                >
                  <Flex vertical gap={8}>
                    <Typography.Text>Final URL</Typography.Text>
                    <Input
                      value={finalURLEntered}
                      onChange={(e) => setFinalURLEntered(e.target.value)}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Flex>
                  <Flex vertical gap={8}>
                    <Typography.Text>Display Link</Typography.Text>
                    <Flex vertical gap={2}>
                      <Typography.Text type="secondary">
                        {finalURLEntered}
                      </Typography.Text>
                      <Space
                        style={{
                          width: "100%",
                        }}
                      >
                        /<Input defaultValue={displayLink[0]} />/
                        <Input defaultValue={displayLink[1]} />
                      </Space>
                    </Flex>
                  </Flex>
                  <Flex vertical gap={8}>
                    <Typography.Text>Headlines</Typography.Text>
                    <Select
                      loading={areHeadingsDescriptionsLoading}
                      mode="tags"
                      maxCount={15}
                      style={{ width: "100%" }}
                      disabled={areHeadingsDescriptionsLoading}
                      value={headings}
                      onChange={(values) => {
                        handleChangeHeadings(values);
                      }}
                      suffixIcon={
                        areHeadingsDescriptionsLoading ? undefined : (
                          <CaretDown />
                        )
                      }
                      placeholder={
                        areHeadingsDescriptionsLoading
                          ? "Getting your headings..."
                          : "Choose your headlines"
                      }
                      options={headings.map((heading) => ({
                        label: heading,
                        value: heading,
                      }))}
                    />
                    <SuffixForSelect maxCount={15} data={headings} />
                  </Flex>
                  <Flex vertical gap={8}>
                    <Typography.Text>Descriptions</Typography.Text>
                    <Select
                      loading={areHeadingsDescriptionsLoading}
                      mode="tags"
                      maxCount={4}
                      disabled={areHeadingsDescriptionsLoading}
                      value={descriptions}
                      onChange={(values) => {
                        handleChangeDescriptions(values);
                      }}
                      suffixIcon={
                        areHeadingsDescriptionsLoading ? undefined : (
                          <CaretDown />
                        )
                      }
                      style={{ width: "100%" }}
                      placeholder={
                        areHeadingsDescriptionsLoading
                          ? "Getting your descriptions..."
                          : "Choose your descriptions"
                      }
                      options={descriptions.map((description) => ({
                        label: description,
                        value: description,
                      }))}
                    />
                    <SuffixForSelect maxCount={4} data={descriptions} />
                  </Flex>
                </Flex>
                <Flex flex={0.5} vertical gap={8}>
                  <Flex justify="space-between" align="flex-start">
                    <Typography.Title level={5}>Preview</Typography.Title>
                    <Tooltip
                      title={
                        shouldStartPreview ? "Pause Preview" : "Play Preview"
                      }
                    >
                      <Button
                        type="text"
                        size="middle"
                        onClick={() => {
                          setShouldStartPreview((prev) => !prev);
                        }}
                        icon={
                          !shouldStartPreview ? (
                            <PlayCircle size={"1.2rem"} fill="duotone" />
                          ) : (
                            <PauseCircle size={"1.2rem"} fill="duotone" />
                          )
                        }
                      />
                    </Tooltip>
                  </Flex>
                  <Card
                    style={{
                      width: "100%",
                      height: "max-content",
                      background: "var(--background)",
                    }}
                  >
                    <Flex vertical>
                      <Typography.Title level={5}>Sponsored</Typography.Title>
                      <Typography.Text>
                        <Globe /> {finalURLEntered}
                      </Typography.Text>

                      <Typography.Title
                        level={4}
                        style={{ color: "var(--primary-color)", margin: 0 }}
                      >
                        {previewHeadline}
                      </Typography.Title>
                      <Typography.Text>{previewDescription}</Typography.Text>
                    </Flex>
                  </Card>
                </Flex>
              </Flex>
            </Flex>
          </Card>
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
      <Flex
        justify="flex-end"
        style={{
          width: "75vw",
        }}
        gap={16}
      >
        <Button onClick={handleGoBack}>Go Back</Button>
        <Button type="primary" onClick={handleCreateCampaign}>
          Create Campaign
        </Button>
      </Flex>
    </Flex>
  );
}
