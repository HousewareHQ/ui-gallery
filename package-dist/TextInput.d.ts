import { ChangeEvent } from 'react';

export interface TextInputProps {
    size?: number;
    value: string;
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const TextInput: ({ placeholder, value, onChange, ...props }: TextInputProps) => import("react/jsx-runtime").JSX.Element;
