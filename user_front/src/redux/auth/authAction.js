import { SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS } from '../actionType'

export const login = (data) => {
  return {
    type: SIGN_IN,
    payload: data,
  }
}

export const loginSuccess = (data) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: data,
  }
}

export const loginFailed = (data) => {
  return {
    type: SIGN_IN_FAILED,
    payload: data,
  }
}
