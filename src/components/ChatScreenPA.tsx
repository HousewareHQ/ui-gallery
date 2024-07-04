import { Flex } from "antd";
import { ElementType, useEffect, useRef, useState } from "react";
import AILoader from "./AILoader";
import { AIMessageTrendsFunnels } from "./AIMessageTrendsFunnels";
import { ChatInput } from "./ChatInput";
import { UserMessage } from "./UserMessage";

export interface BaseMessage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  type: "ai" | "user";
}

export interface ChatScreenPAProps<T> {
  messages: T[];
  // eslint-disable-next-line no-unused-vars
  handleSendFollowupMessage: (userQuery: string) => void;
  AIMessage: ElementType;
  UserMessage: ElementType;
  AILoader: ElementType;
  isMessageLoading: boolean;
}

export function ChatScreenPA<T extends BaseMessage>({
  messages,
  handleSendFollowupMessage,
  isMessageLoading,
}: ChatScreenPAProps<T>) {
  const [userQuery, setUserQuery] = useState("");
  const chatsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = chatsContainerRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  const shouldShowLoader =
    (messages.length > 1 && isMessageLoading) || messages.length === 1;

  return (
    <Flex
      style={{
        height: "100vh",
        width: "100vw",
        padding: 16,
        overflow: "hidden",
      }}
      vertical
      align="center"
      justify="flex-start"
    >
      <Flex
        ref={chatsContainerRef}
        vertical
        style={{
          width: "58vw",
          height: "86vh",
          overflowY: "scroll",
          overflowX: "hidden",
          padding: "0 24px 10vh",
          marginTop: "4vh",
          position: "relative",
        }}
        align="flex-start"
        rootClassName="chat-container"
        gap={48}
      >
        {messages.map((message, index) =>
          message && message?.type === "ai" ? (
            <AIMessageTrendsFunnels<T> index={index} messages={messages} />
          ) : (
            <UserMessage<T> message={message} />
          )
        )}
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
      />
    </Flex>
  );
}
