import { default as React } from 'react';

export interface WelcomeScreenConversationsProps {
    handleSendMessage: (userQuery: string) => void;
    suggestions: Array<{
        title: string;
        content: string;
    }>;
    heading: string;
    subHeading: string;
    showSpotlightGrid?: boolean;
}
export declare const WelcomeScreenConversations: React.FC<WelcomeScreenConversationsProps>;
