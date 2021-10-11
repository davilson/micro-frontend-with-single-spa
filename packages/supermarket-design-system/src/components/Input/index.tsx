import { RefCallback } from "react";
import { CSS } from "@stitches/react";
import { Wrapper } from "./style";
import * as foxkeyTheme from "../../theme";

type InputProps = {
  refInput?: RefCallback<HTMLInputElement>;
  label: string;
  placeholder?: string;
  name: string;
  type?: "text" | "email" | "password";
  css?: CSS<typeof foxkeyTheme.config>;
  error?: string;
  value?: string;
  onChange: (value: string) => void;
};

export default function Input({
  refInput,
  label,
  placeholder,
  name,
  type = "text",
  css,
  error,
  onChange,
}: InputProps) {
  const inputId = `input-${name}`;
  return (
    <Wrapper css={css}>
      <label htmlFor={inputId}>{label}</label>
      <input
        ref={refInput}
        type={type}
        id={inputId}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {!!error && <span>{error}</span>}
    </Wrapper>
  );
}
