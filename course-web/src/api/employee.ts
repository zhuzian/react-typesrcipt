import { Employee } from "../models";
import mAxios from "./m-axios";

export const getEmployees = (page?: number) => {
  return mAxios({
    method: "post",
    url: "/admin/employee/list",
    data: page ? { page: page } : {},
  }).then((res) => {
    console.log(res);
    
    return res.data
  });
};


export const addEmployee = (employee: Employee) => {
  return mAxios({
    method: 'post',
    url:'/admin/employee/add',
    data: employee
  }).then(res => res.data)
}

export const delEmployee = (employee: Employee) => {
  return mAxios({
    method:'post',
    url:'/admin/employee/del',
    data:employee
  }).then(res => res.data)
}

export const editEmployee = (employee: Employee) => {
  return mAxios({
    method:'post',
    url:'/admin/employee/edit',
    data: employee
  }).then(res => res.data)
}