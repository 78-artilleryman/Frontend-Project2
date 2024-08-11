import { useButton } from "@byeonghyeon/react-hooks-button";
import { clsx } from "clsx";
import * as React from "react";
import { useCallback } from "react";
import { useAccordionContext } from "./AccordionContext";
import { accordionButtonStyle } from "./style.css";
import { AccordionButtonProps } from "./types";

function AccordionButton(props: AccordionButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const { className, itemName = "", onClick, children, ...rest } = props;

  const { setActiveItem } = useAccordionContext();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setActiveItem(itemName);
      onClick?.(event);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [itemName, setActiveItem]
  );

  const { buttonProps } = useButton({
    ...rest,
    onClick: handleClick,
    elementType: "button",
  });

  return (
    <button {...buttonProps} ref={ref} className={clsx([accordionButtonStyle, className])}>
      {children}
    </button>
  );
}

const _AccordionButton = React.forwardRef(AccordionButton);
export { _AccordionButton as AccordionButton };
