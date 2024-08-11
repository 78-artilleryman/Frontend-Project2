import { Input, InputGroup, InputLeftAddon } from "@byeonghyeon/react-components-input";
import React from "react";
import "@byeonghyeon/react-components-input/style.css";

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

export const InputGroupStory = {
  render: () => (
    <InputGroup size="lg" color="red">
      <InputLeftAddon>$</InputLeftAddon>
      <Input placeholder="placeholder" />
    </InputGroup>
  ),
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
