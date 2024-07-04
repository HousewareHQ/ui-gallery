import { Card, Flex, InputRef, Tag, Typography } from "antd";

import React, { useRef, useState } from "react";

import { ChatInput } from "./ChatInput";
import { SpotlightGrid } from "./SpotlightGrid";
import { useThemeManager } from "./useThemeManager";

export interface WelcomeScreenProps {
  // eslint-disable-next-line no-unused-vars
  handleSendMessage: (userQuery: string) => void;
  suggestions: string[];
  heading: string;
  subHeading: string;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  suggestions,
  handleSendMessage,
  heading,
  subHeading,
}: WelcomeScreenProps) => {
  const [userQuery, setUserQuery] = useState("");
  const { themeColors } = useThemeManager();
  const inputRef = useRef<InputRef | null>(null);

  return (
    <Flex
      justify="space-evenly"
      align="center"
      vertical
      style={{ height: "90vh" }}
    >
      <SpotlightGrid />
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
            left: "43%",
            width: "max-content",
            borderColor: themeColors["--primary-color"],
            backgroundColor: themeColors["--background"],
            color: themeColors["--primary-color"],
          }}
        >
          {" "}
          Getting Started
        </Tag>
        <Flex vertical align="center" gap={18}>
          <Typography.Title
            level={5}
            style={{
              marginTop: 0,
              fontFamily: "Sedan",
            }}
          >
            Suggested Questions
          </Typography.Title>
          <Flex
            gap={12}
            style={{
              width: "100%",
            }}
          >
            {suggestions.map((suggestion) => (
              <Card
                key={suggestion}
                style={{
                  width: "33%",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setUserQuery(suggestion);
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
                  type="secondary"
                  rootClassName="three-line-ellipsis"
                  style={{
                    textAlign: "center",
                  }}
                >
                  {" "}
                  {suggestion}
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
        handleSendMessage={() => {
          handleSendMessage(userQuery);
          setUserQuery("");
        }}
      />
    </Flex>
  );
};
