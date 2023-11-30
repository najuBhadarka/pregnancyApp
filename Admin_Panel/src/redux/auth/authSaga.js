import { call, put, takeLatest } from 'redux-saga/effects'
import { loginFailed, loginSuccess } from './authAction'
import api from 'src/utils/api'
import { SIGN_IN } from '../actionType'
import { endPoints } from 'src/utils/ennpoints'

function* signIn({ payload }) {
  try {
    const response = yield call(api.post, endPoints.ADMIN_LOGIN, payload.state)

    if (response) {
      localStorage.setItem('token', response.data.token)
      yield put(loginSuccess(response.data))
      yield call(payload.callBack)
    }
  } catch (error) {
    if (error) {
      yield put(loginFailed())
    }
  }
}

export function* authSaga() {
  yield takeLatest(SIGN_IN, signIn) // Ensure that SIGN_IN is the correct action type
}
