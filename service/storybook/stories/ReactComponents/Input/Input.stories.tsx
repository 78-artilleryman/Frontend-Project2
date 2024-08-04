import React from "react";
import "@byeonghyeon/react-components-input/style.css";
import { Input } from "@byeonghyeon/react-components-input";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => <Input placeholder="placeholder" />,
};

export const InputVariantFilledStory = {
  render: () => <Input variant="filled" placeholder="placeholder" />,
};

export const InputFocusVisibleState = {
  render: () => <Input />,
  parameters: {
    pseudo: { focusVisible: true },
  },
};
