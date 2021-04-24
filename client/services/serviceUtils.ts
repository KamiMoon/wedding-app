export const fetcher = (url: string, options = {}) =>
  fetch(url, options).then((res) => res.json());

export const contentType = "application/json";
export const headers = {
  Accept: contentType,
  "Content-Type": contentType,
};
