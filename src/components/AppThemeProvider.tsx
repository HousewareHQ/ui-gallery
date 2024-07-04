import { ConfigProvider } from "antd";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { defaultAppTheme } from "./theme";

export type AppThemeModeType = "light" | "dark";

type Theme = {
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
  // eslint-disable-next-line no-unused-vars
  setAppThemeMode: (themeMode: AppThemeModeType) => void;
  themeColors: Theme;
}

export const ThemeContext = createContext<AppThemeContext | undefined>(
  undefined
);

export default function AppThemeProvider({
  children,
  appTheme = defaultAppTheme,
}: {
  children: ReactNode;
  appTheme: Record<AppThemeModeType, Theme>;
}) {
  const initialThemeMode =
    (localStorage?.getItem("appThemeMode") as AppThemeModeType) || "light";
  const [selectedThemeMode, setSelectedThemeMode] =
    useState<AppThemeModeType>(initialThemeMode);

  const themeColors = appTheme[selectedThemeMode];

  useEffect(() => {
    Object.entries(themeColors).forEach(([key, value]) => {
      if (typeof value === "string") {
        document.documentElement.style.setProperty(`${key}`, value);
      }
    });
  }, [themeColors]);

  return (
    <ThemeContext.Provider
      value={{
        appThemeMode: selectedThemeMode,
        setAppThemeMode: setSelectedThemeMode,
        themeColors,
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: themeColors["--primary-color"],
            colorBgBase: themeColors["--background"],
            colorText: themeColors["--primary-text"],
            colorTextDescription: themeColors["--secondary-text"],
            colorTextHeading: themeColors["--primary-text"],
            colorTextSecondary: themeColors["--secondary-text"],
            fontFamily: "HousewareFont",
            colorLink: themeColors["--primary-color"],
            colorBorder: themeColors["--border"],
            colorBorderSecondary: themeColors["--border"],
            colorSplit: themeColors["--border"],
          },
          components: {
            Card: {
              colorBgContainer: themeColors["--foreground"],
              colorBorder: themeColors["--border"],
            },
            Input: {
              colorTextPlaceholder: themeColors["--secondary-text"],
            },
            Button: {
              primaryColor: themeColors["--cta-text"],
              primaryShadow: "none",
              defaultHoverColor: themeColors["--cta-text"],
            },
            Layout: {
              bodyBg: themeColors["--background"],
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
