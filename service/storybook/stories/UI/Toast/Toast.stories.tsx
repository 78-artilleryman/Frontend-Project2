import "@byeonghyeon/react-components-button/style.css";
import { Button } from "@byeonghyeon/react-components-button";
import { ToastProvider, useToast } from "@byeonghyeon/react-components-toast";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "@byeonghyeon/react-components-toast/style.css";

const meta: Meta<typeof ToastProvider> = {
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Toast 메시지",
          },
        })
      }>
      Toast Button
    </Button>
  );
};

export const ToastStory: Story = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
