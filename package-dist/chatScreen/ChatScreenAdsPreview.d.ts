export interface ChatScreenAdsPreviewProps {
    handleGoBack: () => void;
    handleStartFresh: () => void;
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
    headings: string[];
    descriptions: string[];
    finalURL: string;
    displayLink: [string, string];
}
export declare function ChatScreenAdsPreview({ pageHeading, forecast, keywords, headings, descriptions, finalURL, displayLink, handleGoBack, handleStartFresh, }: ChatScreenAdsPreviewProps): import("react/jsx-runtime").JSX.Element;
