import { combineReducers } from 'redux'
import AuthReducer from './auth/authReducer'
import UserReducer from './user/userReducer'
import QuestionariesReducer from './questionaries/questionariesReducer'

const reducers = combineReducers({
  AuthReducer,
  UserReducer,
  QuestionariesReducer,
})

export default reducers
