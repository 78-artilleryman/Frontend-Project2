import { Flex as _Flex } from "@byeonghyeon/react-components-layout";
import "@byeonghyeon/react-components-layout/style.css";
import * as React from "react";

export default {
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const FlexStory = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    style: {
      width: "300px",
    },
  },
  render: args => (
    <_Flex {...args}>
      <div>Flex</div>
      <div>Flex</div>
    </_Flex>
  ),
};
