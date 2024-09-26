import { default as React } from 'react';

export interface WelcomeScreenProps {
    heading: string;
    subHeading: string;
    showSpotlightGrid?: boolean;
    customCardBody?: React.ReactNode;
    cardWidth?: string;
}
export declare const WelcomeScreen: React.FC<WelcomeScreenProps>;
