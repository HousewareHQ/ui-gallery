import { BaseMessage } from './ChatScreenPA';

export declare function UserMessage<T extends BaseMessage>({ message, }: {
    message: T;
}): import("react/jsx-runtime").JSX.Element;
