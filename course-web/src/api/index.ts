import * as login from  "./login"
import * as storage from './storage'
import * as business from './business'
import * as employee from './employee'
import * as user from './user'
import * as order from './order'
import * as company from './company'
import * as user_trace from './user_trace'

const API = {
    ...login,
    ...storage,
    ...business,
    ...employee,
    ...user,
    ...order,
    ...company,
    ...user_trace
}

export default API