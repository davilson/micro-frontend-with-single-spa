import { foxkeyTheme } from "@foxkey/design-system";

export const Wrapper = foxkeyTheme.styled("section", {
  display: "grid",
  gridTemplateColumns: "auto 400px",
  columnGap: "$large",
  minHeight: "100vh",
  maxHeight: "100vh",
  overflow: "hidden",
  maxWidth: 1000,
  marginRight: "auto",
  marginLeft: "auto",
});

export const AreaLogo = foxkeyTheme.styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: "$large",
  img: {
    width: "100%",
    maxWidth: 500,
  },
  p: {
    marginTop: "$xxlarge",
    width: "100%",
    maxWidth: 500,
    color: "$neutralLowMedium",
    fontFamily: "$mono",
    b: {
      fontWeight: "$bold",
    },
  },
});

export const AreaForm = foxkeyTheme.styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
  maxHeight: "100vh",
  overflowY: "auto",
  padding: "$large",
});
