import { ReactNode } from 'react';

export interface BaseMessage {
    content: any;
    type: "ai" | "human";
}
export interface CustomMessageComponentProp<T> {
    type: "ai" | "human";
    component: ({ index, messages, handleSendFollowupMessage, }: {
        messages: T[];
        index: number;
        handleSendFollowupMessage?: (userQuery: string, regenerateResponse?: boolean) => void;
    }) => ReactNode;
}
export interface ChatScreenPAProps<T> {
    messages: T[];
    handleSendFollowupMessage: (userQuery: string, regenerateResponse?: boolean) => void;
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
export declare function ChatScreenPA<T extends BaseMessage>({ messages, handleSendFollowupMessage, isMessageLoading, setMessages, showMessageActionCard, hideActionCardItems, customMessageComponent, customMessageActionCardItem, hideNewChatButton, emptyChatComponent, disableScrollNewMessageToTop, handleStartNewChat, containerStyles, chatInputWidth, }: ChatScreenPAProps<T>): import("react/jsx-runtime").JSX.Element;
