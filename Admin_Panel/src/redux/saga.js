import { all } from 'redux-saga/effects'
import { authSaga } from './auth/authSaga'
import { userSaga } from './user/userSaga'
import { questionariesSaga } from './questionaries/questionariesSaga'

export default function* rootSaga() {
  yield all([authSaga(), userSaga(), questionariesSaga()])
}
