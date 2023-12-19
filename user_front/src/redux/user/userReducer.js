import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_FAILED,
  GET_USER_BY_ID_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_SUCCESS,
} from '../actionType'

const initialState = {
  userData: null,
  userDetails: null,
  loading: false,
  error: null,
}

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_BY_ID:
      return {
        ...state,
        loading: true,
      }
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      }
    case GET_USER_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: null,
      }
    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    default:
      return state
  }
}

export default UserReducer
