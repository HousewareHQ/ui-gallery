import { Card, Flex, Typography } from 'antd';
import {
  BaseMessage,
  CustomMessageComponentProp,
} from './chatScreen/ChatScreenPA';

export function UserMessage<T extends BaseMessage>({
  messages,
  index,
  customMessageComponent,
}: {
  messages: T[];
  index: number;
  customMessageComponent?: CustomMessageComponentProp<T>;
}) {
  const CustomComponent = customMessageComponent?.component;
  const renderCustomMessageComponent = ({
    messages,
    index,
  }: {
    messages: T[];
    index: number;
  }) =>
    CustomComponent ? (
      <CustomComponent messages={messages} index={index} />
    ) : null;

  return (
    <Flex style={{ width: '100%' }} justify="flex-end" gap={12}>
      <Flex
        vertical
        style={{
          minWidth: '30%',
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
          {CustomComponent ? (
            renderCustomMessageComponent({
              messages,
              index,
            })
          ) : (
            <Typography>{messages[index]?.content as string}</Typography>
          )}
        </Card>
      </Flex>
    </Flex>
  );
}
