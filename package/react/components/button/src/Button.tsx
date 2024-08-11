import { useButton } from "@byeonghyeon/react-hooks-button";
import { vars } from "@byeonghyeon/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";
import * as React from "react";
import {
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  activeColorVariant,
  spanStyle,
  spinnerStyle,
} from "./style.css";
import { ButtonProps } from "./types";

function Button(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const { buttonProps } = useButton(props);

  const { variant = "solid", size = "md", color = "gray", children, style, leftIcon, rightIcon, isLoading } = props;

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor = variant === "solid" ? vars.colors.$scale[color][600] : vars.colors.$scale[color][50];
  const activeColor = variant === "solid" ? vars.colors.$scale[color][700] : vars.colors.$scale[color][100];

  return (
    <button
      {...buttonProps}
      role="button"
      ref={ref}
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}>
      {isLoading && <div className={spinnerStyle({ size })} />}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>
  );
}

const _Button = React.forwardRef(Button);
export { _Button as Button };
