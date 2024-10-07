import { Button, Flex, Popconfirm } from "antd";
import { ReactNode, useEffect, useRef, useState } from "react";
import AILoader from "../AILoader";
import { AIMessageComponents } from "../AIMessageComponents";
import { ChatInput } from "../common/ChatInput";
import { UserMessage } from "../UserMessage";

export interface BaseMessage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  type: "ai" | "human";
}
export interface CustomMessageComponentProp<T> {
  type: "ai" | "human";
  component: ({
    index,
    messages,
    handleSendFollowupMessage,
  }: {
    messages: T[];
    index: number;
    handleSendFollowupMessage?: (
      userQuery: string,
      regenerateResponse?: boolean
    ) => void;
  }) => ReactNode;
}

export interface ChatScreenPAProps<T> {
  messages: T[];

  handleSendFollowupMessage: (
    // eslint-disable-next-line no-unused-vars
    userQuery: string,
    // eslint-disable-next-line no-unused-vars
    regenerateResponse?: boolean
  ) => void;
  isMessageLoading: boolean;
  setMessages: React.Dispatch<React.SetStateAction<T[]>>;
  showMessageActionCard?: boolean;
  hideActionCardItems?: ("copy" | "regenerate")[];
  customMessageComponent?: CustomMessageComponentProp<T>;
  customMessageActionCardItem?: ReactNode[];
  hideNewChatButton?: boolean;
  emptyChatComponent?: ReactNode;
  disableScrollNewMessageToTop?: boolean;
  handleStartNewChat?: () => void;
  containerStyles?: React.CSSProperties;
  chatInputWidth?: React.CSSProperties["width"];
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
  hideNewChatButton = false,
  emptyChatComponent,
  disableScrollNewMessageToTop = false,
  handleStartNewChat,
  containerStyles,
  chatInputWidth,
}: ChatScreenPAProps<T>) {
  const [userQuery, setUserQuery] = useState("");
  const chatsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = chatsContainerRef.current;
    if (element && !disableScrollNewMessageToTop) {
      element.scrollTop = element.scrollHeight;
    }
  }, [messages, disableScrollNewMessageToTop]);

  const shouldShowLoader =
    (messages.length > 1 && isMessageLoading) || messages.length === 1;

  return (
    <Flex
      style={{
        height: "100%",
        width: "100%",
        padding: 16,
        overflow: "hidden",
      }}
      vertical
      align="center"
      justify="flex-start"
    >
      {!hideNewChatButton && (
        <Popconfirm
          title="You'll lose your current chat history."
          description="Are you sure you want to start a new chat?"
          placement="bottomLeft"
          okText="Yes"
          cancelText="No"
          onConfirm={() => {
            if (handleStartNewChat) {
              handleStartNewChat();
              return;
            } else {
              setMessages([]);
            }
          }}
        >
          <Button
            type="primary"
            style={{
              position: "absolute",
              top: 16,
              right: 32,
            }}
          >
            Start new chat
          </Button>
        </Popconfirm>
      )}

      <Flex
        ref={chatsContainerRef}
        vertical
        style={{
          width: "58%",
          height: "86%",
          overflowY: "scroll",
          overflowX: "hidden",
          padding: "0 24px 10%",
          marginTop: "4vh",
          position: "relative",
          ...containerStyles || {},
        }}
        align="flex-start"
        rootClassName="chat-container"
        gap={48}
      >
        {!shouldShowLoader &&
          messages.length === 0 &&
          emptyChatComponent &&
          emptyChatComponent}
        {messages.filter(Boolean).map((message, index) => {
          if (message.type === "ai") {
            return (
              <AIMessageComponents<T>
                key={index}
                index={index}
                messages={messages}
                hideActionCardItems={hideActionCardItems}
                showMessageActionCard={showMessageActionCard}
                customMessageComponent={
                  customMessageComponent?.type === message.type
                    ? customMessageComponent
                    : undefined
                }
                handleRegenerateResponse={handleSendFollowupMessage}
                customMessageActionCardItem={customMessageActionCardItem}
              />
            );
          } else {
            return (
              <UserMessage<T>
                key={index}
                index={index}
                messages={messages}
                customMessageComponent={
                  customMessageComponent?.type === message.type
                    ? customMessageComponent
                    : undefined
                }
              />
            );
          }
        })}
        {shouldShowLoader && <AILoader />}
      </Flex>

      <ChatInput
        inputRef={null}
        userQuery={userQuery}
        setUserQuery={setUserQuery}
        handleSendMessage={() => {
          handleSendFollowupMessage(userQuery);
          setUserQuery("");
        }}
        placeholder="Follow up with your question here..."
        isFollowupDisabled={shouldShowLoader}
        width={chatInputWidth}
      />
    </Flex>
  );
}
