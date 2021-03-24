import {newUser, User} from './user'

export interface Course {
  course_id: string
  name: string
  desc: string
  tags: string[]
  avatar: string
  coursewares?: CourseAnnex[]
  lesson_plans?: CourseAnnex[]
  videos?: CourseAnnex[]
}

export interface CourseAnnex {
  course_id: string
  annex_id: string
  type: number
  url: string
  previewURL: string
  image: string
  author: User
  update_at: number
}

export const newCourse = (): Course => ({
  course_id: '',
  name: '',
  desc: '',
  tags: [],
  avatar: '',
})

export const newCourseAnnex = (): CourseAnnex => ({
  course_id: '',
  annex_id: '',
  type: 0,
  url: '',
  previewURL: '',
  image: '',
  author: newUser(),
  update_at: 0,
})
