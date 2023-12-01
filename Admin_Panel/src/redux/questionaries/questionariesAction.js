import {
  CREATE_FORM,
  CREATE_FORM_FAILED,
  CREATE_FORM_SUCCESS,
  DELETE_FORM,
  DELETE_FORM_FAILED,
  DELETE_FORM_SUCCESS,
  GET_FORM,
  GET_FORM_BY_ID,
  GET_FORM_BY_ID_FAILED,
  GET_FORM_BY_ID_SUCCESS,
  GET_FORM_FAILED,
  GET_FORM_LIST,
  GET_FORM_LIST_FAILED,
  GET_FORM_LIST_SUCCESS,
  GET_FORM_SUCCESS,
  UPDATE_QUESTION_FORM,
  UPDATE_QUESTION_FORM_FAILED,
  UPDATE_QUESTION_FORM_SUCCESS,
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

export const updateForm = (data) => {
  return {
    type: UPDATE_QUESTION_FORM,
    payload: data,
  }
}

export const updateFormSuccess = (data) => {
  return {
    type: UPDATE_QUESTION_FORM_SUCCESS,
    payload: data,
  }
}

export const updateFormFailed = (data) => {
  return {
    type: UPDATE_QUESTION_FORM_FAILED,
    payload: data,
  }
}

export const getFormById = (data) => {
  return {
    type: GET_FORM_BY_ID,
    payload: data,
  }
}

export const getFormByIdSuccess = (data) => {
  return {
    type: GET_FORM_BY_ID_SUCCESS,
    payload: data,
  }
}

export const getFormByIdFailed = (data) => {
  return {
    type: GET_FORM_BY_ID_FAILED,
    payload: data,
  }
}

export const deleteForm = (data) => {
  return {
    type: DELETE_FORM,
    payload: data,
  }
}

export const deleteFormSuccess = (data) => {
  return {
    type: DELETE_FORM_SUCCESS,
    payload: data,
  }
}

export const deleteFormFailed = (data) => {
  return {
    type: DELETE_FORM_FAILED,
    payload: data,
  }
}