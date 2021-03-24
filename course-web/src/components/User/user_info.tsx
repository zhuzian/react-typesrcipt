import {Avatar} from 'antd'
import React from 'react'
import {mockUser} from '../../api/mock'

const UserInfo = () => {
  const user = mockUser()

  return (
    <>
      <div className="user-info-group">
        <div className="user-avatar">
          <Avatar src={user.avatar}></Avatar>
          <div>
            <div>学校</div>
            <div>{user.organization?.name}</div>
          </div>

          <div>
            <div>昵称</div>
            <div>{user.nickname}</div>
          </div>

          <div>
            <div>手机号码</div>
            <div>{user.phone}</div>
          </div>

          <div>
            <div>账号名称</div>
            <div>{user.username}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInfo
