import {Button} from 'antd'
import React from 'react'
import {Resource} from '../../api/resource'

interface Props {
  resource: Resource
}

const ResourceCard: React.FC<Props> = ({resource}) => {
  return (
    <div className="resource-card" style={{backgroundImage: `url(${resource.image})`}}>
      <div className="resource-info">
        <div className="resource-name">{resource.name}</div>
        <div className="resource-author-group">
          <span className="resource-author-avatar"></span>
          <span className="resource-author-name">{resource.author.name}</span>
          <span className="resource-update-at">{resource.update_at}</span>
        </div>
        <div className="resource-button-group">
          <Button>预览</Button>
          <Button type="primary">下载</Button>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard
