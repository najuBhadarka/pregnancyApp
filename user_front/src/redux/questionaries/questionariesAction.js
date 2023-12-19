import {
  GET_FORM,
  GET_FORM_FAILED,
  GET_FORM_SUCCESS,
  SUBMIT_FORM,
  SUBMIT_FORM_FAILED,
  SUBMIT_FORM_SUCCESS,
} from '../actionType'

export const getForm = () => {
  return {
    type: GET_FORM,
  }
}

export const getFormSuccess = (data) => {
  return {
    type: GET_FORM_SUCCESS,
    payload: data,
  }
}

export const getFormFailed = (data) => {
  return {
    type: GET_FORM_FAILED,
    payload: data,
  }
}

export const submitForm = (data) => {
  return {
    type: SUBMIT_FORM,
    payload: data
  }
}

export const submitFormSuccess = (data) => {
  return {
    type: SUBMIT_FORM_SUCCESS,
    payload: data,
  }
}

export const submitFormFailed = (data) => {
  return {
    type: SUBMIT_FORM_FAILED,
    payload: data,
  }
}
