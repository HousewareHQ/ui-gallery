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
        countrySelected: string;
        languageSelected: string;
        countries: Array<{
            value: string;
            label: string;
        }>;
        languages: Array<{
            value: string;
            label: string;
        }>;
    };
    handleSuggestChanges: (userQuery: string) => void;
    areKeywordsLoading: boolean;
    currencySymbol?: string;
    handleUpdateCampaignName?: (name: string) => void;
    handleChangeCountry: (country: string) => void;
    handleChangeLanguage: (language: string) => void;
    handleRefreshTable: () => void;
    refreshTableText?: string;
}
export declare function ChatScreenKeywords({ pageHeading, keywordsData, handleStartFresh, handleProceed, productCampaign, handleSuggestChanges, areKeywordsLoading, currencySymbol, handleUpdateCampaignName, handleChangeCountry, handleChangeLanguage, handleRefreshTable, refreshTableText, }: ChatScreenKeywordsProps): import("react/jsx-runtime").JSX.Element;
export {};
