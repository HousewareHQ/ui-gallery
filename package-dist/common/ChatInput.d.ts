import { InputRef } from 'antd';
import { LegacyRef } from 'react';
import * as React from "react";
export interface ChatInputProps {
    inputRef?: LegacyRef<InputRef> | null;
    placeholder?: string;
    userQuery: string;
    setUserQuery: React.Dispatch<React.SetStateAction<string>>;
    handleSendMessage: () => void;
    isFollowupDisabled?: boolean;
}
export declare const ChatInput: React.FC<ChatInputProps>;
