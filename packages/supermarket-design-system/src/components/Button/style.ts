import * as foxkeyTheme from "../../theme";

export const Wrapper = foxkeyTheme.styled("button", {
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$brandPrimaryPure",
  borderWidth: 0,
  paddingRight: "$medium",
  paddingLeft: "$medium",
  borderRadius: 5,
  color: "$neutralHighPure",
  fontSize: "$nano",
  fontWeight: "$bold",
  textTransform: "uppercase",
  cursor: "pointer",
  outline: "none",
  "&:hover": {
    backgroundColor: "$brandPrimaryDark",
  },
});
