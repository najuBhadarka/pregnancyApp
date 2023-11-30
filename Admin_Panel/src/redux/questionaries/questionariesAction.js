import {
  CREATE_FORM,
  CREATE_FORM_FAILED,
  CREATE_FORM_SUCCESS,
  GET_FORM,
  GET_FORM_FAILED,
  GET_FORM_LIST,
  GET_FORM_LIST_FAILED,
  GET_FORM_LIST_SUCCESS,
  GET_FORM_SUCCESS,
} from '../actionType'

export const createForm = (data) => {
  return {
    type: CREATE_FORM,
    payload: data,
  }
}

export const createFormSuccess = (data) => {
  return {
    type: CREATE_FORM_SUCCESS,
    payload: data,
  }
}

export const createFormFailed = (data) => {
  return {
    type: CREATE_FORM_FAILED,
    payload: data,
  }
}

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

export const getQuestionsList = () => {
  return {
    type: GET_FORM_LIST,
  }
}

export const getQuestionsListSuccess = (data) => {
  return {
    type: GET_FORM_LIST_SUCCESS,
    payload: data,
  }
}

export const getQuestionsListFailed = (data) => {
  return {
    type: GET_FORM_LIST_FAILED,
    payload: data,
  }
}
