import React, {useState, useEffect} from 'react'

import {Button, Form, Input, Row, Col, Card, Radio} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import './login.less'
import PasswordForm from './password_form'
import PhoneForm from './phone_form'
import CommonFooter from '../CommonFooter'

const loginTypes = {
  phone: 'phone',
  password: 'password',
}

const Login = () => {
  const [loginType, setLoginType] = useState(loginTypes.password)

  const changeLoginType = e => {
    setLoginType(e.target.value)
  }

  return (
    <>
      <div className="login-root">
        <div className="login-form-card">
          <div className="login-form-title">
            <div className="title  bold">AI教育资源云平台</div>
            <div className="small" style={{textAlign: 'center'}}>
              提供专业的AI教育资源
            </div>
          </div>
          <div className="login-form-type-outer">
            <div
              className={`login-form-type bold  ${
                loginType === loginTypes.password ? 'login-form-type-active' : ''
              }`}
              onClick={() => setLoginType(loginTypes.password)}
            >
              账号登录
            </div>
            <div
              className={`login-form-type bold  ${
                loginType === loginTypes.phone ? 'login-form-type-active' : ''
              }`}
              onClick={() => setLoginType(loginTypes.phone)}
            >
              手机号登录
            </div>
          </div>

          {loginType === loginTypes.password ? <PasswordForm /> : <PhoneForm />}
        </div>
        <div className="footer-container">
          <CommonFooter color="blue" />
        </div>
      </div>
    </>
  )
}

export default Login
