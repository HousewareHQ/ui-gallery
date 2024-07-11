import { Button, Card, Flex, Image, Popconfirm } from 'antd';
import { ReactNode, useEffect, useRef, useState } from 'react';
import AILoader from './AILoader';
import { AIMessageTrendsFunnels } from './AIMessageTrendsFunnels';
import { ChatInput } from './ChatInput';
import { UserMessage } from './UserMessage';
import MessageActionCard from './MessageActionCard';

export interface BaseMessage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  type: 'ai' | 'human';
}
export interface CustomMessageComponentProp<T> {
  type: 'ai' | 'human';
  component: ({
    index,
    message,
    handleSendFollowupMessage,
  }: {
    message: T;
    index?: number;
    handleSendFollowupMessage?: (
      userQuery: string,
      regenerateResponse?: boolean,
    ) => void;
  }) => ReactNode;
}

export interface ChatScreenPAProps<T> {
  messages: T[];

  handleSendFollowupMessage: (
    // eslint-disable-next-line no-unused-vars
    userQuery: string,
    // eslint-disable-next-line no-unused-vars
    regenerateResponse?: boolean,
  ) => void;
  isMessageLoading: boolean;
  setMessages: React.Dispatch<React.SetStateAction<T[]>>;
  showMessageActionCard?: boolean;
  hideActionCardItems?: ('copy' | 'regenerate')[];
  customMessageComponent?: CustomMessageComponentProp<T>;
  customMessageActionCardItem?: ReactNode[];
}

export function ChatScreenPA<T extends BaseMessage>({
  messages,
  handleSendFollowupMessage,
  isMessageLoading,
  setMessages,
  showMessageActionCard = true,
  hideActionCardItems = [],
  customMessageComponent,
  customMessageActionCardItem,
}: ChatScreenPAProps<T>) {
  const [userQuery, setUserQuery] = useState('');
  const chatsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = chatsContainerRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  const shouldShowLoader =
    (messages.length > 1 && isMessageLoading) || messages.length === 1;

  const renderCustomMessageComponent = (message: T, index: number) => {
    const isLastMessage = messages?.length - 1 === index;
    const shouldShowActionCardItems = isLastMessage && showMessageActionCard;

    if (customMessageComponent) {
      const CustomComponent = customMessageComponent.component;
      if (customMessageComponent.type === 'ai') {
        return (
          <Flex
            style={{ width: '90%' }}
            align="flex-start"
            gap={8}
            className="ai-message-wrapper"
          >
            <Image
              src="/ai-icon.svg"
              height={40}
              width={40}
              style={{
                height: '2rem',
                width: '2rem',
              }}
              preview={false}
            />

            <Flex
              vertical
              style={{
                width: '100%',
              }}
              gap={14}
            >
              <CustomComponent
                message={message}
                index={index}
                handleSendFollowupMessage={handleSendFollowupMessage}
              />
              {shouldShowActionCardItems && (
                <MessageActionCard<T>
                  key={index}
                  index={index}
                  messages={messages}
                  hideActionCardItems={hideActionCardItems}
                  customMessageActionCardItem={customMessageActionCardItem}
                  handleRegenerateResponse={handleSendFollowupMessage}
                />
              )}
            </Flex>
          </Flex>
        );
      } else {
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
                <CustomComponent message={message} index={index} />
              </Card>
            </Flex>
          </Flex>
        );
      }
    }
    return null;
  };

  return (
    <Flex
      style={{
        height: '100vh',
        width: '100vw',
        padding: 16,
        overflow: 'hidden',
      }}
      vertical
      align="center"
      justify="flex-start"
    >
      <Popconfirm
        title="You'll lose your current chat history."
        description="Are you sure you want to start a new chat?"
        placement="bottomLeft"
        okText="Yes"
        cancelText="No"
        onConfirm={() => {
          setMessages([]);
        }}
      >
        <Button
          type="primary"
          style={{
            position: 'absolute',
            top: 16,
            right: 32,
          }}
        >
          Start new chat
        </Button>
      </Popconfirm>
      <Flex
        ref={chatsContainerRef}
        vertical
        style={{
          width: '58vw',
          height: '86vh',
          overflowY: 'scroll',
          overflowX: 'hidden',
          padding: '0 24px 10vh',
          marginTop: '4vh',
          position: 'relative',
        }}
        align="flex-start"
        rootClassName="chat-container"
        gap={48}
      >
        {messages.filter(Boolean).map((message, index) => {
          if (message.type === 'ai') {
            return customMessageComponent?.type === 'ai' ? (
              renderCustomMessageComponent(message, index)
            ) : (
              <AIMessageTrendsFunnels<T>
                key={index}
                index={index}
                messages={messages}
                hideActionCardItems={hideActionCardItems}
                showMessageActionCard={showMessageActionCard}
                handleRegenerateResponse={handleSendFollowupMessage}
              />
            );
          } else if (message.type === 'human') {
            return customMessageComponent?.type === 'human' ? (
              renderCustomMessageComponent(message, index)
            ) : (
              <UserMessage<T> key={index} message={message} />
            );
          }
          return null;
        })}
        {shouldShowLoader && <AILoader />}
      </Flex>

      <ChatInput
        inputRef={null}
        userQuery={userQuery}
        setUserQuery={setUserQuery}
        handleSendMessage={() => {
          handleSendFollowupMessage(userQuery);
          setUserQuery('');
        }}
        placeholder="Follow up with your question here..."
        isFollowupDisabled={shouldShowLoader}
      />
    </Flex>
  );
}
