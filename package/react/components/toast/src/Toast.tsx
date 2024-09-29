import { slideDown, toastStyle } from "./style.css";
import { ToastPayload } from "./types";

export const Toast = (props: ToastPayload) => {
  const { message } = props;

  return <div className={props.isExiting ? slideDown : toastStyle}>{message}</div>;
};
