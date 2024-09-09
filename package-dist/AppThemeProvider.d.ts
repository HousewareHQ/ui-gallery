import { ReactNode } from 'react';

export type AppThemeModeType = "light" | "dark";
export type Theme = {
    "--primary-color": string;
    "--cta-text": string;
    "--background": string;
    "--primary-text": string;
    "--border": string;
    "--secondary-text": string;
    "--foreground": string;
    "--chart-colors": Array<string>;
};
export interface AppThemeContext {
    appThemeMode: AppThemeModeType;
    setAppThemeMode: (themeMode: AppThemeModeType) => void;
    themeColors: Theme;
}
export declare const ThemeContext: import('use-context-selector').Context<AppThemeContext | undefined>;
export type AppThemeProviderProps = {
    children: ReactNode;
    appTheme?: Record<AppThemeModeType, Theme>;
    externalTheme?: {
        themeMode: AppThemeModeType;
        themeColors: Theme;
        antdTheme: any;
    };
};
export default function AppThemeProvider({ children, appTheme, externalTheme, }: AppThemeProviderProps): import("react/jsx-runtime").JSX.Element;
