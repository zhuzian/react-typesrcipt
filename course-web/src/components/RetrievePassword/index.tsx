import React, {useEffect} from 'react'

import {Form, Card, Steps, Input, Button} from 'antd'
import CommonFooter from '../CommonFooter'
import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
import QueryCom from './query'
import ResetCom from './reset'
import SuccessCom from './success'
import './index.less'

const RetrievePassword = () => {
  const {Step} = Steps
  const history = useHistory()


  return (
    <div className="login-root">
      <Switch>
        <Route path="/retrieve/query" component={QueryCom}></Route>
        <Route path="/retrieve/reset" component={ResetCom}></Route>
        <Route path="/retrieve/success" component={SuccessCom}></Route>
      </Switch>
      <div className="footer-container">
        <CommonFooter color="blue" />
      </div>
    </div>
  )
}

export default RetrievePassword
