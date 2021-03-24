import React from 'react'
import {Course, CourseAnnex} from '../../api/course'
import {Button, Card} from 'antd'

interface Props {
  video: CourseAnnex
}
const VideoCom: React.FC<Props> = ({video}) => {
  return (
    <>
      <div
        className="annex-card"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/courseware.png)`}}
      >
        <div className="file-tag">pdf</div>
        <div className="annex-info-group">
          <div className="second-title">初识机器学习</div>
          <div className="annex-author-group">
            <div>{video.author.name}</div>
            <div>{video.update_at}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoCom
