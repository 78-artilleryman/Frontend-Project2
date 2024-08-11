import { vars } from "@byeonghyeon/themes";
import { clsx } from "clsx";
import * as React from "react";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { textStyle } from "./style.css";
import { TextProps } from "./types";

function Text(props: TextProps, ref: React.Ref<HTMLElement>) {
  const { as = "p", color = "gray", background, children, fontSize } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties))),
        textStyle({
          fontSize,
        }),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children
  );
}

const _Text = React.forwardRef(Text);
export { _Text as Text };
