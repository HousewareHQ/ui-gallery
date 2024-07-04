import { default as React } from 'react';

export interface WelcomeScreenProps {
    handleSendMessage: (userQuery: string) => void;
    suggestions: string[];
    heading: string;
    subHeading: string;
}
export declare const WelcomeScreen: React.FC<WelcomeScreenProps>;
