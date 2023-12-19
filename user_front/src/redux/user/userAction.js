import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_FAILED,
  GET_USER_BY_ID_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_SUCCESS,
} from '../actionType'

export const getUserById = (data) => {
  return {
    type: GET_USER_BY_ID,
    payload: data,
  }
}

export const getUserByIdSuccess = (data) => {
  return {
    type: GET_USER_BY_ID_SUCCESS,
    payload: data,
  }
}

export const getUserByIdFailed = (data) => {
  return {
    type: GET_USER_BY_ID_FAILED,
    payload: data,
  }
}

export const updateProfile = (data) => {
  return {
    type: UPDATE_PROFILE,
    payload: data,
  }
}

export const updateProfileSuccess = (data) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: data,
  }
}

export const updateProfileFailed = (data) => {
  return {
    type: UPDATE_PROFILE_FAILED,
    payload: data,
  }
}

