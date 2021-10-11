import { foxkeyTheme } from "@foxkey/design-system";

export const Wrapper = foxkeyTheme.styled("form", {
  "> a": {
    display: "block",
    color: "$brandPrimaryDark",
    fontWeight: "$bold",
    fontSize: "$xxnano",
    width: "100%",
    marginTop: 20,
    textDecoration: "none",
    textTransform: "uppercase",
    "&.login": {
      textAlign: "right",
    },
  },
});
