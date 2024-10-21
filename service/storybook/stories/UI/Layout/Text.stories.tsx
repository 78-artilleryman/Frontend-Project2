import { Text as _Text } from "@byeonghyeon/react-components-layout";
import "@byeonghyeon/react-components-layout/style.css";
import { classes, vars } from "@byeonghyeon/themes";

export default {
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["p", "span", "div", "b", "i", "u", "strong", "em"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const Text = {
  args: {
    as: "p",
    fontSize: "sm",
    children: "test",
  },
};
