import { Grid as _Grid } from "@byeonghyeon/react-components-layout";
import { GridItem as _GridItem } from "@byeonghyeon/react-components-layout";
import "@byeonghyeon/react-components-layout/style.css";
import * as React from "react";

export default {
  component: _Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const GridStory = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    templateColumns: "repeat(2, 1fr)",
    columnGap: "",
    gap: "",
    rowGap: "",
    templateAreas: "",
    style: {
      width: "300px",
    },
  },
  render: args => (
    <_Grid {...args}>
      <_GridItem style={{ width: "100%", textAlign: "center" }}>GridItem1</_GridItem>
      <_GridItem style={{ width: "100%", textAlign: "center" }}>GridItem2</_GridItem>
    </_Grid>
  ),
};
