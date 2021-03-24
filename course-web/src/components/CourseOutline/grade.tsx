import React from 'react'
import {useHistory} from 'react-router-dom'
import {Course} from '../../api/course'
import {Card} from 'antd'

import './grade.less'

interface Props {
  course: Course
}

const CourseCom: React.FC<Props> = ({course}) => {
  const history = useHistory()
  const toCourse = () => {
    history.push('/courses/' + course.course_id)
  }

  return (
    <>
      <Card
        onClick={toCourse}
        className="course-card"
        hoverable
        cover={<img alt="课程" src={`${process.env.PUBLIC_URL}/images/course-cover.png`} />}
      >
        <Card.Meta title={course.name} description={'这是课程'}></Card.Meta>
      </Card>
    </>
  )
}

export default CourseCom
