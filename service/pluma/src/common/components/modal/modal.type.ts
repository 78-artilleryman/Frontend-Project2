import { FormEvent, PropsWithChildren } from "react";

export interface ModalContextStates {
  title?: string;
  outlineButtonTitle?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onCloseModal: () => void;
  // eslint-disable-next-line no-unused-vars
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export interface ModalContextValues extends PropsWithChildren {
  value: ModalContextStates;
  className?: string;
}
