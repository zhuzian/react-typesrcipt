import {Col, Divider, Row} from 'antd'
import React from 'react'
import './footer.less'
interface Props {
  color: 'blue' | 'black'
}

const OfficialWebsite = 'http://www.glitech.com'
const BeianWebsite = 'https://beian.miit.gov.cn'

const CommonFooter: React.FC<Props> = ({color}) => {
  const style =
    color === 'blue'
      ? {
          color: '#ffffff',
        }
      : {
          color: '#ffffff',
        }

  return (
    <Row className="footer-outer" justify="center">
      <Col style={{cursor: 'pointer'}} onClick={() => window.open(OfficialWebsite)}>
        深圳果力智能科技有限公司
      </Col>
      <Divider type="vertical" style={{backgroundColor: '#fff', width: 2, top: 12}} />
      <Col style={{cursor: 'pointer'}} onClick={() => window.open(BeianWebsite)}>
        粤ICP备17164410号
      </Col>
    </Row>
  )
}

export default CommonFooter
