import { foxkeyTheme } from "@foxkey/design-system";

export const Wrapper = foxkeyTheme.styled("section", {
  minHeight: "100vh",
  maxHeight: "100vh",
});

export const Header = foxkeyTheme.styled("header", {
  height: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: "$large",
  paddingLeft: "$large",
  img: {
    height: 40,
  },
  ".header-actions": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Main = foxkeyTheme.styled("main", {
  minHeight: "calc(100vh - 60px)",
  maxHeight: "calc(100vh - 60px)",
  display: "grid",
  gridTemplateColumns: "250px auto",
});

export const Nav = foxkeyTheme.styled("nav", {
  backgroundColor: "$brandPrimaryPure",
  ul: {
    li: {
      a: {
        display: "flex",
        alignItems: "center",
        height: 60,
        textDecoration: "none",
        fontWeight: "$bold",
        color: "$neutralHighPure",
        paddingRight: "$small",
        paddingLeft: "$small",
        "&:hover": {
          backgroundColor: "$neutralHighPure",
          color: "$brandPrimaryPure",
        },
      },
    },
  },
});

export const Content = foxkeyTheme.styled("section", {
  borderTopWidth: 1,
  borderTopStyle: "solid",
  borderTopColor: "$neutralHighMedium",
  overflowY: "auto",
  padding: "$large",
});
