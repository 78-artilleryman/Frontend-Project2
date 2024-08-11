import { PropsWithChildren } from "react";
import { toastContainerStyle } from "./style.css";

export function ToastContainer({ children }: PropsWithChildren<object>) {
  return (
    <div id="toast-container" tabIndex={-1} className={toastContainerStyle}>
      {children}
    </div>
  );
}
