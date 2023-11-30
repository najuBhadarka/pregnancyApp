import { GET_USER_LIST, GET_USER_LIST_FAILED, GET_USER_LIST_SUCCESS } from '../actionType'

export const getUserList = () => {
  return {
    type: GET_USER_LIST,
  }
}

export const getUserListSuccess = (data) => {
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
