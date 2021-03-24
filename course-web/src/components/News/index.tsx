import {Pagination} from 'antd'
import React from 'react'
import {mockNews} from '../../api/mock'
import NewsCard from './newsCard'

const NewsCom = () => {
  return (
    <>
      <div className="center-content">
        {mockNews.map((news, index) => (
          <NewsCard news={news} key={news.news_id} />
        ))}

        <div className="news-pager">
          <Pagination
            total={100}
            showTotal={total => `共 ${total} 条内容`}
            defaultCurrent={1}
            defaultPageSize={10}
            showSizeChanger={false}
          />
        </div>
      </div>
    </>
  )
}

export default NewsCom
