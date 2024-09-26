import { PaperPlaneTilt } from "@phosphor-icons/react";
import { Button, Card, Flex, InputRef } from "antd";
import * as React from "react";
import { KeyboardEvent, LegacyRef } from "react";
import { CustomTextArea } from "./CustomTextArea";

export interface ChatInputProps {
  inputRef?: LegacyRef<InputRef> | null;
  placeholder?: string;
  userQuery: string;
  setUserQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
  isFollowupDisabled?: boolean;
  width?: string | number;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  inputRef,
  placeholder = "Ask me anything about your product data",
  userQuery,
  setUserQuery,
  handleSendMessage,
  width = "60vw",

  isFollowupDisabled = false,
}: ChatInputProps) => {
  const isButtonDisabled = userQuery.trim().length === 0 || isFollowupDisabled;

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.stopPropagation();
      e.preventDefault();
      if (!isButtonDisabled) {
        handleSendMessage();
      }
    }
  };

  return (
    <Flex
      vertical
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        width: width,
        zIndex: 2,
      }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, transparent 23%, var(--background) 97%)`,
          height: "6vh",
        }}
      />
      <Card
        size="small"
        bordered
        style={{
          width: "100%",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        styles={{
          body: {
            padding: 16,
          },
        }}
      >
        <Flex vertical gap={16}>
          <Flex align="flex-start" gap={12}>
            <CustomTextArea
              inputRef={inputRef}
              userQuery={userQuery}
              setUserQuery={setUserQuery}
              autoSize={{ minRows: 1, maxRows: 8 }}
              size="large"
              variant="borderless"
              inputPlaceholder={placeholder}
              onKeyDown={handleKeyDown}
              handlePressEnter={handleSendMessage}
            />

            <Button
              disabled={isButtonDisabled}
              size="large"
              type="primary"
              shape="circle"
              onClick={handleSendMessage}
              icon={<PaperPlaneTilt weight="bold" />}
            />
          </Flex>
          {/* <Flex align="flex-end" justify="flex-end">
            <Typography.Text
              type="secondary"
              style={{
                fontWeight: 500,
                fontSize: "0.75rem",

                visibility: userQuery.trim().length > 0 ? "visible" : "hidden",
              }}
            >
              Use{" "}
              <Typography.Text
                type="secondary"
                style={{
                  backgroundColor: "var(--background)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  padding: "3px 6px",
                  borderRadius: 4,
                }}
              >
                shift + enter
              </Typography.Text>{" "}
              for new line
            </Typography.Text>
          </Flex> */}
        </Flex>
      </Card>
    </Flex>
  );
};
