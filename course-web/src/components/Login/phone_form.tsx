import React, {useState, useEffect} from 'react'
import {Button, Form, Input, Row, Col, Card, Radio} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'

import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import API from '../../api'

import {login} from '../../actions'

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 24,
  },
}

const buttonItemLayout = {
  wrapperCol: {
    span: 20,
    offset: 2,
  },
}

const phoneRules = [
  {
    required: true,
    message: '请输入正确的手机号码!',
    pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
  },
]

const captchaRules = [
  {
    required: true,
    message: '请输入正确的验证码！',
    pattern: /^\d{6}$/,
  },
]
const PhoneForm = () => {
  const [form] = Form.useForm()
  const [sendingCaptcha, setSendingCaptcha] = useState(false)
  const [countDown, setCountDown] = useState(60)
  let history = useHistory()
  const dispatch = useDispatch()

  const onFinish = values => {
    console.log('succeed', values)
    // TODO: 此处返回Promise但是不能使用then？后续关注 添加login 逻辑
    // https://github.com/reduxjs/react-redux/issues/1544
    history.push('/')
  }

  const onFinishFailed = errorInfo => {
    console.log('failed', errorInfo)
  }

  useEffect(() => {
    var cInterval
    if (sendingCaptcha) {
      cInterval = setInterval(() => {
        setCountDown(countDown - 1)
      }, 1000)
    }

    if (countDown === 0) {
      clearInterval(cInterval)
      setSendingCaptcha(false)
    }
    return () => {
      clearInterval(cInterval)
    }
  }, [sendingCaptcha, countDown])
  const handleClickCaptcha = () => {
    API.SendSms(form.getFieldValue('phone')).then(res => {
      setSendingCaptcha(true)
    })
  }

  return (
    <>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        {...formItemLayout}
        form={form}
        labelAlign="left"
        className="login-form"
      >
        <Form.Item name="phone" rules={phoneRules} validateTrigger="onSubmit">
          <Input
            size="large"
            placeholder="请输入手机号"
            className="login-input"
          />
        </Form.Item>
        <Form.Item style={{marginBottom: 0}}>
          <Row justify="space-between" >
            <Col span={14}>
              <Form.Item name="captcha" rules={captchaRules} validateTrigger="onSubmit">
                <Input
                  size="large"
                  placeholder="请输入短信验证码"
                  className="login-input"
                  autoComplete="new-password"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Button
                onClick={handleClickCaptcha}
                disabled={sendingCaptcha}
                className="login-captcha-button"
                size="large"
              >
                {sendingCaptcha ? countDown + 's' : '获取验证码'}
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" size="large">
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default PhoneForm
