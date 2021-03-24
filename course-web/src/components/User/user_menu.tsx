import React from 'react'
import {
  UserOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons'

export const UserTypes = {
  Admin: 1,
  Sales: 2,
  Maintainer: 3,
  School: 4,
  Teacher: 5,
}

const teacherMenu = [
  {
    path: '/user/info',
    name: '账号信息',
    icon: <UserOutlined />,
  },
  // {
  //   path: "/user/collections",
  //   name: "我的收藏",
  // },
  // {
  //   path: "/user/uploads",
  //   name: "我的上传",
  // },
  // {
  //   path: "/user/downloads",
  //   name: "我的下载",
  // },
  {
    path: '/user/messages',
    name: '我的消息',
    icon: <MessageOutlined />,
  },
  {
    path: '/user/suggestions',
    name: '使用建议',
    icon: <QuestionCircleOutlined />,
  },
]

const schoolMenu = [
  {
    path: '/user/info',
    name: '账号信息',
    icon: <UserOutlined />,
  },
  {
    path: '/user/teachers',
    name: '教师管理',
    icon: <TeamOutlined />,
  },
  {
    path: '/user/messages',
    name: '消息中心',
    icon: <MessageOutlined />,
  },
  {
    path: '/user/suggestions',
    name: '使用建议',
    icon: <QuestionCircleOutlined />,
  },
]

export const UserMenuMap = {
  [UserTypes.Admin]: teacherMenu,
  [UserTypes.Maintainer]: teacherMenu,
  [UserTypes.Sales]: teacherMenu,
  [UserTypes.School]: schoolMenu,
  [UserTypes.Teacher]: teacherMenu,
}
