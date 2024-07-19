import { CheckFat } from "@phosphor-icons/react";
import { Button, Card, Descriptions, Flex, Tag, Typography } from "antd";
import { useState } from "react";
import Markdown from "react-markdown";
import { ChatInput } from "../common/ChatInput";

export interface CampaignSuggestChangesProps {
  campaignName: string;
  suggestions: string;
  countrySelected: string;
  languageSelected: string;
  keywordsSelected: string[];
  handleSuggestChanges: (userQuery: string) => void;
  inputPlaceholder?: string;
}

export function CampaignSuggestChangesScreen({
  campaignName,
  suggestions,
  countrySelected,
  languageSelected,
  keywordsSelected,
  handleSuggestChanges,
  inputPlaceholder = "Type your message here",
}: CampaignSuggestChangesProps) {
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
      <Typography.Title level={3} style={{ fontFamily: "Sedan" }}>
        Your campaign is created! <CheckFat color={"var(--primary-color)"} />
      </Typography.Title>

      <Flex
        vertical
        style={{
          width: "70vw",
          padding: "1vh 16px 20vh",
          overflowY: "auto",
        }}
        gap={24}
      >
        <Card>
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
        </Card>

        <Typography.Title level={5}>
          {" "}
          Suggestions on your campaign -
        </Typography.Title>
        <Markdown>{suggestions}</Markdown>

        <Flex>
          <Button type="primary">Launch Campaign</Button>
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
