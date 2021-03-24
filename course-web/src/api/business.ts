import { Business } from "../models"
import mAxios from "./m-axios"

export const getBusinessList = (page?: number) => {
  return mAxios({
    method: 'post',
    url: '/admin/business/list',
    data: page ? {page: page} : {}
  }).then((res) => res.data)
}

export const addBusiness = (b: Business) => {
  return mAxios({
    method:'post',
    url:'/admin/business/add',
    data: b
  }).then(res => res.data)
}

export const editBusiness = (b: Business) => {
  return mAxios({
    method:'post',
    url:'/admin/business/edit',
    data:b
  }).then(res => res.data)
}

export const delBusiness = (b:Business) => {
  return mAxios({
    method:'post',
    url:'/admin/business/del',
    data: b
  }).then(res => res.data)
}