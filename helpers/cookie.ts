import Cookie from "js-cookie";

export const getDataFromCookie = (key: string) => {
  return Cookie.get(key);
};

export const setDataFromCookie = (key: string, value: any) => {
  Cookie.set(key, value);
};