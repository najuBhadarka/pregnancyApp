import { GET_USER_LIST, GET_USER_LIST_FAILED, GET_USER_LIST_SUCCESS, DELETE_USER, DELETE_USER_FAILED, DELETE_USER_SUCCESS, GET_USER_BY_ID, GET_USER_BY_ID_FAILED, GET_USER_BY_ID_SUCCESS, UPDATE_USER, UPDATE_USER_FAILED, UPDATE_USER_STATUS, UPDATE_USER_STATUS_FAILED, UPDATE_USER_STATUS_SUCCESS, UPDATE_USER_SUCCESS } from '../actionType'


export const getUserList = (data) => {
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

export const getUserById = (data) => {
  return {
    type: GET_USER_BY_ID,
    payload: data
  }
}

export const getUserByIdSuccess = (data) => {
  return {
    type: GET_USER_BY_ID_SUCCESS,
    payload: data
  }
}

export const getUserByIdFailed = (data) => {
  return {
    type: GET_USER_BY_ID_FAILED,
    payload: data
  }
}

export const updateUser = (data) => {
  return {
    type: UPDATE_USER,
    payload: data
  }
}

export const updateUserSuccess = (data) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: data
  }
}

export const updateUserFailed = (data) => {
  return {
    type: UPDATE_USER_FAILED,
    payload: data
  }
}

export const deleteUser = (data) => {
  return {
    type: DELETE_USER,
    payload: data
  }
}

export const deleteUserSuccess = (data) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data
  }
}

export const deleteUserFailed = (data) => {
  return {
    type: DELETE_USER_FAILED,
    payload: data
  }
}

export const updateUserStatus = (data) => {
  return {
    type: UPDATE_USER_STATUS,
    payload: data
  }
}

export const updateUserStatusSuccess = (data) => {
  return {
    type: UPDATE_USER_STATUS_SUCCESS,
    payload: data
  }
}

export const updateUserStatusFailed = (data) => {
  return {
    type: UPDATE_USER_STATUS_FAILED,
    payload: data
  }
}