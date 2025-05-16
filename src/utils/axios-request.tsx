/* eslint-disable */
/**
 * Axios Requests
 */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  exception400,
  exception401,
  exception403,
  exception404,
  exception500,
} from "./exception-handling";
import { Id } from "react-toastify";
/**
 * Common function for axios requests
 * @param url string
 * @param method string
 * @param data any
 * @param id number
 * @param config AxiosRequestConfig
 * @param callback (response: AxiosResponse) => void
 */
export async function axiosRequest(
  url: string,
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  data: any = null,
  id: Id | null,
  add_bearer: boolean = true,
  callback?:
    | ((id: Id | null, response: AxiosResponse) => void)
    | undefined
    | null
) {
  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (add_bearer) {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  try {
    const response = await axios({
      url,
      method,
      data,
      ...config,
    });
    if (callback) {
      callback(id, response);
    }
    return response;
  } catch (error: any) {
    if (error.response.status === 400) {
      exception400(id, error.response.data);
    } else if (error.response.status === 401) {
      exception401(
        url,
        method,
        data,
        id,
        add_bearer,
        callback || (() => {}),
        error
      );
    } else if (error.response.status === 403) {
      exception403(id, error.response.data);
    } else if (error.response.status === 404) {
      exception404(id, error.response.data);
    } else if (error.response.status === 500) {
      exception500(id, error.response.data);
    }
  }
}

/**
 * Common function for GET requests
 */
export async function getRequest(
  url: string,
  id: Id | null,
  add_bearer: boolean = true,
  callback?: ((id: Id, response: AxiosResponse) => void) | null
) {
  return axiosRequest(url, "GET", null, id, add_bearer, callback);
}

/**
 * Common function for POST requests
 */
export async function postRequest(
  url: string,
  data: any,
  id: Id | null,
  add_bearer: boolean = true,
  callback?: ((id: Id, response: AxiosResponse) => void) | null
) {
  return axiosRequest(url, "POST", data, id, add_bearer, callback);
}

/**
 * Common function for PATCH requests
 */
export async function patchRequest(
  url: string,
  data: any,
  id: Id | null,
  add_bearer: boolean = true,
  callback?: ((id: Id, response: AxiosResponse) => void) | null
) {
  return axiosRequest(url, "PATCH", data, id, add_bearer, callback);
}

/**
 * Common function for PUT requests
 */
export async function putRequest(
  url: string,
  data: any,
  id: Id | null,
  add_bearer: boolean = true,
  callback?: ((id: Id, response: AxiosResponse) => void) | null
) {
  return axiosRequest(url, "PUT", data, id, add_bearer, callback);
}

/**
 * Common function for DELETE requests
 */
export async function deleteRequest(
  url: string,
  id: Id | null,
  add_bearer: boolean = true,
  callback?: ((id: Id, response: AxiosResponse) => void) | null
) {
  return axiosRequest(url, "DELETE", null, id, add_bearer, callback);
}
