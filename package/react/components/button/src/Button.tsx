import * as React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import {
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  activeColorVariant,
  spanStyle,
  spinnerStyle,
} from "./style.css";
import { vars } from "@byeonghyeon/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";

function Button(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    children,
    isDisabled = false,
    style,
    leftIcon,
    rightIcon,
    isLoading,
    onKeyDown,
  } = props;

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor = variant === "solid" ? vars.colors.$scale[color][600] : vars.colors.$scale[color][50];
  const activeColor = variant === "solid" ? vars.colors.$scale[color][700] : vars.colors.$scale[color][100];
  const disabled = isDisabled || isLoading;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    if (event.key === "Enter" || event.key === "13") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <button
      {...props}
      ref={ref}
      onKeyDown={handleKeyDown}
      role="button"
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      data-loading={isLoading}
      disabled={disabled}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}>
      {isLoading && <div className={spinnerStyle({ size })}></div>}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>
  );
}

const _Button = React.forwardRef(Button);
export { _Button as Button };
