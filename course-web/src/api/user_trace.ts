import { UserTrace } from "../models/user_trace";
import mAxios from "./m-axios";

export const addTrace = (trace: UserTrace) => {
  return mAxios({
    method: "post",
    url: "/admin/company/trace/add",
    data: trace,
  }).then((res) => res.data);
};

export const editTrace = (trace: UserTrace) => {
  return mAxios({
    method: "post",
    url: "/admin/company/trace/edit",
    data: trace,
  }).then((res) => res.data);
};

export const delTrace = (trace: UserTrace) => {
  return mAxios({
    method: "post",
    url: "/admin/company/trace/del",
    data: trace,
  }).then((res) => res.data);
};

export const getTraces = (company_id: string) => {
  return mAxios({
    method: "post",
    url: "/admin/company/trace/list",
    data: {
      company_id: company_id,
    },
  }).then((res) => res.data);
};
