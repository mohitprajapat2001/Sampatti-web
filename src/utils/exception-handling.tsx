/* eslint-disable */
/**
 * Sampatti Default Exception handling
 */

import axios from "axios";
import { AxiosResponse } from "axios";
import { Id } from "react-toastify";
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  redirectPage,
} from "./utils";
import { getApiUrl } from "./constants";
import { axiosRequest } from "./axios-request";
import { errorToast } from "./message-utils";

const REFRESH_URL = getApiUrl("REFRESH");

async function refreshAccessToken() {
  const refresh = getLocalStorage("refresh");
  if (!refresh) {
    return false;
  }
  const response = await axios.post(REFRESH_URL, { refresh });
  if (response.status !== 200) {
    setLocalStorage(response.data);
    return true;
  } else {
    removeLocalStorage("access");
    removeLocalStorage("refresh");
    redirectPage("/login");
    return false;
  }
}

/**
 * Default 400 Bad request exception handling
 * @param id Id
 * @param errors any
 */
export const exception400 = (id: Id, errors: any) => {};

/**
 * Default 401 Unauthorized exception handling
 * @param url string
 * @param method string
 * @param data any
 * @param id Id
 * @param config any
 * @param callback ()=>{}
 * @param error any
 */
export const exception401 = async (
  url: string,
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  data: any,
  id: Id,
  config: any,
  callback: (id: Id, response: AxiosResponse) => void,
  error: any
) => {
  if (error.detail) {
    errorToast(id, error.detail);
  } else {
    errorToast(id, error.response.data.detail);
  }
  const status = await refreshAccessToken();
  if (status) {
    axiosRequest(url, method, data, id, config, callback);
  }
};

export const exception403 = (id: Id, errors: any) => {
  debugger;
};

export const exception404 = (id: Id, errors: any) => {
  debugger;
};

export const exception500 = (id: Id, errors: any) => {
  debugger;
};
