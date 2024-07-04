import { LinkedinLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Button, Flex, Image, Typography } from "antd";
import * as React from "react";

export const HousewareBranding: React.FC = () => {
  return (
    <>
      <Flex
        align="center"
        gap={8}
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          cursor: "pointer",
        }}
        onClick={() => {
          window.open("https://houseware.io", "_blank");
        }}
      >
        <Image src="/app-logo.png" height={30} width={30} preview={false} />
        <Typography.Title
          style={{
            fontFamily: "Libre Franklin, sans-serif",
            fontSize: "1rem",
            margin: 0,
            fontWeight: 600,
          }}
          level={5}
        >
          houseware
        </Typography.Title>
      </Flex>
      <Flex
        vertical
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          zIndex: 1,
        }}
        gap={16}
      >
        <Button
          size="large"
          shape="circle"
          type="text"
          onClick={() => {
            window.open("https://x.com/gethouseware", "_blank");
          }}
          icon={
            <XLogo
              size={"1.5rem"}
              weight="duotone"
              color={"var(--secondary-text)"}
            />
          }
        />
        <Button
          size="large"
          shape="circle"
          type="text"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/company/gethouseware",
              "_blank"
            );
          }}
          icon={
            <LinkedinLogo
              size={"1.5rem"}
              weight="duotone"
              color={"var(--secondary-text)"}
            />
          }
        />
        <Button
          size="large"
          shape="circle"
          type="text"
          onClick={() => {
            window.open("https://www.youtube.com/@getHouseware", "_blank");
          }}
          icon={
            <YoutubeLogo
              size={"1.5rem"}
              weight="duotone"
              color={"var(--secondary-text)"}
            />
          }
        />
      </Flex>
    </>
  );
};
