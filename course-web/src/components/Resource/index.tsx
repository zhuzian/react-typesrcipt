import React from 'react'
import {Input, Space} from 'antd'
import CommonFooter from '../CommonFooter'
import './resource.less'
import {mockResources} from '../../api/mock'
import ResourceCard from './resourceCard'

const ResourceCom = () => {
  const onSearch = value => {
    console.log(value)
  }
  const resourceTypes = [
    {
      text: '全部',
      type: 'all',
    },
    {
      text: '图片',
      type: 'image',
    },
    {
      text: '视频',
      type: 'video',
    },
    {
      text: '文档',
      type: 'file',
    },
    {
      text: '其他',
      type: 'other',
    },
  ]

  const resourceTags = ['全部', '机器学习', '自然语言处理']
  const orderTypes = [
    {
      text: '最新发布',
      type: 'update_at DESC',
    },
    {
      text: '最多下载',
      type: 'download DESC',
    },
    {
      text: '最多点击',
      type: 'click DESC',
    },
  ]

  return (
    <>
      <div className="resource-search-container">
        <div className="resource-search-outer">
          <div className="search-input">
            <Input.Search placeholder="请输入搜索内容" onSearch={onSearch} enterButton />
          </div>
          <div className="resource-type-container">
            <div className="resource-type-line ">
              {resourceTypes.map((t, index) => (
                <div className="resource-text" key={index}>
                  {t.text}
                </div>
              ))}
            </div>

            <div className="resource-tags-line">
              {resourceTags.map((tag, index) => (
                <div className="resource-text" key={index}>
                  {tag}
                </div>
              ))}
            </div>
            <div className="resource-order-line">
              {orderTypes.map((order, index) => (
                <div className="resource-text" key={index}>
                  {order.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="resource-container">
        <Space size={[32, 40]} wrap>
          {mockResources.map((r, index) => (
            <ResourceCard resource={r} key={r.resource_id} />
          ))}
        </Space>
      </div>
      <CommonFooter color="black" />
    </>
  )
}

export default ResourceCom
