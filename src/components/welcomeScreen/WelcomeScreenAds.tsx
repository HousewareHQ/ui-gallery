/* eslint-disable no-unused-vars */
import { Flex, InputRef, Typography } from "antd";

import React, { useRef, useState } from "react";

import { AdsTextInput } from "../common/AdsTextInput";
import { SpotlightGrid } from "./SpotlightGrid";

export interface WelcomeScreenAdsProps {
  // eslint-disable-next-line no-unused-vars
  handleSendMessage: (userQuery: string) => void;
  heading: string;
  subHeading: string;
  inputPlaceholder?: string;
  countries: Array<{ value: string; label: string }>;
  handleChangeCountry: (country: string) => void;
  handleChangeLanguage: (language: string) => void;
  countrySelected: string;
  languageSelected: string;
  languages: Array<{ value: string; label: string }>;
}

export const WelcomeScreenAds: React.FC<WelcomeScreenAdsProps> = ({
  handleSendMessage,
  heading,
  subHeading,
  inputPlaceholder,
  countries = [],
  languages = [],
  handleChangeCountry,
  handleChangeLanguage,
  countrySelected,
  languageSelected,
}: WelcomeScreenAdsProps) => {
  const [userQuery, setUserQuery] = useState("");

  const inputRef = useRef<InputRef | null>(null);

  return (
    <Flex
      justify="space-evenly"
      align="center"
      vertical
      style={{ height: "100vh" }}
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

      <AdsTextInput
        inputRef={inputRef}
        userQuery={userQuery}
        setUserQuery={setUserQuery}
        handleSendMessage={() => {
          handleSendMessage(userQuery);
          setUserQuery("");
        }}
        inputPlaceholder={inputPlaceholder}
        countries={countries}
        languages={languages}
        countrySelected={countrySelected}
        languageSelected={languageSelected}
        handleChangeCountry={handleChangeCountry}
        handleChangeLanguage={handleChangeLanguage}
      />
    </Flex>
  );
};
