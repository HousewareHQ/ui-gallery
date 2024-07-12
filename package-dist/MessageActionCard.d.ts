import { ReactNode } from 'react';
import { BaseMessage } from './chatScreen/ChatScreenPA';

export default function MessageActionCard<T extends BaseMessage>({ index, messages, handleRegenerateResponse, hideActionCardItems, customMessageActionCardItem, }: {
    index: number;
    messages: T[];
    handleRegenerateResponse: (userQuery: string, regenerateResponse?: boolean) => void;
    hideActionCardItems?: ("copy" | "regenerate")[];
    customMessageActionCardItem?: ReactNode[];
}): import("react/jsx-runtime").JSX.Element;
