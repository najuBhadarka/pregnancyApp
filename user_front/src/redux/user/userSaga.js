import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../utils/api'
import {
  GET_USER_BY_ID,
  UPDATE_PROFILE,
} from '../actionType'
import { endPoints } from '../../utils/ennpoints'
import {
  getUserByIdFailed,
  getUserByIdSuccess,
  updateProfileFailed,
  updateProfileSuccess,
} from './userAction'

function* getUserById({ payload }) {
  try {
    const response = yield call(api.get, endPoints.GET_USER_BY_ID, {
      urlParams: { id: payload },
    })
    if (response) {
      yield put(getUserByIdSuccess(response.data.userDetails))
    }
  } catch (error) {
    if (error) {
      yield put(getUserByIdFailed())
    }
  }
}

function* updateProfile({ payload }) {
  try {
    const response = yield call(api.put, endPoints.UPDATE_PROFILE, payload.body, {
      urlParams: { id: payload.id },
    })
    if (response) {
      yield put(updateProfileSuccess(response.data.updatedUser))
      yield call(payload.callBack)
    }
  } catch (error) {
    if (error) {
      yield put(updateProfileFailed())
    }
  }
}

export function* userSaga() {
  yield takeLatest(GET_USER_BY_ID, getUserById)
  yield takeLatest(UPDATE_PROFILE, updateProfile)
}
