export declare const useThemeManager: () => {
    currentTheme: import('./AppThemeProvider').AppThemeModeType;
    themeColors: import('./theme').Theme;
    setTheme: (themeMode: import('./AppThemeProvider').AppThemeModeType) => void;
    toggleTheme: () => void;
};
