export interface BaseMessage {
    content: any;
    type: "ai" | "human";
}
interface DataType {
    average_monthly_searches: number;
    competition: string;
    high_cpc: number;
    keyword: string;
    low_cpc: number;
    cpc: number;
    key: string;
}
export interface ChatScreenKeywordsProps {
    handleStartFresh: () => void;
    keywordsData: Array<DataType>;
    pageHeading: string;
    handleProceed: (selectedRows: DataType[]) => void;
    productCampaign: {
        description: string;
        country: string;
        language: string;
    };
    handleSuggestChanges: (userQuery: string) => void;
}
export declare function ChatScreenKeywords({ pageHeading, keywordsData, handleStartFresh, handleProceed, productCampaign, handleSuggestChanges, }: ChatScreenKeywordsProps): import("react/jsx-runtime").JSX.Element;
export {};
