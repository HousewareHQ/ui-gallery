import { InputRef } from 'antd';
import { LegacyRef } from 'react';

import * as React from "react";
export interface AdsTextInputProps {
    inputRef?: LegacyRef<InputRef> | null;
    userQuery: string;
    setUserQuery: React.Dispatch<React.SetStateAction<string>>;
    handleSendMessage: () => void;
    isFollowupDisabled?: boolean;
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
export declare const AdsTextInput: React.FC<AdsTextInputProps>;
