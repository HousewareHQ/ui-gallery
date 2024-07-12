export interface BaseMessage {
    content: any;
    type: "ai" | "human";
}
export interface ChatScreenAdsPreviewProps<T> {
    messages: T[];
    handleSendFollowupMessage: (userQuery: string, regenerateResponse?: boolean) => void;
    isMessageLoading: boolean;
    setMessages: React.Dispatch<React.SetStateAction<T[]>>;
    pageHeading: string;
    forecast: {
        dateRange: string;
        cost: string;
        avgCPC: string;
        dailyBudget: string;
        clicks: string;
        impressions: string;
        ctr: string;
        location: string;
        language: string;
    };
    keywords: string[];
}
export declare function ChatScreenAdsPreview<T extends BaseMessage>({ messages, setMessages, pageHeading, forecast, keywords, }: ChatScreenAdsPreviewProps<T>): import("react/jsx-runtime").JSX.Element;
