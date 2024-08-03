import { Button as _Button } from "@byeonghyeon/react-components-button";
import "@byeonghyeon/react-components-button/style.css";
import { vars } from "@byeonghyeon/themes";

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
