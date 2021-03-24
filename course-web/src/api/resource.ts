import {User} from './user'

export interface Resource {
  resource_id: string
  name: string
  desc: string
  update_at: string
  author: User
  type: string
  image: string
  url: string
}
