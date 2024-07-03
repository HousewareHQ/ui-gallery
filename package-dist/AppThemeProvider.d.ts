import { ReactNode } from 'react';
import { Theme } from './theme';

export type AppThemeModeType = "light" | "dark";
export interface AppThemeContext {
    appThemeMode: AppThemeModeType;
    setAppThemeMode: (themeMode: AppThemeModeType) => void;
    themeColors: Theme;
}
export declare const ThemeContext: import('use-context-selector').Context<AppThemeContext | undefined>;
export default function AppThemeProvider({ children, }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
