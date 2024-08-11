import { useInput } from "@byeonghyeon/react-hooks-input";
import { vars } from "@byeonghyeon/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";
import * as React from "react";
import { colorVariant, errorBorderColorVariant, focusBorderColorVariant, inputStyle } from "./style.css";
import { InputProps } from "./types";

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const {
    color = "gray",
    size = "lg",
    variant = "outline",
    errorBorderColor = "#E53E3E",
    focusBorderColor = "#3182CE",
    className,
    style,
    ...rest
  } = props;

  const { inputProps } = useInput(rest);

  return (
    <input
      {...inputProps}
      ref={ref}
      className={clsx([
        inputStyle({
          size,
          variant,
        }),
        className,
      ])}
      style={{
        ...assignInlineVars({
          [colorVariant]: vars.colors.$scale[color][900],
          [errorBorderColorVariant]: errorBorderColor,
          [focusBorderColorVariant]: focusBorderColor,
        }),
        ...style,
      }}
    />
  );
}

const _Input = React.forwardRef(Input);

_Input.displayName = "Input";

export { _Input as Input };
