import { BaseMessage } from './ChatScreenPA';

export declare function AIMessageTrendsFunnels<T extends BaseMessage>({ index, messages, handleRegenerateResponse, }: {
    index: number;
    messages: T[];
    handleRegenerateResponse: (userQuery: string, regenerateResponse?: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
