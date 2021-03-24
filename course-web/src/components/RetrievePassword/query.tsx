import React from 'react'
import {Card, Steps, Form, Button, Input, Row, Col} from 'antd'
import RetrieveSteps from './retrieve_steps'
import {useHistory} from 'react-router-dom'
const QueryCom = () => {
  const {Step} = Steps
  const history = useHistory()

  const goNext = values => {
    history.push('/retrieve/reset')
  }

  return (
    <>
      <Card className="retrieve-form-card">
        <RetrieveSteps />
        <Form onFinish={goNext}>
          <Form.Item name="phone">
            <Input size="large" className="login-input" placeholder="请输入手机号" />
          </Form.Item>
          <Row justify="space-between">
            <Col span={14}>
              <Form.Item name="captcha">
                <Input.Password
                  size="large"
                  className="login-input"
                  placeholder="请输入验证码"
                  autoComplete="new-password"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Button className="login-captcha-button" size="large">
                获取验证码
              </Button>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
              下一步
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default QueryCom
