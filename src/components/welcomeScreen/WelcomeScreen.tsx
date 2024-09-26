/* eslint-disable no-unused-vars */
import { Card, Flex, Typography } from "antd";

import React from "react";

import { SpotlightGrid } from "./SpotlightGrid";

export interface WelcomeScreenProps {
  // eslint-disable-next-line no-unused-vars
  heading: string;
  subHeading: string;
  showSpotlightGrid?: boolean;
  customCardBody?: React.ReactNode;
  cardWidth?: string;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  heading,
  subHeading,

  showSpotlightGrid = false,
  customCardBody,
  cardWidth = "50vw",
}: WelcomeScreenProps) => {
  return (
    <Flex
      justify="space-evenly"
      align="center"
      vertical
      style={{ height: "100%" }}
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
      <Flex
        vertical
        style={{
          width: cardWidth,
        }}
      >
        {customCardBody && (
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
            {
              customCardBody
              // <SearchAdsCardBody
              //   handleSendMessage={handleSendMessage}
              //   inputPlaceholder={inputPlaceholder}
              //   countries={countries}
              //   languages={languages}
              //   countrySelected={countrySelected}
              //   languageSelected={languageSelected}
              //   handleChangeCountry={handleChangeCountry}
              //   handleChangeLanguage={handleChangeLanguage}
              // />
            }
          </Card>
        )}
      </Flex>
    </Flex>
  );
};
