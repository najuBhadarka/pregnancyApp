import {
  CREATE_FORM,
  CREATE_FORM_FAILED,
  CREATE_FORM_SUCCESS,
  DELETE_FORM,
  DELETE_FORM_FAILED,
  DELETE_FORM_SUCCESS,
  GET_ANSWER_LIST,
  GET_ANSWER_LIST_BY_ID,
  GET_ANSWER_LIST_BY_ID_FAILED,
  GET_ANSWER_LIST_BY_ID_SUCCESS,
  GET_ANSWER_LIST_FAILED,
  GET_ANSWER_LIST_SUCCESS,
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
  answerList: null,
  questionsList: null,
  questionsCount: 0,
  answerListCount: 0,
  singleForm: {},
  singleAnswerForm: {},
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
        questionsList: action.payload.data,
        questionsCount: action.payload.questionsCount,
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
    case DELETE_FORM:
      return {
        ...state,
        loading: true,
      }
    case DELETE_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        questionsList: state?.questionsList?.filter((item) => {
          return item?._id !== action.payload.id ? item : ''
        }),
        questionsCount: action.payload.questionsCount,
      }
    case DELETE_FORM_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    case GET_ANSWER_LIST:
      return {
        ...state,
        loading: true,
      }
    case GET_ANSWER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        answerList: action.payload.data,
        answerListCount: action.payload.answerListCount,
      }
    case GET_ANSWER_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    case GET_ANSWER_LIST_BY_ID:
      return {
        ...state,
        loading: true,
      }
    case GET_ANSWER_LIST_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        singleAnswerForm: action.payload.data,
      }
    case GET_ANSWER_LIST_BY_ID_FAILED:
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
