import { GET_USER_LIST, GET_USER_LIST_FAILED, GET_USER_LIST_SUCCESS } from "../actionType"

export const getUserList = (data) => {
  console.log("Hello")
  return {
    type: GET_USER_LIST
  }
}

export const getUserListSuccess = (data) => {
  console.log("🚀 ~ file: userAction.js:11 ~ getUserListSuccess ~ data:", data)
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: data,
  }
}

export const getUserListFailed = (data) => {
  return {
    type: GET_USER_LIST_FAILED,
    payload: data,
  }
}
