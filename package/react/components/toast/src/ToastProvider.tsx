import { PropsWithChildren, useContext, useRef, useState } from "react";
import { Toast } from "./Toast";
import { ToastContainer } from "./ToastContainer";
import { ToastConfigProps, ToastContext } from "./ToastContext";
import { ToastPayload } from "./types";

export const ToastProvider = ({ children }: PropsWithChildren<object>) => {
  const [toastPayload, setToastPayload] = useState<ToastPayload | undefined>(undefined);
  const [isExiting, setIsExiting] = useState(false); // 사라지는 상태 관리

  const timeoutRef = useRef<number | undefined>(undefined);

  const handleToast = (toastProps: ToastConfigProps) => {
    const { duration = 3000 } = toastProps;

    if (toastPayload) {
      // 기존 토스트 제거
      setIsExiting(true); // 사라지는 애니메이션 시작
      clearTimeout(timeoutRef.current);

      timeoutRef.current = window.setTimeout(() => {
        setToastPayload(undefined); // 애니메이션 후 제거
        setIsExiting(false); // 애니메이션 초기화
      }, 300); // 애니메이션 지속 시간
    }

    // 새로운 토스트 설정
    setTimeout(() => {
      setToastPayload(toastProps.payload);
      timeoutRef.current = window.setTimeout(() => {
        setIsExiting(true); // 사라질 때 애니메이션 시작
        setTimeout(() => {
          setToastPayload(undefined); // 애니메이션 후 토스트 제거
          setIsExiting(false); // 애니메이션 초기화
        }, 300); // 사라질 때 애니메이션 지속 시간
      }, duration);
    }, 300); // 기존 토스트 사라진 후 새로운 토스트가 나타나도록 대기
  };

  return (
    <ToastContext.Provider value={{ toast: handleToast }}>
      {children}
      <ToastContainer>{toastPayload && <Toast {...toastPayload} isExiting={isExiting} />}</ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
