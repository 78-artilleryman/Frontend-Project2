import "@byeonghyeon/react-components-layout/style.css";
import { Box, Divider as _Divider } from "@byeonghyeon/react-components-layout";
import { vars } from "@byeonghyeon/themes";
import * as React from "react";

export default {
  component: _Divider,
  decorators: [
    Story => (
      <Box padding={3} style={{ width: "300px", height: "300px" }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const Divider = {
  args: {
    color: "gray",
    size: 1,
    variant: "solid",
    orientation: "horizontal",
  },
};
