import { Company } from "../models/company";
import mAxios from "./m-axios";

export const getCompanies = (page?: number) => {
  return mAxios({
    method: "post",
    url: "/admin/company/list",
    data: page ? { page: page } : {},
  }).then((res) => res.data);
};

export const delCompany = (c: Company) => {
  return mAxios({
    method: "post",
    url: "/admin/company/del",
    data: c,
  }).then((res) => res.data);
};

export const addCompany = (c: Company) => {
  return mAxios({
    method: "post",
    url: "/admin/company/add",
    data: c,
  }).then((res) => res.data);
};

export const editCompany = (c: Company) => {
  return mAxios({
    method: "post",
    url: "/admin/company/edit",
    data: c,
  }).then((res) => res.data);
};
