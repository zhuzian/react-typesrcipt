import React from 'react'
import {Menu} from 'antd'
import {
  UserOutlined,
  HomeOutlined,
  MehOutlined,
  ProfileFilled,
  AccountBookOutlined,
} from '@ant-design/icons'
import {useHistory} from 'react-router-dom'
import './sidebar.less'

const SideBar = () => {
  const history = useHistory()

  const handleMenuClick = e => {
    console.log(e)
    history.push(e.key)
  }
  // const IcHome = createFromIconfontCN({scriptUrl: "//at.alicdn.com/t/font_2268326_r9njy7nktxl.js"})

  return (
    <>
      <div className="logo"></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleMenuClick}>
        <Menu.Item key="/" icon={<HomeOutlined />}>
          首页
        </Menu.Item>
        <Menu.Item key="/order" icon={<AccountBookOutlined />}>
          订单
        </Menu.Item>
        <Menu.Item key="/user" icon={<MehOutlined />}>
          客户
        </Menu.Item>
        <Menu.Item key="/employee" icon={<UserOutlined />}>
          员工
        </Menu.Item>
        <Menu.Item key="/order/type" icon={<ProfileFilled />}>
          业务类型
        </Menu.Item>
      </Menu>
    </>
  )
}

export default SideBar
