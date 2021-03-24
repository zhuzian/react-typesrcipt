import { REFRESH_TOKEN, TOKEN } from "../constants";
import { LoginForm } from "../models/login-form";
import mAxios, { setToken } from "./m-axios";

export const Login = (form: LoginForm) => {
  return mAxios({
    method: "post",
    url: "/admin/login",
    data: form,
  }).then((res) => {
    if (res.data.code === 200) {
      console.log("login suceess");

      sessionStorage.setItem(TOKEN, res.headers[TOKEN]);
      sessionStorage.setItem(REFRESH_TOKEN, res.headers[REFRESH_TOKEN]);
      setToken();
      console.log(mAxios.defaults);
    }
    return res.data;
  });
};

export const hasLogin = (): boolean => {
  console.log("process.env.REACT_APP_STATUS", process.env.REACT_APP_STATUS);
  
  if (process.env.REACT_APP_STATUS === "no_login") {
    return true;
  }
  return !!sessionStorage.getItem(TOKEN);
};

export const SendSms = (phone: string) => {
  return mAxios({
    method: "post",
    url: "/admin/send_sms",
    data: {
      phone: phone,
    },
  }).then((res) => res.data);
};
