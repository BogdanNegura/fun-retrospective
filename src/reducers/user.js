import { HAS_LOGGED_IN, HAS_LOGGED_OUT, SET_USER_INFO, RESET_USER_INFO} from "../actions/user"

export const initState = {
  logged: false,
  email: "",
  uid: "",
  displayName: "",
  photoURL: "",
}

export default (state=initState, action) => {
  switch (action.type) {
    case HAS_LOGGED_IN:
      return {
        ...state,
        logged: true
      }
    case HAS_LOGGED_OUT:
      return {
        ...state,
        logged: false
      }
  
    case RESET_USER_INFO:
      return initState
  
  
    case SET_USER_INFO:
      return {
        ...state,
        ...action.payload
      }
  
    default:
      return state
  }
}