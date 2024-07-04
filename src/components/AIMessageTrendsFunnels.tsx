import { Flex, Image, Typography } from "antd";

import { Funnels } from "./charts/Funnels";
import { Trends } from "./charts/Trends";
import { BaseMessage } from "./ChatScreenPA";

export function AIMessageTrendsFunnels<T extends BaseMessage>({
  index,
  messages,
}: {
  index: number;
  messages: T[];
}) {
  const content = messages[index]?.content;
  // const isLastMessage = messages?.length - 1 === index;

  const aiChatMessage = () => {
    const responseType = content?.query_response?.type;
    const data = content?.query_response?.data;
    const queryConfiguration = content?.query_configuration;

    switch (responseType) {
      case "text":
        return data;
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
        return "I am not sure how to respond to that, can you please click the regenerate button and try again?";
    }
  };

  return (
    <Flex style={{ width: "90%" }} align="flex-start" gap={8}>
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
          maxWidth: "100%",
        }}
        gap={2}
        align="flex-end"
      >
        <Flex
          style={{
            borderTopLeftRadius: 0,
          }}
        >
          <Typography>{aiChatMessage()}</Typography>
        </Flex>
        {/* {isLastMessage && (
          <Tooltip title="Regenerate" placement="bottom">
            <Button
              onClick={() => {
                handleRegenerateResponse({
                  customMessage: messages.slice(0, messages.length - 1),
                  customUserQuery: messages[messages.length - 2]?.content,
                });
              }}
              type="text"
              icon={<ArrowsClockwise size={16} />}
            />
          </Tooltip>
        )} */}
      </Flex>
    </Flex>
  );
}
