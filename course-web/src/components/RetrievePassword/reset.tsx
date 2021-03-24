import {Button, Card, Form, Input} from 'antd'
import React from 'react'
import {useHistory} from 'react-router-dom'
import RetrieveSteps from './retrieve_steps'

const ResetCom = () => {
  const history = useHistory()
  const resetPassword = values => {
    history.push('/retrieve/success')
  }
  return (
    <>
      <Card className="retrieve-form-card">
        <RetrieveSteps />

        <Form onFinish={resetPassword}>
          <Form.Item name="newPassword">
            <Input.Password placeholder="请输入新密码" size="large" autoComplete="new-password" />
          </Form.Item>
          <Form.Item name="queryPassword">
            <Input.Password placeholder="确认新密码" size="large" autoComplete="new-password" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" className="login-form-button" size="large">
              重置密码
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default ResetCom
