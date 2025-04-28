/**
 * Sampatti Web Utilities
 */
export const setLocalStorage = (instance: { key: string; value: string }) => {
  localStorage.setItem(instance.key, instance.value);
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
