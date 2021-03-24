import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import MRouter from './routes'
import {Provider} from 'react-redux'
import store from './store'
import zhCN from 'antd/lib/locale/zh_CN'
import 'moment/locale/zh-cn'

import moment from 'moment'
import {ConfigProvider} from 'antd'
import {pdfjs} from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/scripts/pdf.worker.js`

moment.locale('zh-cn')

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <MRouter />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
