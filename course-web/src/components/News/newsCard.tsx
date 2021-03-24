import React from 'react'

import './news.less'

import {News} from '../../api/news'

interface Props {
  news: News
}

const NewsCard: React.FC<Props> = ({news}) => {
  return (
    <>
      <div className="news-card" onClick={() => window.open(news.url)}>
        <div className="news-image" style={{backgroundImage: `url(${news.image})`}}></div>
        <div className="news-info-group">
          <div className="news-title second-title">{news.title}</div>
          <div className="news-desc">{news.desc}</div>
          <div className="news-date small">{news.date.toLocaleDateString()}</div>
        </div>
      </div>
    </>
  )
}

export default NewsCard
