/**
 * Sampatti Web Utilities
 */
export const setLocalStorage = (instance: { [key: string]: string }) => {
  for (const key in instance) {
    localStorage.setItem(key, instance[key]);
  }
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const redirectPage = (url: string) => {
  window.location.href = url;
};

export const redirectPageLazy = (url: string) => {
  setTimeout(() => {
    window.location.href = url;
  }, 1000);
};

/**
 * Get Access Token Header
 */
export function getAccessTokenHeader() {
  return {
    headers: {
      Authorization: `Bearer ${getLocalStorage("access")}`,
    },
  };
}
