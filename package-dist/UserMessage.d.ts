import { BaseMessage, CustomMessageComponentProp } from './ChatScreenPA';

export declare function UserMessage<T extends BaseMessage>({ messages, index, customMessageComponent, }: {
    messages: T[];
    index: number;
    customMessageComponent?: CustomMessageComponentProp<T>;
}): import("react/jsx-runtime").JSX.Element;
