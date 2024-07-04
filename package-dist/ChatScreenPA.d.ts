import { ElementType } from 'react';

export interface BaseMessage {
    content: any;
    type: "ai" | "user";
}
export interface ChatScreenPAProps<T> {
    messages: T[];
    handleSendFollowupMessage: (userQuery: string) => void;
    AIMessage: ElementType;
    UserMessage: ElementType;
    AILoader: ElementType;
    isMessageLoading: boolean;
}
export declare function ChatScreenPA<T extends BaseMessage>({ messages, handleSendFollowupMessage, isMessageLoading, }: ChatScreenPAProps<T>): import("react/jsx-runtime").JSX.Element;
