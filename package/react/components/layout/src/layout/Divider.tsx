import { vars } from "@byeonghyeon/themes";
import * as React from "react";
import { DividerProps } from "./types";

function Divider(props: DividerProps, ref: React.Ref<HTMLHRElement>) {
  const { color = "gray", variant = "solid", size = 1, orientaion = "horizontal" } = props;

  const borderStyle =
    orientaion === "horizontal"
      ? {
          width: "100%",
          borderWidth: `0 0 ${size}px 0`,
        }
      : {
          height: "100%",
          borderWidth: `0 0 0 ${size}px`,
        };

  return (
    <hr
      {...props}
      ref={ref}
      style={{
        borderStyle: variant,
        borderColor: color && vars.colors.$scale?.[color]?.[200],
        ...borderStyle,
        ...props.style,
      }}
    />
  );
}

const _Diver = React.forwardRef(Divider);
export { _Diver as Divider };
