import { default as React } from 'react';

export interface WelcomeScreenAdsProps {
    handleSendMessage: (userQuery: string) => void;
    heading: string;
    subHeading: string;
    inputPlaceholder?: string;
    countries: Array<{
        value: string;
        label: string;
    }>;
    handleChangeCountry: (country: string) => void;
    handleChangeLanguage: (language: string) => void;
    countrySelected: string;
    languageSelected: string;
    languages: Array<{
        value: string;
        label: string;
    }>;
    showSpotlightGrid?: boolean;
}
export declare const WelcomeScreenAds: React.FC<WelcomeScreenAdsProps>;
