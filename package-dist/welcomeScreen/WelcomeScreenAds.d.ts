import { default as React } from 'react';

export interface WelcomeScreenAdsProps {
    handleSendMessage: (userQuery: string) => void;
    heading: string;
    subHeading: string;
}
export declare const WelcomeScreenAds: React.FC<WelcomeScreenAdsProps>;
