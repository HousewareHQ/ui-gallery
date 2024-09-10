import { ThemeConfig } from "antd";
import { Theme } from "./AppThemeProvider";

export const getAntdTheme = (themeColors: Theme): ThemeConfig => ({
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
      colorBgContainer: themeColors["--light-foreground"],
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
    Progress: {
      defaultColor: themeColors["--primary-color"],
    },
  },
});
