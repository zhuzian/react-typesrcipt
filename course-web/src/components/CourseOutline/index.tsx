import React, {useEffect} from 'react'
import {Dropdown, Layout, Menu, Popover, Space} from 'antd'
import {mockCourses, mockGrades} from '../../api/mock'
import {Redirect, Route, Switch, useHistory, useParams} from 'react-router-dom'
import GradeCom from './grade'
import {DownOutlined} from '@ant-design/icons'

const {Sider, Content} = Layout
const Grades = () => {
  const history = useHistory()
  const {id} = useParams<{id: string}>()

  const setGrade = value => {
    console.log(value)
    history.push('/grades/' + value.key)
  }

  // 选择学期下拉
  const termPicker = (
    <div className="term-picker-group">
      <p>上学期</p>
      <p>下学期</p>
    </div>
  )

  return (
    <>
      <Layout className="course-layout">
        <Sider className="course-sider">
          <Menu
            mode="inline"
            defaultSelectedKeys={[mockGrades[0].grades[0].key]}
            onClick={setGrade}
          >
            {mockGrades.map(item => (
              <Menu.ItemGroup
                key={item.organization_type}
                title={
                  <div className="grade-title-group">
                    <div
                      className="grade-title-icon"
                      style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/primary.png)`}}
                    ></div>
                    <div>
                      <div className="second-title bold">{item.organization_type}</div>
                      <div className="grade-title-sub">primary school</div>
                    </div>
                  </div>
                }
              >
                {item.grades.map(grade => (
                  <Menu.Item className="grade-title-item" key={grade.key}>
                    {grade.name}
                  </Menu.Item>
                ))}
              </Menu.ItemGroup>
            ))}
          </Menu>
        </Sider>
        <Content className="course-content">
          <div className="course-content-title bold">课程列表</div>

          <div className="course-group">
            <div className="course-group-header">
              <Popover content={termPicker} placement="bottom">
                上学期
                <DownOutlined />
              </Popover>

              <div>共16课时</div>
            </div>
            <Space wrap size={[24, 24]} className="course-wall">
              {mockCourses.map(course => (
                <GradeCom key={course.course_id} course={course} />
              ))}
            </Space>
          </div>
        </Content>
      </Layout>
    </>
  )
}

export default Grades
