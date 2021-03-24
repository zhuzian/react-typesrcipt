
const USER_INFO = "USER_INFO"


export const getStorageUser = () => {
    return sessionStorage.getItem(USER_INFO)
}

export const setStorageUser = (user: string) => {
    sessionStorage.setItem(USER_INFO, user)
}


export const clearStorageUser = () => {
    sessionStorage.removeItem(USER_INFO)
}