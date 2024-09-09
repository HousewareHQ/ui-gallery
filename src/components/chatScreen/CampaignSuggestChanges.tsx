import { Button, Card, Flex, Typography } from "antd";
import { useState } from "react";
import Markdown from "react-markdown";
import { ChatInput } from "../common/ChatInput";

export interface CampaignSuggestChangesProps {
  campaignName: string;
  suggestions?: string;
  countrySelected: string;
  languageSelected: string;

  handleSuggestChanges: (userQuery: string) => void;
  inputPlaceholder?: string;
  handleGoBack: () => void;
  handleCreateCampaign: () => void;
  channelType: string;
  deliveryMethod: string;
  budget: string;
}

export function CampaignSuggestChangesScreen({
  campaignName,
  channelType,

  suggestions,
  countrySelected,
  languageSelected,

  deliveryMethod,
  budget,
  handleSuggestChanges,
  inputPlaceholder = "Type your message here",
  handleGoBack,
  handleCreateCampaign,
}: CampaignSuggestChangesProps) {
  const [userQuery, setUserQuery] = useState("");
  return (
    <Flex
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        padding: 16,
      }}
      justify="flex-start"
      vertical
      align="center"
      gap={24}
    >
      <Typography.Title level={3} style={{ fontFamily: "Sedan" }}>
        Review Campaign
      </Typography.Title>

      <Flex
        vertical
        style={{
          width: "70vw",
          padding: "1vh 16px 20%",
          overflowY: "auto",
        }}
        gap={24}
      >
        {/* <Card>
          <Flex vertical gap={24}>
            <Flex justify="space-between" align="center">
              <Flex align="center" gap={12}>
                <Typography.Title
                  level={4}
                  style={{
                    margin: 0,
                  }}
                >
                  {campaignName}
                </Typography.Title>
                <Tag color="blue">Draft</Tag>
              </Flex>
              <Typography.Text
                type="secondary"
                style={{
                  fontSize: "0.7rem",
                }}
              >
                {new Date().toString()}
              </Typography.Text>
            </Flex>
            <Flex gap={4} wrap>
              {keywordsSelected.map((keyword) => (
                <Tag key={keyword}>{keyword}</Tag>
              ))}
            </Flex>
            <Descriptions
              items={[
                { label: "Country", children: countrySelected },
                { label: "Language", children: languageSelected },
              ]}
            />
          </Flex>
        </Card> */}

        <Typography.Title level={4}>Campaign Details</Typography.Title>

        <Card size="small">
          <Flex gap={24} align="center">
            <Typography.Title
              level={5}
              style={{
                margin: 0,
                width: "20rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              Advertising Channel Type
            </Typography.Title>

            <Typography.Text strong>{channelType}</Typography.Text>
          </Flex>
        </Card>
        <Card size="small">
          <Flex gap={24} align="center">
            <Typography.Title
              level={5}
              style={{
                margin: 0,
                width: "20rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              Campaign Name
            </Typography.Title>

            <Typography.Text strong>{campaignName}</Typography.Text>
          </Flex>
        </Card>
        <Card size="small">
          <Flex gap={24} align="center">
            <Typography.Title
              level={5}
              style={{
                margin: 0,
                width: "20rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              Delivery Method
            </Typography.Title>

            <Typography.Text strong>{deliveryMethod}</Typography.Text>
          </Flex>
        </Card>

        <Card size="small">
          <Flex gap={24} align="center">
            <Typography.Title
              level={5}
              style={{
                margin: 0,
                width: "20rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              Campaign Budget Amount
            </Typography.Title>

            <Typography.Text strong>{budget}</Typography.Text>
          </Flex>
        </Card>
        <Card size="small">
          <Flex gap={24} align="center">
            <Typography.Title
              level={5}
              style={{
                margin: 0,
                width: "20rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              Location Target
            </Typography.Title>

            <Typography.Text strong>{countrySelected}</Typography.Text>
          </Flex>
        </Card>
        <Card size="small">
          <Flex gap={24} align="center">
            <Typography.Title
              level={5}
              style={{
                margin: 0,
                width: "20rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              Language
            </Typography.Title>

            <Typography.Text strong>{languageSelected}</Typography.Text>
          </Flex>
        </Card>

        {suggestions && (
          <>
            <Typography.Title level={5}>
              {" "}
              Suggestions on your campaign -
            </Typography.Title>
            <Markdown>{suggestions}</Markdown>
          </>
        )}

        <Flex
          justify="flex-end"
          style={{
            width: "100%",
          }}
          gap={16}
        >
          <Button onClick={handleGoBack}>Review your Ad groups</Button>
          <Button type="primary" onClick={handleCreateCampaign}>
            Create Campaign
          </Button>
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
