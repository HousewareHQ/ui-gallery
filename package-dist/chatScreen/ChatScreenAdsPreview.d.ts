import { AdGroup } from './components/AdGroupWrapper';

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
    adGroups: AdGroup[];
    handleChangeHeadings: (headings: string[]) => void;
    handleChangeDescriptions: (descriptions: string[]) => void;
    handleUpdateAdGroups: (adGroups: AdGroup[]) => void;
    isForecastLoading: boolean;
    areHeadingsDescriptionsLoading: Array<boolean>;
    handleCreateCampaign: () => void;
    handleSuggestChanges: (userQuery: string) => void;
    inputPlaceholder?: string;
}
export declare function ChatScreenAdsPreview({ pageHeading, forecast, adGroups, handleGoBack, handleStartFresh, handleUpdateAdGroups, isForecastLoading, areHeadingsDescriptionsLoading, handleCreateCampaign, handleSuggestChanges, inputPlaceholder, }: ChatScreenAdsPreviewProps): import("react/jsx-runtime").JSX.Element;
