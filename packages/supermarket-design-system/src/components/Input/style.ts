import * as foxkeyTheme from "../../theme";

export const Wrapper = foxkeyTheme.styled("div", {
  display: "flex",
  flexDirection: "column",
  label: {
    color: "$brandPrimaryDark",
    fontWeight: "$bold",
    textTransform: "uppercase",
    marginBottom: "$nano",
  },
  input: {
    height: 36,
    border: "1px solid $brandPrimaryDark",
    borderRadius: 5,
    paddingRight: "$small",
    paddingLeft: "$small",
    "&::placeholder": {
      color: "$brandPrimaryDark",
    },
  },
  span: {
    color: "$brandSecondaryPure",
    marginTop: "$nano",
    fontSize: "$xxnano",
    fontWeight: "$bold",
  },
});
