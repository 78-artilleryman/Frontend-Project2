import { createContext } from "react";
import { ToastPayload } from "./types";

export type ToastConfigProps = {
  payload: ToastPayload;
  duration?: number;
};

export type ToastContextType = {
  // eslint-disable-next-line no-unused-vars
  toast: (toastProps: ToastConfigProps) => void;
};

export const ToastContext = createContext<ToastContextType>({
  toast: () => {},
});
