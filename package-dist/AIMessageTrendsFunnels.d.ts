import { BaseMessage } from './ChatScreenPA';

export declare function AIMessageTrendsFunnels<T extends BaseMessage>({ index, messages, showMessageActionCard, hideActionCardItems, handleRegenerateResponse, }: {
    index: number;
    messages: T[];
    hideActionCardItems?: ('copy' | 'regenerate')[];
    showMessageActionCard?: boolean;
    handleRegenerateResponse: (userQuery: string, regenerateResponse?: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
