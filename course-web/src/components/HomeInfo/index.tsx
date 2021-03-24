import React from 'react'
import {Row, Col, Space, Button} from 'antd'
import {RightOutlined} from '@ant-design/icons'
import './home-info.less'
import {useHistory} from 'react-router'

const modules = [
  {
    title: '课程中心',
    desc:
      '课程中心包含各年级的AI教育课程，内容主要为课件、教案以及视频。教师可以上传自己制作的课件进行使用，也可以分享给其他教师用户使用。',
    image: `${process.env.PUBLIC_URL}/images/course-avatar.png`,
    path: '/grades/p1',
  },
  {
    title: '资源中心',
    desc:
      '资源中心包含丰富的AI资源，形式为图片、视频或文档，教师可以依据知识点下载相应的资源，用于制作课件。也可以分享自己的资源内容。',
    image: `${process.env.PUBLIC_URL}/images/resource-avatar.png`,
    path: '/resource',
  },
  {
    title: '信息中心',
    desc:
      '信息中心包含了人工智能行业的信息，您可以通过信息中心了解人工智能行业的发展，以及最新动态。',
    image: `${process.env.PUBLIC_URL}/images/news-avatar.png`,
    path: '/news',
  },
  {
    title: '师资培训',
    desc:
      '师资培训包含了果力智能举办的师资培训，包含了线上以及线下的师资培训活动。您可以看到师资培训的录播内容，以及下载相关的文档资料。',
    image: `${process.env.PUBLIC_URL}/images/training-avatar.png`,
    path: '/training',
  },
]

interface Props {
  title: string
  desc: string
  image: string
  path: string
}
const ModuleCard: React.FC<Props> = ({title, desc, image, path}) => {
  const history = useHistory()

  const toModule = () => {
    history.push(path)
  }

  return (
    <div className="module-link-card">
      <div className="module-card-image" style={{backgroundImage: `url(${image})`}}></div>

      <div className="module-card-info">
        <div className="title bold">{title}</div>
        <div className="module-desc">{desc}</div>
        <div className="module-link-btn">
          <Button icon={<RightOutlined />} onClick={toModule}>
            点击进入
          </Button>
        </div>
      </div>
    </div>
  )
}

const HomeInfo = () => {
  return (
    <div className="center-content home-info-container">
      <div className="title home-info-title">为教师提供专业的AI教育资源</div>
      <Space className="module-links" size={[120, 100]} wrap>
        {modules.map((m, index) => (
          <ModuleCard title={m.title} desc={m.desc} image={m.image} path={m.path} key={index}/>
        ))}
      </Space>
    </div>
  )
}

export default HomeInfo
