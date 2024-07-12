import {
  GlobeHemisphereWest,
  PaperPlaneTilt,
  Translate,
} from "@phosphor-icons/react";
import { Button, Card, Flex, Input, InputRef, Typography } from "antd";
import * as React from "react";
import { LegacyRef } from "react";

export interface AdsTextInputProps {
  inputRef?: LegacyRef<InputRef> | null;
  placeholder?: string;
  userQuery: string;
  setUserQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
  isFollowupDisabled?: boolean;
}

export const AdsTextInput: React.FC<AdsTextInputProps> = ({
  inputRef,
  placeholder = "Keywords related to your products separated by commas...",
  userQuery,
  setUserQuery,
  handleSendMessage,

  isFollowupDisabled = false,
}: AdsTextInputProps) => {
  const isButtonDisabled = userQuery.trim().length === 0 || isFollowupDisabled;

  return (
    <Flex
      vertical
      style={{
        width: "40vw",
      }}
    >
      <Card
        size="small"
        bordered
        style={{
          width: "100%",
        }}
        styles={{
          body: {
            padding: 16,
          },
        }}
      >
        <Flex justify="space-between" gap={12}>
          <Flex vertical style={{ width: "100%" }} gap={24}>
            <Flex
              vertical
              gap={4}
              style={{
                width: "100%",
              }}
            >
              <Typography.Text
                type="secondary"
                style={{
                  fontSize: "0.8rem",
                }}
              >
                I want to run my campaign for
              </Typography.Text>
              <Input
                style={{ width: "100%" }}
                ref={inputRef}
                onChange={(e) => setUserQuery(e.target.value)}
                value={userQuery}
                size="large"
                variant="outlined"
                placeholder={placeholder}
              />
            </Flex>
            <Flex align="center" justify="space-between">
              <Flex gap={4} align="center">
                <Typography.Text
                  type="secondary"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  Targetting users in
                </Typography.Text>
                <Button
                  type="text"
                  style={{
                    fontSize: "0.8rem",
                  }}
                  size="small"
                  icon={<GlobeHemisphereWest />}
                >
                  India
                </Button>
                <Typography.Text
                  type="secondary"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  speaking
                </Typography.Text>
                <Button
                  type="text"
                  style={{
                    fontSize: "0.8rem",
                  }}
                  size="small"
                  icon={<Translate />}
                >
                  English
                </Button>
              </Flex>
              <Button
                disabled={isButtonDisabled}
                size="middle"
                type="primary"
                onClick={handleSendMessage}
                icon={<PaperPlaneTilt weight="bold" />}
              >
                Search
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
