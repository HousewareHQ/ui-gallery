import { ReactNode } from 'react';
import { BaseMessage, CustomMessageComponentProp } from './chatScreen/ChatScreenPA';

export declare function AIMessageComponents<T extends BaseMessage>({ index, messages, showMessageActionCard, hideActionCardItems, handleRegenerateResponse, customMessageComponent, customMessageActionCardItem, }: {
    index: number;
    messages: T[];
    hideActionCardItems?: ('copy' | 'regenerate')[];
    showMessageActionCard?: boolean;
    customMessageComponent?: CustomMessageComponentProp<T>;
    customMessageActionCardItem?: ReactNode[];
    handleRegenerateResponse: (userQuery: string, regenerateResponse?: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
