import React from 'react'
import {Course, CourseAnnex} from '../../api/course'
import {Button, Card} from 'antd'
import {useHistory} from 'react-router-dom'
import {mockPPT} from '../../api/mock'

interface Props {
  courseware: CourseAnnex
}
const Courseware: React.FC<Props> = ({courseware}) => {
  const history = useHistory()
  const previewPPT = () => {
    history.push('/ppts/' + mockPPT.annex_id)
  }

  const downloadFile = () => {
    const el = document.createElement('a')
    el.href = mockPPT.url
    el.download = 'test.pptx'
    document.body.appendChild(el)
    el.click()
    document.body.removeChild(el)
  }

  return (
    <>
      <div
        className="annex-card"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/courseware.png)`}}
        onClick={previewPPT}
      >
        <div className="file-tag">ppt</div>
        <div className="annex-info-group">
          <div className="second-title">初识机器学习</div>
          <div className="annex-author-group">
            <div>{courseware.author.name}</div>
            <div>{courseware.update_at}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courseware
