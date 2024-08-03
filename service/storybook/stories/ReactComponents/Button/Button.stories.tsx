import { Button as _Button } from "@byeonghyeon/react-components-button";
import "@byeonghyeon/react-components-button/style.css";
import "@byeonghyeon/react-components-layout/style.css";
import { Text } from "@byeonghyeon/react-components-layout";
import { vars } from "@byeonghyeon/themes";
import { useButton } from "@byeonghyeon/react-hooks-button";
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