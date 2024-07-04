export declare const useThemeManager: () => {
    currentTheme: import('./AppThemeProvider').AppThemeModeType;
    themeColors: {
        "--primary-color": string;
        "--cta-text": string;
        "--background": string;
        "--primary-text": string;
        "--border": string;
        "--secondary-text": string;
        "--foreground": string;
        "--chart-colors": Array<string>;
    };
    setTheme: (themeMode: import('./AppThemeProvider').AppThemeModeType) => void;
    toggleTheme: () => void;
};
