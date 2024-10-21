import { Input, InputGroup, InputLeftAddon } from "@byeonghyeon/react-components-input";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "@byeonghyeon/react-components-input/style.css";

const meta: Meta<typeof Input> = {
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputStory: Story = {
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
