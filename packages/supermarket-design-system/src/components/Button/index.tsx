import { CSS } from "@stitches/react";
import { Wrapper } from "./style";
import * as foxkeyTheme from "../../theme";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
  css?: CSS<typeof foxkeyTheme.config>;
};

export default function Button({
  title,
  type = "button",
  onClick,
  css,
}: ButtonProps) {
  return (
    <Wrapper type={type} onClick={onClick} css={css}>
      {title}
    </Wrapper>
  );
}
