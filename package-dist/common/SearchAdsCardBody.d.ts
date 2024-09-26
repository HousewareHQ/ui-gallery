import * as React from "react";
export interface SearchAdsCardBodyProps {
    handleSendMessage: (userQuery: string) => void;
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
}
export declare const SearchAdsCardBody: React.FC<SearchAdsCardBodyProps>;
