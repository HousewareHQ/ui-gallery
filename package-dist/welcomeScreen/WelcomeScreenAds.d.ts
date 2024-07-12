import { default as React } from 'react';

export interface WelcomeScreenAdsProps {
    handleSendMessage: (userQuery: string) => void;
    suggestions: Array<{
        title: string;
        content: string;
    }>;
    heading: string;
    subHeading: string;
}
export declare const WelcomeScreenAds: React.FC<WelcomeScreenAdsProps>;
