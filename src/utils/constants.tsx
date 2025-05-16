/**
 * Sampatti Constants
 */

export const HTTP = "http://";
export const HTTPS = "https://";
export const HOST = "127.0.0.1:";
export const PORT = "8000/";
export const ApiUrl = HTTP + HOST + PORT;

export const UrlPaths = {
  /**
   * Static Urls
   */
  CITIES: "api/v1/cities/",
  CARD_TYPES: "api/v1/cardtypes/",
  ACCOUNT_TYPES: "api/v1/accounttypes/",
  ADDRESS_TYPES: "api/v1/addresstypes/",
  ACCOUNT_STATUS: "api/v1/accountstatus/",
  GENDERS: "api/v1/genders/",
  MARRITIAL_STATUS: "api/v1/marritialstatus/",
  QUESTIONS: "api/v1/questions/",
  TRANSACTION_TYPES: "api/v1/transactiontypes/",
  RELATIONSHIP: "api/v1/relationship/",

  /**
   * Account Urls
   */
  LOGIN: "users/login",
  REFRESH: "users/login/refresh",
  REGISTER: "users/register",
  AUTH_USER: "api/v1/users/me/",
  /**
   * Transaction Urls
   */
  TRANSACTION: "api/v1/transactions/",
};

export const getApiUrl = (path: string) => {
  const urlPath = UrlPaths[path as keyof typeof UrlPaths];
  if (!urlPath) {
    throw new Error(`Invalid URL path: ${path}`);
  }
  return ApiUrl + urlPath;
};

export const ignoreUrls = ["/login", "/login/", "/register", "/register/"];

export const RoutesPaths = {
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
};
