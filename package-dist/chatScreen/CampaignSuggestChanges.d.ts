export interface CampaignSuggestChangesProps {
    campaignName: string;
    suggestions: string;
    countrySelected: string;
    languageSelected: string;
    keywordsSelected: string[];
    handleSuggestChanges: (userQuery: string) => void;
    inputPlaceholder?: string;
}
export declare function CampaignSuggestChangesScreen({ campaignName, suggestions, countrySelected, languageSelected, keywordsSelected, handleSuggestChanges, inputPlaceholder, }: CampaignSuggestChangesProps): import("react/jsx-runtime").JSX.Element;
