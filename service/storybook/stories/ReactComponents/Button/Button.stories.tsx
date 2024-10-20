import { Button as _Button } from "@byeonghyeon/react-components-button";
import "@byeonghyeon/react-components-button/style.css";
import "@byeonghyeon/react-components-layout/style.css";
import { Text } from "@byeonghyeon/react-components-layout";
import { useButton, useToggleButton } from "@byeonghyeon/react-hooks-button";
import { vars } from "@byeonghyeon/themes";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof _Button> = {
  component: _Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      control: { type: "select" },
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: { type: "select" },
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof _Button>;

export const ButtonStory: Story = {
  args: {
    size: "lg",
    children: "Button",
    isDisabled: false,
    leftIcon: "🎱",
    isLoading: false,
  },
};

export const ButtonTestStory: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { buttonProps } = useToggleButton({ elementType: "button" }, false);

    return (
      <_Button {...buttonProps} color="gray" leftIcon="🎱">
        Button
      </_Button>
    );
  },
};

export const TextButtonStory: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { buttonProps } = useButton({
      elementType: "div",
    });

    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="blackAlpha"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}>
        텍스트 버튼입니다.
      </Text>
    );
  },
};

export const ToggleButtonStory: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { buttonProps, isSelected } = useToggleButton({ elementType: "button" }, false);

    return (
      <_Button {...buttonProps} variant={isSelected ? "solid" : "outline"} color="yellow">
        {isSelected ? "🌚" : "🌝"}
      </_Button>
    );
  },
};
