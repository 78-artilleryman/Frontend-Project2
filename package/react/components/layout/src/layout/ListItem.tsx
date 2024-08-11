import * as React from "react";
import { Text } from "../typography";
import { ListItemProps } from "./types";

const ListItem = (props: ListItemProps, ref: React.Ref<HTMLLIElement>) => {
  return <Text {...props} ref={ref} as="li" />;
};

const _ListItem = React.forwardRef(ListItem);
export { _ListItem as ListItem };
