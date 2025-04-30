/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Default Success Callbacks
 */
import { setLocalStorage } from "@/utils/utils";
import { successToast } from "./message-utils";
import { SuccessMessage } from "./success-messages";
import { Id } from "react-toastify";
import { RoutesPaths } from "./constants";
/**
 * Login success callback stores refresh and access token in localstorage
 * @param response
 */
export function loginSuccess(id: Id, response: any) {
  setLocalStorage(response.data);
  successToast(id, SuccessMessage.LOGIN, RoutesPaths.DASHBOARD);
}

/**
 * Register success callback: validates create response and redirect to `login/` url
 * @param response
 */
export function registerSuccess(id: Id, response: any) {
  if (response.status == 201) {
    successToast(
      id,
      SuccessMessage.REGISTER(response.data.username),
      RoutesPaths.LOGIN
    );
  }
}
