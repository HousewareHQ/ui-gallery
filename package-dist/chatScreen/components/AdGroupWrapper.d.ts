export type AdGroup = {
    headlines: string[];
    descriptions: string[];
    adStrength: number;
    url: string;
    sub_urls: [string, string];
    negative_keywords: string[];
    keywords: string[];
    name: string;
    dislikes: {
        headlines: string[];
        descriptions: string[];
    };
};
export default function AdGroupWrapper({ adGroup, handleUpdateAdGroup, areHeadingsDescriptionsLoading, }: {
    adGroup: AdGroup;
    handleUpdateAdGroup: (updatedAdGroup: AdGroup) => void;
    areHeadingsDescriptionsLoading: boolean;
}): import("react/jsx-runtime").JSX.Element;
