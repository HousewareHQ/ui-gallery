import { Card, Flex, Typography } from "antd";
import { BaseMessage } from "./ChatScreenPA";

export function UserMessage<T extends BaseMessage>({
  message,
}: {
  message: T;
}) {
  return (
    <Flex style={{ width: "100%" }} justify="flex-end" gap={12}>
      <Flex
        vertical
        style={{
          minWidth: "30%",
        }}
        gap={2}
        align="flex-end"
      >
        <Card
          size="small"
          style={{
            borderTopRightRadius: 0,
          }}
        >
          <Typography>{message?.content as string}</Typography>
        </Card>
      </Flex>
    </Flex>
  );
}
