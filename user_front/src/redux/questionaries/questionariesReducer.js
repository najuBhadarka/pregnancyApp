import {
  GET_FORM,
  GET_FORM_FAILED,
  GET_FORM_SUCCESS,
  SUBMIT_FORM,
  SUBMIT_FORM_FAILED,
  SUBMIT_FORM_SUCCESS,
} from '../actionType'

const initialState = {
  data: null,
  singleForm: {},
  loading: false,
  error: null,
}

function QuestionariesReducer(state = initialState, action) {
  switch (action.type) {
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

    case SUBMIT_FORM:
      return {
        ...state,
        loading: true,
      }
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case SUBMIT_FORM_FAILED:
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
