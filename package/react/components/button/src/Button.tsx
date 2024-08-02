import * as React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import { buttonStyle, enableColorVariant, hoverColorVariant, activeColorVariant } from "./style.css";
import { vars } from "@byeonghyeon/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";

function Button(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const { variant = "solid", size = "md", color = "gray", children, isDisabled = false, style, ...rest } = props;

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor = variant === "solid" ? vars.colors.$scale[color][600] : vars.colors.$scale[color][50];
  const activeColor = variant === "solid" ? vars.colors.$scale[color][700] : vars.colors.$scale[color][100];
  const disabled = isDisabled;

  return (
    <button
      {...props}
      ref={ref}
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      disabled={disabled}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}>
      {children}
    </button>
  );
}

const _Button = React.forwardRef(Button);
export { _Button as Button };
