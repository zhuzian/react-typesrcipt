import mAxios from './m-axios'
import {Organization} from './organization'
export interface User {
  user_id: string
  name: string // 真实名称
  nickname: string // 昵称
  username: string // 登录名
  phone: string
  avatar?: string
  organization_id?: string
  organization?: Organization
  role?: string
  key?: number
}

export const newUser = (): User => ({
  user_id: '',
  name: '',
  phone: '',
  nickname: '',
  username: '',
})

export const getUserList = (page?: number) => {
  return mAxios({
    method: 'post',
    url: '/admin/user/list',
    data: page ? {page: page} : {},
  }).then(res => res.data)
}

export const addUser = (user: User) => {
  return mAxios({
    method: 'post',
    url: '/admin/user/add',
    data: user,
  }).then(res => res.data)
}

export const delUser = (user: User) => {
  return mAxios({
    method: 'post',
    url: '/admin/user/del',
    data: user,
  }).then(res => res.data)
}

export const editUser = (user: User) => {
  return mAxios({
    method: 'post',
    url: '/admin/user/edit',
    data: user,
  }).then(res => res.data)
}
