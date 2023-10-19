type SetCookieType = {
  key: string;
  value: string;
  days?: number;
};

export const setCookie = ({ key, value, days = 1 }: SetCookieType) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  const expires = 'expires=' + date.toUTCString();

  document.cookie = `${key}=${value};` + expires + '; path=/';
};
