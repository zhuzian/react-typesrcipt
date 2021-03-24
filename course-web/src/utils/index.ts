import qs from "query-string";

export function parseQuery() {
  return qs.parseUrl(window.location.href).query;
}

export const checkLogin = (permits: any): boolean =>
  (process.env.NODE_ENV === "production" && !!permits) ||
  process.env.NODE_ENV === "development";

export const timestamp2Date = (timestamp: number): String => {
  let time = new Date(timestamp);
  let year = time.getFullYear();
  let month = (time.getMonth() + 1).toString().padStart(2, "0");
  let date = time.getDate().toString().padStart(2, "0");
  return year + "-" + month + "-" + date;
};
