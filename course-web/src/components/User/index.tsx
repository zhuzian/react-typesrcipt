import React, {useEffect} from 'react'
import {Avatar, Layout, Menu} from 'antd'
import {useHistory, Switch, Route, Redirect} from 'react-router-dom'
import UserInfo from './user_info'
import CollectionsCom from './collections'
import UploadCom from './uploads'
import DownloadCom from './downloads'
import SuggestionCom from './suggestions'
import MessageCom from './messages'
import {UserMenuMap, UserTypes} from './user_menu'
import './user.less'

const UserCom = () => {
  const {Sider, Content} = Layout
  const history = useHistory()

  // 选择并高亮用户导航
  const selectKey = ({key}) => {
    history.push(key)
  }

  useEffect(() => {
    if (history.location.pathname == '/user') {
      history.push('/user/info')
    }
  }, [])
  return (
    <>
      <Layout className="user-layout">
        <Sider theme="light" className="user-layout-sider" width={240}>
          <Menu onClick={selectKey}>
            {UserMenuMap[UserTypes.Teacher].map(item => (
              <Menu.Item key={item.path} className="user-menu-item">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content className="user-layout-content">
          <Switch>
            <Route path="/user/info" component={UserInfo}></Route>
            <Route path="/user/collections" component={CollectionsCom}></Route>
            <Route path="/user/uploads" component={UploadCom}></Route>
            <Route path="/user/downloads" component={DownloadCom}></Route>
            <Route path="/user/suggestions" component={SuggestionCom}></Route>
            <Route path="/user/messages" component={MessageCom}></Route>
          </Switch>
        </Content>
      </Layout>
    </>
  )
}

export default UserCom
