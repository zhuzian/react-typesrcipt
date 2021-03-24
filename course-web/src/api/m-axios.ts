import axios from "axios";
import { ErrCode, MEvents, REFRESH_TOKEN, TOKEN } from "../constants";
const mAxios = axios.create({
  headers: {
    common: {
      "x-c-token": sessionStorage.getItem(TOKEN)
        ? sessionStorage.getItem(TOKEN)
        : "",
    },
  },
});

mAxios.interceptors.request.use((req) => {
  if (sessionStorage.getItem(MEvents.TokenError) !== null) {
    return Promise.reject();
  }

  return Promise.resolve(req);
});
mAxios.interceptors.response.use((response) => {
  let config = { ...response.config }; // 请求配置
  if (response.data.code === ErrCode.TokenTimeout) {
    return handleTimeout(config);
  } else if (response.data.code === ErrCode.TokenError) {
    return handleTokenError();
  }

  // if (response.config.url?.endsWith("/token/refresh")) {
  //   return Promise.resolve()
  // }
  return Promise.resolve(response);
});

export const handleTimeout = (config) => {
  mAxios({
    method: "post",
    url: "/admin/token/refresh",
    headers: {
      "x-c-refresh-token": sessionStorage.getItem(REFRESH_TOKEN)
        ? sessionStorage.getItem(REFRESH_TOKEN)
        : "",
    },
  }).then((res) => {
    // 刷新之后重新设置token
    if (res.data.code === ErrCode.OK) {
      sessionStorage.setItem(TOKEN, res.headers[TOKEN]);
      sessionStorage.setItem(REFRESH_TOKEN, res.headers[REFRESH_TOKEN]);
      setToken();
      config.headers[TOKEN] = sessionStorage.getItem(TOKEN);
    }
  });

  // 1s 之后重新发起请求
  const backoff = new Promise((reslove) => {
    setTimeout(reslove, 1000);
  });

  return backoff.then(() => mAxios(config));
};

const handleTokenError = () => {
  dispatchEvent(new Event(MEvents.TokenError));
  return Promise.reject();
};

export const setToken = () => {
  mAxios.defaults.headers.common[TOKEN] = sessionStorage.getItem(TOKEN)
    ? sessionStorage.getItem(TOKEN)
    : "";
};

export default mAxios;
