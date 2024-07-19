export interface ChatScreenAdsPreviewProps {
    handleGoBack: () => void;
    handleStartFresh: () => void;
    pageHeading: string;
    forecast: {
        date_range: string;
        cost: string;
        average_cpc: string;
        click_through_rate: string;
        daily_budget: string;
        clicks: string;
        impressions: string;
        country: string;
        language: string;
    };
    keywords: string[];
    headings: string[];
    descriptions: string[];
    finalURL: string;
    displayLink: [string, string];
    handleChangeHeadings: (headings: string[]) => void;
    handleChangeDescriptions: (descriptions: string[]) => void;
    adStrength: number;
    isForecastLoading: boolean;
    areHeadingsDescriptionsLoading: boolean;
    handleCreateCampaign: () => void;
}
export declare function ChatScreenAdsPreview({ pageHeading, forecast, keywords, headings, descriptions, finalURL, displayLink, handleGoBack, handleStartFresh, handleChangeHeadings, handleChangeDescriptions, isForecastLoading, areHeadingsDescriptionsLoading, adStrength, handleCreateCampaign, }: ChatScreenAdsPreviewProps): import("react/jsx-runtime").JSX.Element;
