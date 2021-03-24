import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Card, Form, Input, Result} from 'antd'
import {SmileOutlined} from '@ant-design/icons'

const SuccessCom = () => {
  const history = useHistory()

  return (
    <>
      <Card className="retrieve-form-card">
        <Result
          icon={<SmileOutlined style={{color: '#32cd32'}} />}
          title="重置密码成功！"
          extra={
            <Button type="primary" size="large" onClick={() => history.push('/')}>
              去登陆
            </Button>
          }
        />
      </Card>
    </>
  )
}

export default SuccessCom
