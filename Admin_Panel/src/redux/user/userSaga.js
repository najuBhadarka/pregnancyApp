import { call, put, takeLatest } from 'redux-saga/effects'
import api from 'src/utils/api'
import {
  DELETE_USER,
  GET_USER_BY_ID,
  GET_USER_LIST,
  UPDATE_USER,
  UPDATE_USER_STATUS,
} from '../actionType'
import { endPoints } from 'src/utils/ennpoints'
import {
  deleteUserFailed,
  deleteUserSuccess,
  getUserByIdFailed,
  getUserByIdSuccess,
  getUserListFailed,
  getUserListSuccess,
  updateUserFailed,
  updateUserStatusFailed,
  updateUserStatusSuccess,
  updateUserSuccess,
} from './userAction'

function* getUserList({ payload }) {
  console.log('payload-------', payload)
  try {
    const response = yield call(
      api.get,
      `${endPoints.GET_USER_LIST}?pageNo=${payload.pageNo}&limit=${payload.limit}`,
    )
    if (response) {
      yield put(getUserListSuccess(response.data))
    }
  } catch (error) {
    if (error) {
      yield put(getUserListFailed())
    }
  }
}

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

function* updateUser({ payload }) {
  try {
    const response = yield call(api.put, endPoints.UPDATE_USER, payload.body, {
      urlParams: { id: payload.id },
    })
    if (response) {
      yield put(updateUserSuccess(response.data.updatedUser))
      yield call(payload.callBack)
    }
  } catch (error) {
    if (error) {
      yield put(updateUserFailed())
    }
  }
}

function* deleteUser({ payload }) {
  try {
    const response = yield call(api.put, endPoints.DELETE_USER, payload.body, {
      urlParams: { id: payload.id },
    })
    if (response.status === 200) {
      yield put(deleteUserSuccess({ id: payload.id, totalUserCount: response.data.totalUserCount }))
    }
  } catch (error) {
    yield put(deleteUserFailed(error))
  }
}

function* updateUserStatus({ payload }) {
  try {
    const updateUser = yield call(api.put, endPoints.UPDATE_STATUS, payload.body, {
      urlParams: { id: payload.ids },
    })
    yield put(updateUserStatusSuccess(updateUser))
  } catch (error) {
    yield put(updateUserStatusFailed(error))
  }
}

export function* userSaga() {
  yield takeLatest(GET_USER_LIST, getUserList)
  yield takeLatest(GET_USER_BY_ID, getUserById)
  yield takeLatest(UPDATE_USER, updateUser)
  yield takeLatest(DELETE_USER, deleteUser)
  yield takeLatest(UPDATE_USER_STATUS, updateUserStatus)
}
