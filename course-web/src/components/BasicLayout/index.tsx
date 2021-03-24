import {Layout, Modal} from 'antd'
import {Redirect, Route, Switch, useHistory} from 'react-router-dom'

import React, {useEffect, useState, useCallback} from 'react'
import SideBar from '../SideBarNav'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import HomeInfo from '../HomeInfo'

import CommonHeader from '../CommonHeader'

import './basic-layout.less'
import {MEvents, REFRESH_TOKEN, TOKEN} from '../../constants'
import Grades from '../CourseOutline'
import CourseCom from '../Course'
import UserCom from '../User'
import ResourceCom from '../Resource'
import NewsCom from '../News'
import TrainCom from '../Train'
import PptPreview from '../PptPreview'

const {Header, Sider, Content, Footer} = Layout
const BasicLayout = () => {
  const history = useHistory()

  useEffect(() => {
    const handleTokenError = () => {
      if (sessionStorage.getItem(MEvents.TokenError) !== null) {
        return
      }
      sessionStorage.setItem(MEvents.TokenError, '1')

      Modal.warning({
        title: '登录超时',
        content: <div>由于长时间未操作，请重新登录。</div>,
        onOk() {
          sessionStorage.removeItem(TOKEN)
          sessionStorage.removeItem(REFRESH_TOKEN)
          history.push('/')
          sessionStorage.removeItem(MEvents.TokenError)
        },
      })
    }

    window.addEventListener(MEvents.TokenError, handleTokenError)
  }, [])

  const onEnterCourse = useCallback((Component, props) => {
    console.log(props)

    return <Component {...props} />
  }, [])

  return (
    <Layout className="main">
      <Header className="layout-header">
        <CommonHeader />
      </Header>
      <Content style={{overflow: "auto"}}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={HomeInfo}></Route>
          <Route path="/grades/:id" component={Grades}></Route>
          <Route path="/courses/:id" render={props => onEnterCourse(CourseCom, props)}></Route>
          <Route path="/ppts/:id" component={PptPreview} />
          <Route path="/user" component={UserCom}></Route>
          <Route exact path="/resource" component={ResourceCom} />
          <Route exact path="/news" component={NewsCom} />
          <Route exact path="/training" component={TrainCom} />
        </Switch>
      </Content>
      {/* <Footer></Footer> */}
    </Layout>
  )
}

export default BasicLayout
