export interface BaseMessage {
    content: any;
    type: string;
}
export interface ChatScreenPAProps<T> {
    messages: T[];
    handleSendFollowupMessage: (userQuery: string) => void;
    isMessageLoading: boolean;
}
export declare function ChatScreenPA<T extends BaseMessage>({ messages, handleSendFollowupMessage, isMessageLoading, }: ChatScreenPAProps<T>): import("react/jsx-runtime").JSX.Element;
