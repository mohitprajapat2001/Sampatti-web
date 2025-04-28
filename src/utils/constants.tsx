/**
 * Sampatti Constants
 */

export const HTTP = "http://";
export const HTTPS = "https://";
export const HOST = "127.0.0.1:";
export const PORT = "8000/";
export const ApiUrl = HTTP + HOST + PORT;

export const UrlPaths = {
  LOGIN: "users/login/",
  REFRESH: "users/login/refresh/",
  REGISTER: "users/register/",
};

export const getApiUrl = (path: string) => {
  const urlPath = UrlPaths[path as keyof typeof UrlPaths];
  if (!urlPath) {
    throw new Error(`Invalid URL path: ${path}`);
  }
  return ApiUrl + urlPath;
};
