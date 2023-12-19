const { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILED } = require('../actionType')

const initialState = {
  data: null,
  loading: false,
  error: null,
}

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        loading: true,
        data: action.payload,
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case SIGN_IN_FAILED:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      }
    default:
      return state
  }
}

export default AuthReducer
