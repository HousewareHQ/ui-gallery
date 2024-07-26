export interface CampaignSuggestChangesProps {
    campaignName: string;
    suggestions?: string;
    countrySelected: string;
    languageSelected: string;
    handleSuggestChanges: (userQuery: string) => void;
    inputPlaceholder?: string;
    handleGoBack: () => void;
    handleCreateCampaign: () => void;
    channelType: string;
    deliveryMethod: string;
    budget: string;
}
export declare function CampaignSuggestChangesScreen({ campaignName, channelType, suggestions, countrySelected, languageSelected, deliveryMethod, budget, handleSuggestChanges, inputPlaceholder, handleGoBack, handleCreateCampaign, }: CampaignSuggestChangesProps): import("react/jsx-runtime").JSX.Element;
