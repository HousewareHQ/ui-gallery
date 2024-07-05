export interface BaseMessage {
    content: any;
    type: string;
}
export interface ChatScreenPAProps<T> {
    messages: T[];
    handleSendFollowupMessage: (userQuery: string, regenerateResponse?: boolean) => void;
    isMessageLoading: boolean;
    setMessages: React.Dispatch<React.SetStateAction<T[]>>;
}
export declare function ChatScreenPA<T extends BaseMessage>({ messages, handleSendFollowupMessage, isMessageLoading, setMessages, }: ChatScreenPAProps<T>): import("react/jsx-runtime").JSX.Element;
