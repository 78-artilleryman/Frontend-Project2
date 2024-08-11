import { vars } from "@byeonghyeon/themes";
import * as React from "react";
import { Flex } from "./Flex";
import { OrderListProps } from "./types";

function OrderedList(props: OrderListProps, ref: React.Ref<HTMLOListElement>) {
  const { spacing = 3, children, ...rest } = props;

  return (
    <Flex
      {...rest}
      as="ol"
      ref={ref}
      direction="column"
      style={{ gap: vars.box.spacing[spacing], listStyleType: "decimal" }}>
      {children}
    </Flex>
  );
}

const _OrderedList = React.forwardRef(OrderedList);
export { _OrderedList as OrderedList };
