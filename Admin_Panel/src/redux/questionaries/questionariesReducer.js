import {
  CREATE_FORM,
  CREATE_FORM_FAILED,
  CREATE_FORM_SUCCESS,
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

const initialState = {
  questionsList: null,
  singleForm: {},
  loading: false,
  error: null,
}

function QuestionariesReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_FORM:
      return {
        ...state,
        loading: true,
      }
    case CREATE_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        singleForm: action.payload,
      }
    case CREATE_FORM_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    case GET_FORM:
      return {
        ...state,
        loading: true,
      }
    case GET_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        singleForm: action.payload,
      }
    case GET_FORM_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    case GET_FORM_LIST:
      return {
        ...state,
        loading: true,
      }
    case GET_FORM_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        questionsList: action.payload,
      }
    case GET_FORM_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    case UPDATE_QUESTION_FORM:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_QUESTION_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        singleForm: action.payload,
      }
    case UPDATE_QUESTION_FORM_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    case GET_FORM_BY_ID:
      return {
        ...state,
        loading: true,
      }
    case GET_FORM_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        singleForm: action.payload,
      }
    case GET_FORM_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    default:
      return state
  }
}

export default QuestionariesReducer
