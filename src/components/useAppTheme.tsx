import { useContext } from "use-context-selector";
import { AppThemeContext, ThemeContext } from "./AppThemeProvider";

export const useAppTheme = (): AppThemeContext => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
