/**
 * Sampatti toast message utils
 */
import { toast, Id, TypeOptions } from "react-toastify";
import { redirectPageLazy } from "./utils";

// eslint-disable-next-line react-refresh/only-export-components
const UpdateToast = (id: Id | null, message: string, typee: string) => {
  if (!id) {
    return;
  }
  toast.update(id, {
    render: message,
    type: typee as TypeOptions,
    isLoading: false,
    autoClose: 7000,
    draggable: true,
    closeButton: true,
  });
};

export const loadingToast = (message: string, options: object | null) => {
  if (options) {
    return toast.loading(message, options);
  }
  return toast.loading(message);
};

export const errorToast = (id: Id | null | null, message: string) => {
  UpdateToast(id, message, "error");
};

export const successToast = (
  id: Id | null,
  message: string,
  successUrl: string
) => {
  UpdateToast(id, message, "success");
  if (successUrl) {
    redirectPageLazy(successUrl);
  }
};
