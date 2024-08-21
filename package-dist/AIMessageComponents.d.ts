import { ReactNode } from 'react';
import { BaseMessage, CustomMessageComponentProp } from './chatScreen/ChatScreenPA';

export type AIMessageComponentsProps<T extends BaseMessage> = {
    index: number;
    messages: T[];
    showMessageActionCard?: boolean;
    hideActionCardItems?: ('copy' | 'regenerate')[];
    handleRegenerateResponse: (userQuery: string, regenerateResponse?: boolean) => void;
    customMessageComponent?: CustomMessageComponentProp<T>;
    customMessageActionCardItem?: ReactNode[];
};
export declare function AIMessageComponents<T extends BaseMessage>({ index, messages, showMessageActionCard, hideActionCardItems, handleRegenerateResponse, customMessageComponent, customMessageActionCardItem, }: AIMessageComponentsProps<T>): import("react/jsx-runtime").JSX.Element;
