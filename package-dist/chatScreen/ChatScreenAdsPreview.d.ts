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
        disclaimer: string;
    };
    adGroups: AdGroup[];
    handleUpdateAdGroups: (adGroups: AdGroup[]) => void;
    isForecastLoading: boolean;
    areHeadingsDescriptionsLoading: Array<boolean>;
    handleReviewCampaign: () => void;
    handleSuggestChanges: (userQuery: string) => void;
    inputPlaceholder?: string;
    areAdGroupsLoading?: boolean;
    handleUpdateCampaignName: (name: string) => void;
}
export declare function ChatScreenAdsPreview({ pageHeading, forecast, adGroups, handleGoBack, handleStartFresh, handleUpdateAdGroups, isForecastLoading, areHeadingsDescriptionsLoading, handleReviewCampaign, handleSuggestChanges, inputPlaceholder, areAdGroupsLoading, handleUpdateCampaignName, }: ChatScreenAdsPreviewProps): import("react/jsx-runtime").JSX.Element;
