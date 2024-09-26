import {
  GlobeHemisphereWest,
  PaperPlaneTilt,
  Translate,
} from "@phosphor-icons/react";
import { Button, Flex, Select, Typography } from "antd";

import * as React from "react";
import { CustomTextArea } from "./CustomTextArea";

export interface SearchAdsCardBodyProps {
  handleSendMessage: (userQuery: string) => void;

  inputPlaceholder?: string;
  countries: Array<{ value: string; label: string }>;
  handleChangeCountry: (country: string) => void;
  handleChangeLanguage: (language: string) => void;
  countrySelected: string;
  languageSelected: string;
  languages: Array<{ value: string; label: string }>;
}

export const SearchAdsCardBody: React.FC<SearchAdsCardBodyProps> = ({
  handleSendMessage,
  inputPlaceholder = "Describe your product campaign here...",
  countries = [],
  languages = [],
  handleChangeCountry,
  handleChangeLanguage,
  countrySelected,
  languageSelected,
}: SearchAdsCardBodyProps) => {
  const [userQuery, setUserQuery] = React.useState("");

  const isButtonDisabled = userQuery.trim().length === 0;

  return (
    <Flex vertical style={{ width: "100%" }} gap={16}>
      <CustomTextArea
        label="I want to run my campaign for"
        inputPlaceholder={inputPlaceholder}
        userQuery={userQuery}
        setUserQuery={setUserQuery}
        handlePressEnter={() => {
          if (!isButtonDisabled) {
            handleSendMessage(userQuery);
            setUserQuery("");
          }
        }}
      />
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
          onClick={() => {
            handleSendMessage(userQuery);
            setUserQuery("");
          }}
          icon={<PaperPlaneTilt weight="bold" />}
        >
          Search
        </Button>
      </Flex>
    </Flex>
  );
};
