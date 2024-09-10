import { ConfigProvider } from "antd";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { getAntdTheme } from "./getAntdTheme";
import { defaultAppTheme } from "./theme";

export type AppThemeModeType = "light" | "dark";

export type Theme = {
  "--primary-color": string;
  "--cta-text": string;
  "--background": string;
  "--primary-text": string;
  "--border": string;
  "--secondary-text": string;
  "--light-foreground": string;
  "--chart-colors": Array<string>;
};

export interface AppThemeContext {
  appThemeMode: AppThemeModeType;
  setAppThemeMode: (themeMode: AppThemeModeType) => void;
  themeColors: Theme;
}

export const ThemeContext = createContext<AppThemeContext | undefined>(
  undefined
);

export type AppThemeProviderProps = {
  children: ReactNode;
  appTheme?: Record<AppThemeModeType, Theme>;
  externalTheme?: {
    themeMode: AppThemeModeType;
    themeColors: Theme;
    antdTheme: any;
  };
};

export default function AppThemeProvider({
  children,
  appTheme = defaultAppTheme,
  externalTheme,
}: AppThemeProviderProps) {
  const initialThemeMode =
    externalTheme?.themeMode ||
    (localStorage?.getItem("appThemeMode") as AppThemeModeType) ||
    "light";
  const [selectedThemeMode, setSelectedThemeMode] =
    useState<AppThemeModeType>(initialThemeMode);

  const themeColors = externalTheme?.themeColors || appTheme[selectedThemeMode];

  useEffect(() => {
    if (!externalTheme) {
      Object.entries(themeColors).forEach(([key, value]) => {
        if (typeof value === "string") {
          document.documentElement.style.setProperty(`${key}`, value);
        }
      });
    }
  }, [themeColors, externalTheme]);

  const antdTheme = externalTheme?.antdTheme || getAntdTheme(themeColors);

  const setAppThemeMode = (themeMode: AppThemeModeType) => {
    if (!externalTheme) {
      setSelectedThemeMode(themeMode);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        appThemeMode: selectedThemeMode,
        setAppThemeMode,
        themeColors,
      }}
    >
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
}
