import React from 'react'
import {Train} from '../../api/train'
import './train.less'

import {RightOutlined} from '@ant-design/icons'
import VideoCard from './videoCard'
import {Space} from 'antd'
interface Props {
  train: Train
}

const videos = [
  {
    image: `${process.env.PUBLIC_URL}/images/courseware.png`,
    name: '初识人工智能',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/courseware.png`,
    name: '初识人工智能',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/courseware.png`,
    name: '初识人工智能',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/courseware.png`,
    name: '初识人工智能',
  },
]

const downloads = [
  {
    name: 'courseware.png',
    url: `${process.env.PUBLIC_URL}/images/courseware.png`,
  },
  {
    name: 'courseware.png',
    url: `${process.env.PUBLIC_URL}/images/courseware.png`,
  },
]
const TrainCard: React.FC<Props> = ({train}) => {
  return (
    <>
      <div className="train-card" style={{backgroundImage: `url(${train.image})`}}>
        <div className="train-title">{train.title}</div>
        <div className="train-desc">{train.desc}</div>
        <div className="train-date">
          {train.start_at} - {train.end_at}
        </div>

        <div className="train-card-footer">
          <span>
            <RightOutlined />
          </span>
          <span>点击查看详情</span>
        </div>
        <div className="train-content">
          <div className="train-videos">
            <div>培训视频</div>

            <Space wrap size={[40, 24]}>
              {videos.map((video, index) => (
                <VideoCard video={video} key={index} />
              ))}
            </Space>
          </div>

          <div className="train-downloads">
            <div>附件下载</div>
            {downloads.map((download, index) => (
              <div key={index}>{download.name}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const videoCard = () => {
  return
}

export default TrainCard
