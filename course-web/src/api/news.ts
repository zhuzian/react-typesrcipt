// 新闻对象
export interface News {
  news_id: string
  image: string
  title: string
  desc: string
  url: string
  date: Date
}

export const NewNews = (): News => ({
  news_id: '',
  image: '',
  title: '',
  desc: '',
  url: '',
  date: new Date(),
})
