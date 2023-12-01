import { call, put, takeLatest } from 'redux-saga/effects'
import api from 'src/utils/api'
import {
  CREATE_FORM,
  DELETE_FORM,
  GET_FORM,
  GET_FORM_BY_ID,
  GET_FORM_LIST,
  UPDATE_QUESTION_FORM,
} from '../actionType'
import { endPoints } from 'src/utils/ennpoints'
import {
  createFormFailed,
  createFormSuccess,
  deleteFormFailed,
  deleteFormSuccess,
  getFormByIdFailed,
  getFormByIdSuccess,
  getFormFailed,
  getFormSuccess,
  getQuestionsListFailed,
  getQuestionsListSuccess,
} from './questionariesAction'

function* createForm({ payload }) {
  try {
    const response = yield call(api.post, endPoints.CREATE_FORM, payload.state)
    let data = {
      formData: response?.data?.data?.questions ? JSON.parse(response?.data?.data?.questions) : {},
      timeline: response?.data?.data?.timeline,
      title: response?.data?.data?.title,
    }

    if (response) {
      yield put(createFormSuccess(data))
      yield call(payload.callBack)
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
      yield put(getQuestionsListSuccess(response.data.data))
    }
  } catch (error) {
    if (error) {
      yield put(getQuestionsListFailed())
    }
  }
}

function* getQuestionFormById({ payload }) {
  try {
    const response = yield call(api.get, endPoints.GET_SINGLE_FORM, {
      urlParams: { id: payload },
    })
    let data = {
      formData: response?.data?.data?.questions ? JSON.parse(response?.data?.data?.questions) : {},
      timeline: response?.data?.data?.timeline,
      title: response?.data?.data?.title,
    }
    if (response) {
      yield put(getFormByIdSuccess(data))
    }
  } catch (error) {
    if (error) {
      yield put(getFormByIdFailed())
    }
  }
}

function* updateQuestionForm({ payload }) {
  try {
    const response = yield call(api.put, endPoints.UPDATE_FORM, payload.state, {
      urlParams: { id: payload.id },
    })
    if (response) {
      yield put(getQuestionsListSuccess(response.data))
      yield call(payload.callBack)
    }
  } catch (error) {
    if (error) {
      yield put(getQuestionsListFailed())
    }
  }
}

function* deleteForm({ payload }) {
  try {
    const response = yield call(api.put, endPoints.DELETE_FORM, payload.body, {
      urlParams: { id: payload.id },
    })
    if (response.status === 200) {
      yield put(deleteFormSuccess(payload.id))
    }
  } catch (error) {
    yield put(deleteFormFailed(error))
  }
}

export function* questionariesSaga() {
  yield takeLatest(CREATE_FORM, createForm)
  yield takeLatest(GET_FORM, getForm)
  yield takeLatest(GET_FORM_LIST, getQuestionsList)
  yield takeLatest(UPDATE_QUESTION_FORM, updateQuestionForm)
  yield takeLatest(GET_FORM_BY_ID, getQuestionFormById)
  yield takeLatest(DELETE_FORM, deleteForm)
}
