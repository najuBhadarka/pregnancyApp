import { DELETE_USER, DELETE_USER_FAILED, DELETE_USER_SUCCESS, GET_USER_BY_ID, GET_USER_BY_ID_FAILED, GET_USER_BY_ID_SUCCESS, GET_USER_LIST, GET_USER_LIST_FAILED, GET_USER_LIST_SUCCESS, UPDATE_USER, UPDATE_USER_FAILED, UPDATE_USER_STATUS, UPDATE_USER_STATUS_FAILED, UPDATE_USER_STATUS_SUCCESS, UPDATE_USER_SUCCESS } from '../actionType'

const initialState = {
  userData: null,
  userDetails: null,
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
    case UPDATE_USER:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      }
    case UPDATE_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    case DELETE_USER:
      return {
        ...state,
        loading: true,
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: state?.userData?.filter((item) => {
          return item?._id != action.payload ? item : "";
        })
      }
    case DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }

    case UPDATE_USER_STATUS:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_USER_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: state?.userData?.map((ele) => {
          if (ele._id == action.payload.data.userList._id) {
            ele.status = action.payload.data.userList.status;
          }
          return ele;
        })
      }
    case UPDATE_USER_STATUS_FAILED:
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
