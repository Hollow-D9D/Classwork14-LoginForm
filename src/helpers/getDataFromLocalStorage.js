export function getDataFromLocalStorage(key) {
  if (localStorage) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return false;
  }
}
