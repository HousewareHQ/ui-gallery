import { Card, Flex, InputRef, Tag, Typography } from "antd";

import React, { useRef, useState } from "react";

import { ChatInput } from "../common/ChatInput";
import { useThemeManager } from "../useThemeManager";
import { SpotlightGrid } from "./SpotlightGrid";

export interface WelcomeScreenConversationsProps {
  // eslint-disable-next-line no-unused-vars
  handleSendMessage: (userQuery: string) => void;
  suggestions: Array<{
    title: string;
    content: string;
  }>;
  heading: string;
  subHeading: string;
  showSpotlightGrid?: boolean;
  inputPlaceholder?: string;
}

export const WelcomeScreenConversations: React.FC<
  WelcomeScreenConversationsProps
> = ({
  suggestions,
  handleSendMessage,
  heading,
  subHeading,
  showSpotlightGrid = true,
  inputPlaceholder,
}: WelcomeScreenConversationsProps) => {
  const [userQuery, setUserQuery] = useState("");
  const { themeColors } = useThemeManager();
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Flex
      justify="space-evenly"
      align="center"
      vertical
      style={{ height: "90%" }}
    >
      {showSpotlightGrid && <SpotlightGrid />}
      <Flex
        vertical
        align="center"
        gap={12}
        style={{
          zIndex: 1,
        }}
      >
        <Typography.Title
          level={2}
          style={{
            width: "30vw",
            textAlign: "center",
            fontFamily: "Sedan",
          }}
        >
          {heading}
        </Typography.Title>
        <Typography.Text
          style={{
            width: "40vw",
            textAlign: "center",
          }}
        >
          {subHeading}
        </Typography.Text>
      </Flex>
      <Card
        style={{
          position: "relative",
          maxWidth: "40vw",
        }}
      >
        <Tag
          style={{
            position: "absolute",
            top: "-0.7rem",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            width: "max-content",
            borderColor: themeColors["--primary-color"],
            backgroundColor: themeColors["--background"],
            color: themeColors["--primary-color"],
          }}
        >
          Suggestions
        </Tag>
        <Flex vertical align="center" gap={18}>
          <Typography.Text
            style={{
              marginTop: 0,
            }}
            type="secondary"
          >
            Get started with an example below
          </Typography.Text>
          <Flex
            gap={12}
            style={{
              width: "100%",
            }}
          >
            {suggestions.map((suggestion) => (
              <Card
                key={suggestion.title}
                style={{
                  width: `calc(100% / ${suggestions.length})`,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setUserQuery(suggestion.content);
                  inputRef?.current?.focus();
                }}
                rootClassName="hoverable-card"
                styles={{
                  body: {
                    padding: 12,
                  },
                }}
              >
                <Typography.Text
                  // type="secondary"
                  rootClassName="three-line-ellipsis"
                  style={{
                    textAlign: "center",
                  }}
                >
                  {" "}
                  {suggestion.title}
                </Typography.Text>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Card>
      <ChatInput
        inputRef={inputRef}
        userQuery={userQuery}
        setUserQuery={setUserQuery}
        placeholder={inputPlaceholder}
        handleSendMessage={() => {
          handleSendMessage(userQuery);
          setUserQuery("");
        }}
      />
    </Flex>
  );
};
