import { InputRef, TextAreaProps } from 'antd/es/input';
import { LegacyRef } from 'react';

export type CustomTextAreaProps = {
    inputPlaceholder: string;
    userQuery: string;
    setUserQuery: (userQuery: string) => void;
    label?: string;
    handlePressEnter: () => void;
    inputRef?: LegacyRef<InputRef> | null;
} & TextAreaProps;
export declare const CustomTextArea: React.FC<CustomTextAreaProps>;
