/**
 * Sampatti toast message utils
 */
import { toast, Id, TypeOptions } from "react-toastify";
import { redirectPageLazy } from "./utils";

/**
 * Trigger Toast
 * @param message string
 */
export const triggerToast = (
  errors?: { [key: string]: string },
  type?: string
) => {
  if (errors) {
    Object.entries(errors).forEach(([, value]) => {
      if (Array.isArray(value)) {
        toast(value[0], {
          type: type as TypeOptions,
        });
      } else {
        toast(String(value), {
          type: type as TypeOptions,
        });
      }
    });
  }
};

/**
 * Updates a toast with a new message and type
 * @param id Id of the toast to update
 * @param message New message to display
 * @param typee New type of the toast
 */
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

/**
 * Displays a toast with a loading spinner
 * @param message The message to display while the toast is loading
 * @param options Optional options to pass to the toast.loading function
 */
export const loadingToast = (message: string, options: object | null) => {
  if (options) {
    return toast.loading(message, options);
  }
  return toast.loading(message);
};

/**
 * Updates a toast with an error message
 * @param id Id of the toast to update. If null, creates a new toast
 * @param message The error message to display
 */
export const errorToast = (id: Id | null | null, message: string) => {
  UpdateToast(id, message, "error");
};

/**
 * Updates a toast with a success message and redirects to a given url
 * @param id Id of the toast to update. If null, creates a new toast
 * @param message The success message to display
 * @param successUrl The url to redirect to after displaying the success message.
 * If null, no redirect is performed
 */
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
