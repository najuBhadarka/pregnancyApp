import { combineReducers } from 'redux'
import AuthReducer from './auth/authReducer'
import UserReducer from './user/userReducer'

const reducers = combineReducers({
  AuthReducer,
  UserReducer
})

export default reducers
