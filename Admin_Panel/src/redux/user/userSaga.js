import { call, put, takeLatest } from 'redux-saga/effects'
import api from 'src/utils/api'
import { GET_USER_LIST } from '../actionType'
import { endPoints } from 'src/utils/ennpoints'
import { getUserListFailed, getUserListSuccess } from './userAction'

function* getUserList() {
  try {
    const response = yield call(api.get, endPoints.GET_USER_LIST)
    if (response) {
      yield put(getUserListSuccess(response.data.userList))
    }
  } catch (error) {
    if (error) {
      yield put(getUserListFailed())
    }
  }
}

export function* userSaga() {
  yield takeLatest(GET_USER_LIST, getUserList)
}
