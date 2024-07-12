export interface BaseMessage {
    content: any;
    type: "ai" | "human";
}
interface DataType {
    keyword: string;
    monthlySearchVolume: string;
    avgMonthlySearches: string;
    cpc: string;
    competition: string;
    lowBid: string;
    highBid: string;
    key: string;
}
export interface ChatScreenKeywordsProps {
    handleStartFresh: () => void;
    keywordsData: Array<DataType>;
    pageHeading: string;
    handleProceed: (selectedRows: DataType[]) => void;
    productCampaign: string;
}
export declare function ChatScreenKeywords({ pageHeading, keywordsData, handleStartFresh, handleProceed, productCampaign, }: ChatScreenKeywordsProps): import("react/jsx-runtime").JSX.Element;
export {};
