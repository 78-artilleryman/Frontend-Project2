import { Button as _Button } from "@byeonghyeon/react-components-button";
import "@byeonghyeon/react-components-button/style.css";
import "@byeonghyeon/react-components-layout/style.css";
import { Text } from "@byeonghyeon/react-components-layout";
import { useButton, useToggleButton } from "@byeonghyeon/react-hooks-button";
import { vars } from "@byeonghyeon/themes";
import React from "react";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    isDisabled: false,
    leftIcon: "🎱",
    isLoading: false,
  },
};

export const TextButtonStory = {
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

export const ToggleButtonStory = {
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
