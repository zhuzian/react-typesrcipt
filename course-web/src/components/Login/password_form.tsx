import React, {useEffect, useState} from 'react'
import {Button, Checkbox, Col, Form, Input, Row} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import {useHistory} from 'react-router-dom'
import {RememberPasswordKey} from '../../api/constants'
import {time} from 'console'

const PasswordForm = () => {
  const [loginForm] = Form.useForm()
  const history = useHistory()

  const [rememberPassword, setRememberPassword] = useState(false)
  useEffect(() => {
    const str = localStorage.getItem(RememberPasswordKey)
    if (str === null) {
      console.log('reset password')

      loginForm.resetFields()
    } else {
      let savedInfo = JSON.parse(str)
      if (Date.now() > savedInfo.expiry) {
        loginForm.resetFields()
      }
      loginForm.setFields(JSON.parse(str))
    }
  }, [])

  const loginWithPassword = values => {
    console.log(values)
    history.push('/')
  }

  const retrievePassword = () => {
    history.push('/retrieve/query')
  }
  return (
    <>
      <Form
        onFinish={loginWithPassword}
        form={loginForm}
        initialValues={{username: '', password: ''}}
      >
        <Form.Item name="username">
          <Input size="large" className="login-input" placeholder="请输入用户名/手机号" />
        </Form.Item>

        <Form.Item name="password">
          <Input.Password size="large" className="login-input" placeholder="请输入密码" />
        </Form.Item>

        <div className="login-forget-password">
          <a type="link" onClick={retrievePassword}>
            忘记密码
          </a>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default PasswordForm
