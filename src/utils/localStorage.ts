const getState = (key: string): string | null => {
  try {
    return JSON.parse(localStorage.getItem(key) as string);
  } catch (err) {
    return '';
  }
};

const setState = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    // console.error(err);
  }
};

const removeState = (key: string): void => {
  localStorage.removeItem(key);
};

export { getState, setState, removeState };
