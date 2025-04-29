/**
 * Sampatti toast message utils
 */
import { toast } from "react-toastify";
import { redirectPageLazy } from "./utils";

const UpdateToast = (id: number, message: string, typee: string) => {
  toast.update(id, {
    render: message,
    type: typee,
    isLoading: false,
    autoClose: 7000,
    draggable: true,
    closeButton: true,
  });
};

export const loadingToast = (message: string, options: any) => {
  return toast.loading(message, options);
};

export const errorToast = (id: number, message: string) => {
  UpdateToast(id, message, "error");
};

export const successToast = (
  id: number,
  message: string,
  successUrl: string
) => {
  UpdateToast(id, message, "success");
  if (successUrl) {
    redirectPageLazy(successUrl);
  }
};
