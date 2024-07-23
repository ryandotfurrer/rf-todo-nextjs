export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getTask = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const removeTask = (key: string) => {
  localStorage.removeItem(key);
};
