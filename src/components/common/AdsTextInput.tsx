import {
  GlobeHemisphereWest,
  PaperPlaneTilt,
  Translate,
} from "@phosphor-icons/react";
import { Button, Card, Flex, InputRef, Select, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";

import * as React from "react";
import { LegacyRef } from "react";

export interface AdsTextInputProps {
  inputRef?: LegacyRef<InputRef> | null;

  userQuery: string;
  setUserQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
  isFollowupDisabled?: boolean;
  inputPlaceholder?: string;
  countries: Array<{ value: string; label: string }>;
  handleChangeCountry: (country: string) => void;
  handleChangeLanguage: (language: string) => void;
  countrySelected: string;
  languageSelected: string;
  languages: Array<{ value: string; label: string }>;
}

export const AdsTextInput: React.FC<AdsTextInputProps> = ({
  inputRef,
  userQuery,
  setUserQuery,
  handleSendMessage,
  inputPlaceholder = "Describe your product campaign here...",

  isFollowupDisabled = false,
  countries = [],
  languages = [],
  handleChangeCountry,
  handleChangeLanguage,
  countrySelected,
  languageSelected,
}: AdsTextInputProps) => {
  const isButtonDisabled = userQuery.trim().length === 0 || isFollowupDisabled;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
        width: "50vw",
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
          <Flex vertical style={{ width: "100%" }} gap={16}>
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
              <TextArea
                style={{ width: "100%" }}
                ref={inputRef}
                onChange={(e) => setUserQuery(e.target.value)}
                value={userQuery}
                autoSize={{ minRows: 1, maxRows: 8 }}
                size="large"
                variant="outlined"
                placeholder={inputPlaceholder}
                onKeyDown={handleKeyDown}
              />
              <Flex align="flex-end" justify="flex-end">
                <Typography.Text
                  type="secondary"
                  style={{
                    fontWeight: 500,
                    fontSize: "0.6rem",

                    visibility:
                      userQuery.trim().length > 0 ? "visible" : "hidden",
                  }}
                >
                  Use{" "}
                  <Typography.Text
                    type="secondary"
                    style={{
                      backgroundColor: "var(--background)",
                      fontWeight: 500,
                      fontSize: "0.6rem",
                      padding: "3px 6px",
                      borderRadius: 4,
                    }}
                  >
                    shift + enter
                  </Typography.Text>{" "}
                  for new line
                </Typography.Text>
              </Flex>
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

                <Select
                  size="small"
                  variant="borderless"
                  suffixIcon={<GlobeHemisphereWest />}
                  value={countrySelected}
                  onChange={handleChangeCountry}
                  options={countries}
                  popupMatchSelectWidth={false}
                  showSearch
                />
                <Typography.Text
                  type="secondary"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  speaking
                </Typography.Text>
                <Select
                  size="small"
                  variant="borderless"
                  suffixIcon={<Translate />}
                  value={languageSelected}
                  onChange={handleChangeLanguage}
                  options={languages}
                  popupMatchSelectWidth={false}
                  showSearch
                />
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
