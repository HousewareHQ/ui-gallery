import { default as React } from 'react';

export interface WelcomeScreenProps {
    handleSendMessage: (userQuery: string) => void;
    suggestions: Array<{
        title: string;
        content: string;
    }>;
    heading: string;
    subHeading: string;
}
export declare const WelcomeScreen: React.FC<WelcomeScreenProps>;
