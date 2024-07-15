import { InputRef } from 'antd';
import { LegacyRef } from 'react';

import * as React from "react";
export interface AdsTextInputProps {
    inputRef?: LegacyRef<InputRef> | null;
    userQuery: string;
    setUserQuery: React.Dispatch<React.SetStateAction<string>>;
    handleSendMessage: () => void;
    isFollowupDisabled?: boolean;
    placeholders?: {
        inputPlaceholder: string;
        country: string;
        language: string;
    };
}
export declare const AdsTextInput: React.FC<AdsTextInputProps>;
