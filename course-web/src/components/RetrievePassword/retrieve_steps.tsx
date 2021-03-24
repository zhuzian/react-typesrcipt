import React from 'react'

import {Steps} from 'antd'

const RetrieveSteps = () => {
  const {Step} = Steps

  return (
    <>
      <div className="title bold text-center" style={{marginBottom: 32}}>
        重置密码
      </div>

      <Steps current={0} style={{marginBottom: 32}}>
        <Step title="确认账号"></Step>
        <Step title="重置密码" />
      </Steps>
    </>
  )
}

export default RetrieveSteps
