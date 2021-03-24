import {CourseAnnexTypes} from './constants'
import {Course, CourseAnnex} from './course'
import {News} from './news'
import {Resource} from './resource'
import {User} from './user'

export const mockUser = (): User => ({
  avatar: process.env.PUBLIC_URL + '/images/avatar.png',
  name: '踏雪无痕',
  user_id: 'xxxx',
  phone: '13560792125',
  nickname: '踏雪无痕',
  username: 'auser',
})

export const mockGrades = [
  {
    organization_type: '小学',
    grades: [
      {
        name: '一年级',
        key: 'p1',
      },
      {
        name: '二年级',
        key: 'p2',
      },
      {
        name: '三年级',
        key: 'p3',
      },
      {
        name: '四年级',
        key: 'p4',
      },
      {
        name: '五年级',
        key: 'p5',
      },
      {
        name: '六年级',
        key: 'p6',
      },
    ],
  },
]

export const mockCourses = [
  {
    name: '第一课时',
    course_id: '1',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第二课时',
    course_id: '2',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第三课时',
    course_id: '3',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第四课时',
    course_id: '4',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第五课时',
    course_id: '5',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第六课时',
    course_id: '6',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第七课时',
    course_id: '7',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第八课时',
    course_id: '8',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第九课时',
    course_id: '9',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第十课时',
    course_id: '10',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第十一课时',
    course_id: '11',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第十二课时',
    course_id: '12',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第十三课时',
    course_id: '13',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
  {
    name: '第十四课时',
    course_id: '14',
    desc:
      '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
    tags: ['机器学习', '人工智能入门'],
    avatar: 'xxxxxx',
  },
]

const image = process.env.PUBLIC_URL + '/files/test.jpg'
const fileURL = process.env.PUBLIC_URL + '/files/test.pptx'
const previewURL = process.env.PUBLIC_URL + '/files/test.pdf'
export const mockPPT: CourseAnnex = {
  course_id: 'xxxxxx',
  annex_id: '1',
  author: {
    user_id: 'aaa',
    name: '官方',
    phone: 'xxxxx',
    nickname: 'aaa',
    username: 'aaa',
  },
  type: CourseAnnexTypes.Courseware,
  update_at: 1611642428,
  image: image,
  url: fileURL,
  previewURL: previewURL,
}

export const mockCourse: Course = {
  course_id: 'xxxxxx',
  name: '第一课时：初识机器学习',
  desc:
    '这是关于机器学习的相关介绍，通过这个课程，我们可以学习到机器学习的原理。机器学习的过程，其中还有一些著名的案例。',
  tags: ['机器学习', '人工智能入门'],
  avatar: 'xxxxxx',
  coursewares: [
    {
      course_id: 'xxxxxx',
      annex_id: '1',
      author: {
        user_id: 'aaa',
        name: '官方',
        phone: 'xxxxx',
        nickname: 'aaa',
        username: 'aaa',
      },
      type: CourseAnnexTypes.Courseware,
      update_at: 1611642428,
      image: image,
      url: fileURL,
      previewURL: previewURL,
    },
    {
      course_id: 'xxxxxx',
      annex_id: '2',

      image: image,
      url: fileURL,
      previewURL: previewURL,
      author: {
        user_id: 'aaa',
        name: '周老师',
        phone: 'xxxxx',
        nickname: 'aaa',
        username: 'aaa',
      },
      type: CourseAnnexTypes.Courseware,
      update_at: 1611642428,
    },
    {
      course_id: 'xxxxxx',
      annex_id: '3',

      image: image,
      url: fileURL,
      previewURL: previewURL,
      author: {
        user_id: 'aaa',
        name: '刘老师',
        phone: 'xxxxx',
        nickname: 'aaa',
        username: 'aaa',
      },
      type: CourseAnnexTypes.Courseware,
      update_at: 1611642428,
    },
  ],

  lesson_plans: [
    {
      course_id: 'xxxxxx',
      annex_id: '4',

      image: image,
      url: fileURL,
      previewURL: previewURL,
      author: {
        user_id: 'aaa',
        name: '官方',
        phone: 'xxxxx',
        nickname: 'aaa',
        username: 'aaa',
      },
      type: CourseAnnexTypes.LessonPlan,
      update_at: 1611642428,
    },
    {
      course_id: 'xxxxxx',
      image: image,
      url: fileURL,
      previewURL: previewURL,
      annex_id: '5',

      author: {
        user_id: 'aaa',
        name: '周老师',
        phone: 'xxxxx',
        nickname: 'aaa',
        username: 'aaa',
      },
      type: CourseAnnexTypes.LessonPlan,
      update_at: 1611642428,
    },
    {
      course_id: 'xxxxxx',
      annex_id: '6',

      image: image,
      url: fileURL,
      previewURL: previewURL,
      author: {
        user_id: 'aaa',
        name: '刘老师',
        phone: 'xxxxx',
        nickname: 'aaa',
        username: 'aaa',
      },
      type: CourseAnnexTypes.LessonPlan,
      update_at: 1611642428,
    },
  ],

  videos: [
    {
      course_id: 'xxxxxx',
      annex_id: '7',

      image: image,
      url: fileURL,
      previewURL: previewURL,
      author: {
        user_id: 'aaa',
        name: '官方',
        phone: 'xxxxx',
        nickname: 'aaa',
        username: 'aaa',
      },
      type: CourseAnnexTypes.Video,
      update_at: 1611642428,
    },
    {
      course_id: 'xxxxxx',
      annex_id: '8',

      image: image,
      url: fileURL,
      previewURL: previewURL,
      author: {
        user_id: 'aaa',
        name: '周老师',
        phone: 'xxxxx',
        nickname: 'aaa',
        username: 'aaa',
      },
      type: CourseAnnexTypes.Video,
      update_at: 1611642428,
    },
    {
      course_id: 'xxxxxx',
      annex_id: '9',

      image: image,
      url: fileURL,
      previewURL: previewURL,
      author: {
        user_id: 'aaa',
        name: '刘老师',
        phone: 'xxxxx',
        nickname: 'aaa',
        username: 'aaa',
      },
      type: CourseAnnexTypes.Video,
      update_at: 1611642428,
    },
  ],
}

export const mockImg =
  'data:image/png;base64,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'

export const mockMessages = [
  {
    title: '测试消息',
    author: '官方',
    content: '这是一条测试消息',
    create_at: 1212121,
  },
  {
    title: '测试消息',
    author: '官方',
    content: '这是一条测试消息',
    create_at: 1212121,
  },
]

export const mockPpts = [{}]

export const mockNews: News[] = [
  {
    news_id: 'xxx',
    image: `${process.env.PUBLIC_URL}/images/news.png`,
    title: '这是一个新闻标题',
    url: 'https://baidu.com',
    desc: '好啊',
    date: new Date(),
  },
  {
    news_id: 'xxa',
    image: `${process.env.PUBLIC_URL}/images/news.png`,
    title: '这是一个新闻标题',
    url: 'https://baidu.com',
    desc: '好啊',
    date: new Date(),
  },
  {
    news_id: 'xxe',
    image: `${process.env.PUBLIC_URL}/images/news.png`,
    title: '这是一个新闻标题',
    url: 'https://baidu.com',
    desc: '好啊',
    date: new Date(),
  },
  {
    news_id: 'xxf',
    image: `${process.env.PUBLIC_URL}/images/news.png`,
    title: '这是一个新闻标题',
    url: 'https://baidu.com',
    desc: '好啊',
    date: new Date(),
  },
]

export const mockResources: Resource[] = [
  {
    resource_id: 'a',
    name: '内容',
    desc: 'xxx',
    update_at: new Date().toISOString(),
    type: 'image',
    image: `${process.env.PUBLIC_URL}/images/courseware.png`,
    url: '',
    author: {
      user_id: 'xxx',
      name: '老师',
      phone: '132434',
      nickname: 'aaa',
      username: 'aaa',
    },
  },
  {
    resource_id: 'b',
    name: '内容',
    desc: 'xxx',
    update_at: new Date().toISOString(),
    type: 'image',
    image: `${process.env.PUBLIC_URL}/images/courseware.png`,
    url: '',
    author: {
      user_id: 'xxx',
      name: '老师',
      phone: '132434',
      nickname: 'aaa',
      username: 'aaa',
    },
  },
]
