import { GET_USER_LIST, GET_USER_LIST_FAILED, GET_USER_LIST_SUCCESS } from '../actionType'

const initialState = {
  userData: null,
  loading: false,
  error: null,
}

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        loading: true,
      }
    case GET_USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      }
    case GET_USER_LIST_FAILED:
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
