import {Avatar, Col, Menu, Popover, Row} from 'antd'
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {mockGrades, mockUser} from '../../api/mock'
import {DownOutlined} from '@ant-design/icons'
import menus from './menus'
import './header.less'
import {url} from 'inspector'

const userPopups = (
  <div className="common-header-user-popup-items">
    <p>账号信息</p>
    <p>消息中心</p>
    <p>空间</p>
    <p>上传</p>
    <p>退出</p>
  </div>
)

const Header = () => {
  const history = useHistory()
  const user = mockUser()

  const [selectedKey, setSelectedKey] = useState('/home')

  // 加载时，依据目录高亮对应的导航栏
  useEffect(() => {
    console.log(history.location)
    let path = history.location.pathname

    menus.forEach(menu => {
      if (path.includes(menu.path)) {
        setSelectedKey(menu.path)
        return
      }
    })

    setSelectedKey('')
  }, [])

  // 选择导航菜单按钮
  const selectKey = ({key}) => {
    let path = key
    if (key === '/grades') {
      path = path + '/' + mockGrades[0].grades[0].key
    }
    history.push(path)
    setSelectedKey(key)
  }

  return (
    <>
      <div className="common-header">
        <div
          className="common-header-icon"
          style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/course_icon.svg)`}}
        ></div>
        <div className="common-header-title" onClick={() => selectKey({key: '/home'})}>
          AI教育资源云平台
        </div>
        <Menu
          theme="dark"
          onClick={selectKey}
          mode="horizontal"
          className="common-header-menu"
          selectedKeys={[selectedKey]}
        >
          {menus.map(menu => (
            <Menu.Item className="common-header-item" key={menu.path}>
              {menu.title}
            </Menu.Item>
          ))}
        </Menu>
        <div className="common-header-user-group" onClick={() => selectKey({key: '/user/info'})}>
          <Avatar className="common-header-user-avatar" src={user.avatar}></Avatar>
          <div className="common-header-username">{user.name}</div>
          <Popover
            className="common-header-user-popup"
            trigger="hover"
            content={userPopups}
            placement="bottomRight"
          >
            <DownOutlined />
          </Popover>
        </div>
      </div>
    </>
  )
}

export default Header
