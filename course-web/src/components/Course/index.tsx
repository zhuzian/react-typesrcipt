import React, {useEffect, useState} from 'react'
import {Button, Image, Layout, PageHeader, Space, Tag} from 'antd'
import './course.less'
import {useHistory, useParams} from 'react-router-dom'
import {Course, newCourse} from '../../api/course'
import {mockCourse, mockImg} from '../../api/mock'
import Courseware from './courseware'
import LessonPlan from './lesson_plan'
import VideoCom from './video'
import {PlusOutlined} from '@ant-design/icons'

const tagColors = [
  'blue',
  'cyan',
  'geekblue',
  'gold',
  'green',
  'lime',
  'magenta',
  'orange',
  'pink',
  'processing',
  'red',
  'purple',
  'volcano',
  'yellow',
]

const {Sider, Content} = Layout

// 课程页面
const CourseCom = () => {
  const history = useHistory()
  const {id} = useParams<{id: string}>()
  const [course, setCourse] = useState<Course>(newCourse())
  const [age, setAge] = useState(0)

  useEffect(() => {
    const getCourse = id => {
      return mockCourse
    }
    setCourse(getCourse(id))
  }, [])

  return (
    <>
      <div className="center-content">
        <div className="center-content-back">
          <PageHeader onBack={() => history.goBack()} title="返回" />
        </div>

        <Layout className="course-desc-layout">
          <Sider width={300} theme="light">
            <Image
              preview={false}
              width={300}
              height={200}
              src={`${process.env.PUBLIC_URL}/images/course_detail.png`}
              fallback={mockImg}
            ></Image>
          </Sider>
          <Content className="course-desc-content">
            <div className="course-desc-content-header">
              <div className="title bold">{course.name}</div>
              <div className="small">第 4 课时 | 共 16 课时</div>
            </div>
            <div className="course-desc-text-group">
              <div className="second-title course-desc-text-title">课程介绍</div>
              <div className="course-desc-text">{course.desc}</div>
            </div>
            <div className="course-tag-list-group">
              <div className="second-title course-desc-text-title">知识点</div>
              <div className="course-desc-text">
                {course.tags.map((t, index) => (
                  <Tag key={index} color={tagColors[index % tagColors.length]}>
                    {t}
                  </Tag>
                ))}
              </div>
            </div>
          </Content>
        </Layout>

        {/* 课件 教案 及 视频 */}
        <div className="course-annex-group">
          {/* 课件 */}
          <div>
            <div className="annex-header">
              <div className="annex-title second-title">课件</div>
              <div className="annex-add-btn">
                <Button type="primary" size="large" icon={<PlusOutlined />}>
                  添加
                </Button>
              </div>
            </div>
            <div className="annex-list">
              <Space wrap size={[40, 24]}>
                {course.coursewares?.map(courseware => (
                  <Courseware key={courseware.annex_id} courseware={courseware} />
                ))}
              </Space>
            </div>
          </div>

          {/* 教案 */}
          <div>
            <div className="annex-header">
              <div className="annex-title second-title">教案</div>
              <div className="annex-add-btn">
                <Button type="primary" size="large" icon={<PlusOutlined />}>
                  添加
                </Button>
              </div>
            </div>
            <div>
              <Space wrap size={[40, 24]}>
                {course.lesson_plans?.map(lesson_plan => (
                  <LessonPlan key={lesson_plan.annex_id} lesson_plan={lesson_plan} />
                ))}
              </Space>
            </div>
          </div>

          {/* 视频 */}
          <div>
            <div className="annex-header">
              <div className="annex-title second-title">视频</div>
              <div className="annex-add-btn">
                <Button type="primary" size="large" icon={<PlusOutlined />}>
                  添加
                </Button>
              </div>
            </div>
            <div>
              <Space wrap size={[30, 20]}>
                {course.videos?.map(video => (
                  <VideoCom key={video.annex_id} video={video} />
                ))}
              </Space>
            </div>
          </div>
        </div>

        {/* 推荐内容 */}

        <div className="course-recommend-group">
          <div className="second-title">推荐内容</div>
          <div className="course-recommend-list"></div>
        </div>
      </div>
    </>
  )
}

export default CourseCom
