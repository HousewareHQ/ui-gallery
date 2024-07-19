import {
  CaretDown,
  Globe,
  PauseCircle,
  PlayCircle,
} from "@phosphor-icons/react";
import {
  Button,
  Card,
  Divider,
  Flex,
  Input,
  Progress,
  Select,
  Space,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import { useCallback, useEffect, useState } from "react";

export type AdGroup = {
  headlines: string[];
  descriptions: string[];
  adStrength: number;
  url: string;
  sub_urls: [string, string];
  negative_keywords: string[];
  keywords: string[];
  name: string;
};

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

export default function AdGroupWrapper({
  adGroup,
  handleUpdateAdGroup,
  areHeadingsDescriptionsLoading,
}: {
  adGroup: AdGroup;
  handleUpdateAdGroup: (updatedAdGroup: AdGroup) => void;
  areHeadingsDescriptionsLoading: boolean;
}) {
  const [previewHeadline, setPreviewHeadline] = useState(
    adGroup?.headlines[0] || "Headline"
  );
  const [previewDescription, setPreviewDescription] = useState(
    adGroup?.descriptions[0] || "Description"
  );

  const [shouldStartPreview, setShouldStartPreview] = useState(false);

  const handleRandomizePreview = useCallback(() => {
    const randomHeading =
      adGroup?.headlines[Math.floor(Math.random() * adGroup?.headlines.length)];
    const randomDescription =
      adGroup?.descriptions[
        Math.floor(Math.random() * adGroup?.descriptions.length)
      ];
    setPreviewHeadline(randomHeading);
    setPreviewDescription(randomDescription);
  }, [adGroup?.headlines, adGroup?.descriptions]);

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
          <Typography.Title level={5}>{adGroup?.name}</Typography.Title>
          <Flex gap={8}>
            <Progress type="circle" percent={adGroup.adStrength} size={20} />
            <Typography.Text>Ad Strength</Typography.Text>
          </Flex>
        </Flex>
        <Flex wrap gap={4}>
          {adGroup.keywords.map((keyword) => (
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
                value={adGroup?.url}
                onChange={(e) => {
                  handleUpdateAdGroup({
                    ...adGroup,
                    url: e.target.value,
                  });
                }}
                style={{
                  width: "100%",
                }}
              />
            </Flex>
            <Flex vertical gap={8}>
              <Typography.Text>Display Link</Typography.Text>
              <Flex vertical gap={2}>
                <Typography.Text type="secondary">
                  {adGroup?.url}
                </Typography.Text>
                <Space
                  style={{
                    width: "100%",
                  }}
                >
                  /
                  <Input
                    value={adGroup?.sub_urls[0]}
                    onChange={(e) => {
                      handleUpdateAdGroup({
                        ...adGroup,
                        sub_urls: [e.target.value, adGroup?.sub_urls[1]],
                      });
                    }}
                  />
                  /
                  <Input
                    value={adGroup?.sub_urls[1]}
                    onChange={(e) => {
                      handleUpdateAdGroup({
                        ...adGroup,
                        sub_urls: [adGroup?.sub_urls[0], e.target.value],
                      });
                    }}
                  />
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
                value={adGroup?.headlines}
                onChange={(values) => {
                  handleUpdateAdGroup({
                    ...adGroup,
                    headlines: values,
                  });
                }}
                suffixIcon={
                  areHeadingsDescriptionsLoading ? undefined : <CaretDown />
                }
                placeholder={
                  areHeadingsDescriptionsLoading
                    ? "Getting your headings..."
                    : "Choose your headlines"
                }
                options={adGroup?.headlines.map((headline) => ({
                  label: headline,
                  value: headline,
                }))}
              />
              <SuffixForSelect maxCount={15} data={adGroup?.headlines} />
            </Flex>
            <Flex vertical gap={8}>
              <Typography.Text>Descriptions</Typography.Text>
              <Select
                loading={areHeadingsDescriptionsLoading}
                mode="tags"
                maxCount={4}
                disabled={areHeadingsDescriptionsLoading}
                value={adGroup?.descriptions}
                onChange={(values) => {
                  handleUpdateAdGroup({
                    ...adGroup,
                    descriptions: values,
                  });
                }}
                suffixIcon={
                  areHeadingsDescriptionsLoading ? undefined : <CaretDown />
                }
                style={{ width: "100%" }}
                placeholder={
                  areHeadingsDescriptionsLoading
                    ? "Getting your descriptions..."
                    : "Choose your descriptions"
                }
                options={adGroup?.descriptions.map((description) => ({
                  label: description,
                  value: description,
                }))}
              />
              <SuffixForSelect maxCount={4} data={adGroup?.descriptions} />
            </Flex>
          </Flex>
          <Flex flex={0.5} vertical gap={8}>
            <Flex justify="space-between" align="flex-start">
              <Typography.Title level={5}>Preview</Typography.Title>
              <Tooltip
                title={shouldStartPreview ? "Pause Preview" : "Play Preview"}
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
                  <Globe /> {adGroup?.url}
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
  );
}
