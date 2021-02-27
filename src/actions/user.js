export const HAS_LOGGED_IN = '[user] HAS_LOGGED_IN'
export const HAS_LOGGED_OUT = '[user] HAS_LOGGED_OUT'
export const SET_USER_INFO = '[user] SET_USER_INFO'
export const RESET_USER_INFO = '[user] RESET_USER_INFO'

export const isLoggedIn = () => {
  return {
    type: HAS_LOGGED_IN,
  }
}

export const isLoggedOut = () => {
  return {
    type: HAS_LOGGED_OUT,
  }
}

export const resetUserInfo = () => {
  return {
    type: RESET_USER_INFO
  }
}

export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo
  }
}