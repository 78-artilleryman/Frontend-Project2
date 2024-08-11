import "@byeonghyeon/react-components-button/style.css";
import { Button } from "@byeonghyeon/react-components-button";
import { ToastProvider, useToast } from "@byeonghyeon/react-components-toast";
import React from "react";
import "@byeonghyeon/react-components-toast/style.css";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
};

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

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
