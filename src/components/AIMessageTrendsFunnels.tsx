import { Button, Card, Flex, Image, Typography } from "antd";

import { ArrowClockwise, CheckCircle, Clipboard } from "@phosphor-icons/react";
import { useState } from "react";
import Markdown from "react-markdown";
import "../customStyles.css";
import { Funnels } from "./charts/Funnels";
import { Trends } from "./charts/Trends";
import { BaseMessage } from "./ChatScreenPA";

export function AIMessageTrendsFunnels<T extends BaseMessage>({
  index,
  messages,
  handleRegenerateResponse,
}: {
  index: number;
  messages: T[];
  handleRegenerateResponse: (
    userQuery: string,
    regenerateResponse?: boolean
  ) => void;
}) {
  const content = messages[index]?.content;
  const isLastMessage = messages?.length - 1 === index;
  const [isCopied, setIsCopied] = useState(false);

  const aiChatMessage = () => {
    const responseType = content?.query_response?.type;
    const data = content?.query_response?.data;
    const queryConfiguration = content?.query_configuration;

    switch (responseType) {
      case "text":
        return (
          <Typography>
            <Markdown>{data}</Markdown>
          </Typography>
        );
      case "trend":
        return (
          <Trends
            chartResponse={content.query_response}
            queryConfiguration={queryConfiguration}
          />
        );
      case "funnel":
        return (
          <Funnels
            chartResponse={content.query_response}
            queryConfiguration={queryConfiguration}
          />
        );
      default:
        return (
          <Typography>
            I am not sure how to respond to that, can you please try again?
          </Typography>
        );
    }
  };

  const handleCopyToClipboard = () => {
    let toBeSavedContent = "";

    const responseType = content?.query_response?.type;
    const data = content?.query_response?.data;

    if (responseType === "text") {
      toBeSavedContent = data;
    } else if (responseType === "trend" || responseType === "funnel") {
      toBeSavedContent = content?.query_response?.summary || "";
    } else {
      toBeSavedContent =
        "I am not sure how to respond to that, can you please try again?";
    }

    navigator.clipboard.writeText(toBeSavedContent);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Flex
      style={{ width: "90%" }}
      align="flex-start"
      gap={8}
      className="ai-message-wrapper"
    >
      <Image
        src="/ai-icon.svg"
        height={40}
        width={40}
        style={{
          height: "2rem",
          width: "2rem",
        }}
        preview={false}
      />

      <Flex
        vertical
        style={{
          width: "100%",
        }}
        gap={14}
      >
        {aiChatMessage()}

        {isLastMessage && (
          <Card
            className="ai-message-actions"
            size="small"
            style={{
              width: "max-content",
              backgroundColor: "var(--background)",
              alignSelf: "flex-end",
            }}
            styles={{
              body: {
                padding: 3,
              },
            }}
          >
            <Flex>
              <Button
                size="small"
                onClick={handleCopyToClipboard}
                type="text"
                icon={
                  isCopied ? (
                    <CheckCircle size={"0.7rem"} />
                  ) : (
                    <Clipboard size={"0.7rem"} />
                  )
                }
                style={{
                  fontSize: "0.7rem",
                  color: "var(--secondary-text)",
                }}
              >
                Copy
              </Button>
              <Button
                size="small"
                onClick={() => {
                  handleRegenerateResponse(
                    messages[messages.length - 2]?.content || ("" as string),
                    true
                  );
                }}
                type="text"
                icon={<ArrowClockwise size={"0.7rem"} />}
                style={{
                  fontSize: "0.7rem",
                  color: "var(--secondary-text)",
                }}
              >
                Retry
              </Button>
            </Flex>
          </Card>
        )}
      </Flex>
    </Flex>
  );
}
