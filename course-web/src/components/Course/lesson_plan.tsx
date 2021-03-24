import React from 'react'
import {Course, CourseAnnex} from '../../api/course'
import {Button, Card} from 'antd'

interface Props {
  lesson_plan: CourseAnnex
}
const LessonPlan: React.FC<Props> = ({lesson_plan}) => {
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
            <div>{lesson_plan.author.name}</div>
            <div>{lesson_plan.update_at}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LessonPlan
