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

// Claude
// "--primary-color": "#ba5a38",
//     "--cta-text": "white",
//     "--background": "#fef6ed",
//     "--primary-text": "#3c3838",
//     "--border": "#e9e0d6",
//     "--secondary-text": "#9e9b9b",
//     "--foreground": "#fffcfa",

export const appTheme = {
  light: {
    "--primary-color": "#49a5aa", // Always keep this in hex format
    "--cta-text": "white",
    "--background": "#FEFBF3",
    "--primary-text": "#3c3838",
    "--border": "#e9e0d6",
    "--secondary-text": "#9D9D9D",
    "--foreground": "#f9f4e8",
    "--chart-colors": [
      "rgb(136, 204, 238)",
      "rgb(204, 102, 119)",
      "rgb(221, 204, 119)",
      "rgb(17, 119, 51)",
      "rgb(51, 34, 136)",
      "rgb(170, 68, 153)",
      "rgb(68, 170, 153)",
      "rgb(153, 153, 51)",
      "rgb(136, 34, 85)",
      "rgb(102, 17, 0)",
      "rgb(136, 136, 136)",
    ],
  },
  dark: {
    "--primary-color": "#76ABAE", // Always keep this in hex format
    "--cta-text": "#222831",
    "--background": "#222831",
    "--primary-text": "#f7f7f7",
    "--border": "#484848",
    "--secondary-text": "#bfbfbf",
    "--foreground": "#31363F",
    "--chart-colors": [
      "rgb(102, 197, 204)",
      "rgb(246, 207, 113)",
      "rgb(248, 156, 116)",
      "rgb(220, 176, 242)",
      "rgb(135, 197, 95)",
      "rgb(158, 185, 243)",
      "rgb(254, 136, 177)",
      "rgb(201, 219, 116)",
      "rgb(139, 224, 164)",
      "rgb(180, 151, 231)",
      "rgb(179, 179, 179)",
    ],
  },
};
