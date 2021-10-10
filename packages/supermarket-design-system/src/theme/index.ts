import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  prefix: "foxkey-style",
  theme: {
    colors: {
      brandPrimaryPure: "#ED1C24",
      brandPrimaryLight: "#FBADB0",
      brandPrimaryMedium: "#D51118",
      brandPrimaryDark: "#5E080B",
      brandSecondaryPure: "#BD8D28",
      brandSecondaryLight: "#DCB35B",
      brandSecondaryMedium: "#A47A23",
      brandSecondaryDark: "#4C3A10",
      accentPure: "#940DCE",
      accentLight: "#DEB9EE",
      accentMedium: "#7C2E9E",
      accentDark: "#461F56",
      neutralHighPure: "#FFFFFF",
      neutralHighLight: "#F5F5F4",
      neutralHighMedium: "#E4E3E1",
      neutralHighDark: "#B7B2AE",
      neutralLowPure: "#131211",
      neutralLowLight: "#958F88",
      neutralLowMedium: "#645E59",
      neutralLowDark: "#3B3835",
      statusFocusPure: "#0D6EDE",
      statusFocusLight: "#BBD9FB",
      statusFocusMedium: "#0C6AD4",
      statusFocusDark: "#06356A",
      statusNegativePure: "#DC1E6D",
      statusNegativeLight: "#F4AECB",
      statusNegativeMedium: "#B41859",
      statusNegativeDark: "#5A0C2D",
    },
    space: {
      nano: "4px",
      xxsmall: "6px",
      xsmall: "8px",
      small: "12px",
      medium: "16px",
      large: "24px",
      xlarge: "32px",
      xxlarge: "40px",
      huge: "48px",
      xhuge: "56px",
      xxhuge: "64px",
      giant: "80px",
      xgiant: "120px",
      xxgiant: "160px",
    },
    fontSizes: {
      xxnano: "12px",
      xnano: "14px",
      nano: "16px",
      xxsmall: "18px",
      xsmall: "20px",
      small: "24px",
      medium: "28px",
      large: "32px",
      xlarge: "40px",
      xxlarge: "48px",
      huge: "56px",
      xhuge: "64px",
      xxhuge: "72px",
      giant: "80px",
      xgiant: "88px",
      xxgiant: "96px",
    },
    fonts: {
      highlight: [
        "Lato",
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "'Open Sans'",
        "'Helvetica Neue'",
        "sans-serif",
      ].join(","),
      mono: [
        "Consolas",
        "'Andale Mono WT'",
        "'Andale Mono'",
        "'Lucida Console'",
        "'Lucida Sans Typewriter'",
        "'DejaVu Sans Mono'",
        "'Bitstream Vera Sans Mono'",
        "'Liberation Mono'",
        "'Nimbus Mono L'",
        "Monaco",
        "'Courier New'",
        "Courier",
        "monospace",
      ].join(","),
    },
    fontWeights: {
      thin: 100,
      light: 300,
      regular: 400,
      bold: 700,
      black: 900,
    },
    lineHeights: {
      xloose: 2,
      loose: 1.75,
      medium: 1.5,
      tight: 1.2,
      xtight: 1,
    },
    letterSpacings: {},
    sizes: {},
    borderWidths: {
      none: 0,
      hairline: "1px",
      thin: "2px",
      thick: "4px",
      heavy: "8px",
    },
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: "(min-width: 576px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 992px)",
    bp4: "(min-width: 1200px)",
    bp5: "(min-width: 1400px)",
  },
  utils: {
    marginHorizontal: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginVertical: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingHorizontal: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingVertical: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const globalStyles = globalCss({
  "@import": [
    "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
  ],
  ":root": {
    fontSize: "$nano",
  },
  html: {
    scrollBehavior: "smooth",
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    fontFamily: "$highlight",
    fontSize: "$xnano",
    fontWeight: "$regular",
    "&::before": {
      boxSizing: "border-box",
    },
    "&::after": {
      boxSizing: "border-box",
    },
    body: {
      fontFamily: "$highlight",
      fontSize: "$xnano",
      fontWeight: "$regular",
      backgroundColor: "$neutralHighPure",
    },
  },
});
