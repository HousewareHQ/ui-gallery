import { CaretDown, Globe } from "@phosphor-icons/react";
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
  Tag,
  Typography,
} from "antd";
import { useState } from "react";

export interface ChatScreenAdsPreviewProps {
  handleGoBack: () => void;
  handleStartFresh: () => void;

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
  headings: string[];
  descriptions: string[];
  finalURL: string;
  displayLink: [string, string];
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
}: ChatScreenAdsPreviewProps) {
  const [headingsSelected, setHeadingsSelected] = useState<string[]>(headings);
  const [descriptionsSelected, setDescriptionsSelected] =
    useState<string[]>(descriptions);

  const previewHeadline = headingsSelected[0] || "Headline";
  const previewDescription = descriptionsSelected[0] || "Description";
  const [finalURLEntered, setFinalURLEntered] = useState(finalURL);

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
    >
      <Flex
        style={{
          width: "75vw",

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
                  <Progress type="circle" percent={75} size={20} />
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
                      mode="tags"
                      maxCount={15}
                      style={{ width: "100%" }}
                      value={headingsSelected}
                      onChange={setHeadingsSelected}
                      suffixIcon={<CaretDown />}
                      placeholder="Choose your headlines"
                      options={headings.map((heading) => ({
                        label: heading,
                        value: heading,
                      }))}
                    />
                    <SuffixForSelect maxCount={15} data={headingsSelected} />
                  </Flex>
                  <Flex vertical gap={8}>
                    <Typography.Text>Descriptions</Typography.Text>
                    <Select
                      mode="tags"
                      maxCount={4}
                      value={descriptionsSelected}
                      onChange={setDescriptionsSelected}
                      suffixIcon={<CaretDown />}
                      style={{ width: "100%" }}
                      placeholder="Choose your descriptions"
                      options={descriptions.map((description) => ({
                        label: description,
                        value: description,
                      }))}
                    />
                    <SuffixForSelect maxCount={4} data={descriptionsSelected} />
                  </Flex>
                </Flex>
                <Flex flex={0.5} vertical>
                  <Typography.Title level={5}>Preview</Typography.Title>
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
                        <Globe /> {finalURL}
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
          justify="flex-end"
          style={{
            width: "100%",
          }}
        >
          <Button type="primary">Create Campaign</Button>
        </Flex>
        <Flex
          style={{
            position: "absolute",
            top: 16,
            right: 32,
          }}
          gap={12}
        >
          <Button onClick={handleGoBack}>Go Back</Button>
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
    </Flex>
  );
}
