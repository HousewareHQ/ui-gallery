import { ReactNode } from 'react';
import { BaseMessage } from './chatScreen/ChatScreenPA';

export interface MessageActionCardProps<T> {
    index: number;
    messages: T[];
    handleRegenerateResponse: (userQuery: string, regenerateResponse?: boolean) => void;
    hideActionCardItems?: ('copy' | 'regenerate')[];
    customMessageActionCardItem?: ReactNode[];
}
export default function MessageActionCard<T extends BaseMessage>({ index, messages, handleRegenerateResponse, hideActionCardItems, customMessageActionCardItem, }: MessageActionCardProps<T>): import("react/jsx-runtime").JSX.Element;
