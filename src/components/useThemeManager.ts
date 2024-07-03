import { useAppTheme } from "./useAppTheme";

export const useThemeManager = () => {
  const { appThemeMode, setAppThemeMode, themeColors } = useAppTheme();

  const toggleTheme = () => {
    setAppThemeMode(appThemeMode === "light" ? "dark" : "light");
  };

  return {
    currentTheme: appThemeMode,
    themeColors,
    setTheme: setAppThemeMode,
    toggleTheme,
  };
};
