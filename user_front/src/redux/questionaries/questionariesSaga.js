import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../utils/api'
import {
  GET_FORM,
  SUBMIT_FORM,
} from '../actionType'
import { endPoints } from '../../utils/ennpoints'
import {
  getFormFailed,
  getFormSuccess,
  submitFormFailed,
  submitFormSuccess,
} from './questionariesAction'

function* getForm() {
  try {
    const response = yield call(api.get, endPoints.GET_FORM)
    let data = {
      formData: response?.data?.data?.questions ? JSON.parse(response?.data?.data?.questions) : {},
      timeline: response?.data?.data?.timeline,
      title: response?.data?.data?.title,
    }
    if (response) {
      yield put(getFormSuccess(data))
    }
  } catch (error) {
    if (error) {
      yield put(getFormFailed())
    }
  }
}

function* submitForm({ payload }) {
  console.log("payload:", payload)
  try {
    const response = yield call(api.post, endPoints.SUBMIT_FORM, payload)
    console.log("response:", response)

    if (response) {
      yield put(submitFormSuccess(response?.data))
    }
  } catch (error) {
    if (error) {
      yield put(submitFormFailed())
    }
  }
}



export function* questionariesSaga() {
  yield takeLatest(GET_FORM, getForm)
  yield takeLatest(SUBMIT_FORM, submitForm)
}
