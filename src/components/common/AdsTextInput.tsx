import {
  GlobeHemisphereWest,
  PaperPlaneTilt,
  Translate,
} from "@phosphor-icons/react";
import { Button, Card, Flex, Input, InputRef, Select, Typography } from "antd";
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
                placeholder={inputPlaceholder}
                onPressEnter={handleSendMessage}
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
