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
  id: number,
  config: AxiosRequestConfig = {},
  callback?: (id: number, response: AxiosResponse) => void
) {
  try {
    const response = await axios({
      url,
      method,
      data,
      ...config,
    });
    if (response.status === 200)
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
        config,
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
  id: number,
  config: AxiosRequestConfig = {},
  callback?: (id: number, response: AxiosResponse) => void
) {
  return axiosRequest(url, "GET", null, id, config, callback);
}

/**
 * Common function for POST requests
 */
export async function postRequest(
  url: string,
  data: any,
  id: number,
  config: AxiosRequestConfig = {},
  callback?: (id: number, response: AxiosResponse) => void
) {
  return axiosRequest(url, "POST", data, id, config, callback);
}

/**
 * Common function for PATCH requests
 */
export async function patchRequest(
  url: string,
  data: any,
  id: number,
  config: AxiosRequestConfig = {},
  callback?: (id: number, response: AxiosResponse) => void
) {
  return axiosRequest(url, "PATCH", data, id, config, callback);
}

/**
 * Common function for PUT requests
 */
export async function putRequest(
  url: string,
  data: any,
  id: number,
  config: AxiosRequestConfig = {},
  callback?: (id: number, response: AxiosResponse) => void
) {
  return axiosRequest(url, "PUT", data, id, config, callback);
}

/**
 * Common function for DELETE requests
 */
export async function deleteRequest(
  url: string,
  id: number,
  config: AxiosRequestConfig = {},
  callback?: (id: number, response: AxiosResponse) => void
) {
  return axiosRequest(url, "DELETE", null, id, config, callback);
}
