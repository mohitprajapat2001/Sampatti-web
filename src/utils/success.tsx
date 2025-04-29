/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Default Success Callbacks
 */
import { setLocalStorage } from "@/utils/utils";
import { successToast } from "./message-utils";
import { SuccessMessage } from "./success-messages";
/**
 * Login success callback stores refresh and access token in localstorage
 * @param response
 */
export function loginSuccess(id: string, response: any) {
  setLocalStorage(response.data);
  successToast(id, SuccessMessage.LOGIN, "/");
}
