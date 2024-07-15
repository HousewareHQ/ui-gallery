import { default as React } from 'react';

export interface WelcomeScreenAdsProps {
    handleSendMessage: (userQuery: string) => void;
    heading: string;
    subHeading: string;
    placeholders: {
        inputPlaceholder: string;
        country: string;
        language: string;
    };
}
export declare const WelcomeScreenAds: React.FC<WelcomeScreenAdsProps>;
