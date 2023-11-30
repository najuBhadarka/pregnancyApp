import { call, put, takeLatest } from 'redux-saga/effects'
import api from 'src/utils/api'
import { CREATE_FORM, GET_FORM, GET_FORM_LIST } from '../actionType'
import { endPoints } from 'src/utils/ennpoints'
import {
  createFormFailed,
  createFormSuccess,
  getFormFailed,
  getFormSuccess,
  getQuestionsFailed,
  getQuestionsListFailed,
  getQuestionsListSuccess,
} from './questionariesAction'

function* createForm({ payload }) {
  try {
    payload.timeline = 2
    const response = yield call(api.post, endPoints.CREATE_FORM, payload)
    let data = {
      formData: response?.data?.data?.questions ? JSON.parse(response?.data?.data?.questions) : {},
      timeline: response?.data?.data?.timeline,
      title: response?.data?.data?.title,
    }

    if (response) {
      yield put(createFormSuccess(data))
    }
  } catch (error) {
    if (error) {
      yield put(createFormFailed())
    }
  }
}

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

function* getQuestionsList() {
  try {
    const response = yield call(api.get, endPoints.GET_QUESTIONS_LIST)
    if (response) {
      yield put(getQuestionsListSuccess(response.data))
    }
  } catch (error) {
    if (error) {
      yield put(getQuestionsListFailed())
    }
  }
}
export function* questionariesSaga() {
  yield takeLatest(CREATE_FORM, createForm)
  yield takeLatest(GET_FORM, getForm)
  yield takeLatest(GET_FORM_LIST, getQuestionsList)
}
