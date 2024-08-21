import { BaseMessage, CustomMessageComponentProp } from './chatScreen/ChatScreenPA';

export type UserMessageProps<T extends BaseMessage> = {
    messages: T[];
    index: number;
    customMessageComponent?: CustomMessageComponentProp<T>;
};
export declare function UserMessage<T extends BaseMessage>({ messages, index, customMessageComponent, }: UserMessageProps<T>): import("react/jsx-runtime").JSX.Element;
