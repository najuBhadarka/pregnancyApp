import { call, put, takeLatest } from 'redux-saga/effects'
import api from 'src/utils/api'
import {
  CREATE_FORM,
  DELETE_FORM,
  GET_ANSWER_LIST,
  GET_ANSWER_LIST_BY_ID,
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
  getAnswerListByIdFailed,
  getAnswerListByIdSuccess,
  getAnswerListFailed,
  getAnswerListSuccess,
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

function* getQuestionsList({ payload }) {
  try {
    const response = yield call(
      api.get,
      `${endPoints.GET_QUESTIONS_LIST}?pageNo=${payload.pageNo}&limit=${payload.limit}`,
    )
    if (response) {
      yield put(getQuestionsListSuccess(response.data))
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
      yield put(
        deleteFormSuccess({ id: payload.id, questionsCount: response.data.totalQuestionCount }),
      )
    }
  } catch (error) {
    yield put(deleteFormFailed(error))
  }
}

function* getAnswerList({ payload }) {
  try {
    const response = yield call(
      api.get,
      `${endPoints.GET_ANSWER_LIST}?pageNo=${payload.pageNo}&limit=${payload.limit}`,
    )
    if (response) {
      yield put(getAnswerListSuccess(response.data))
    }
  } catch (error) {
    if (error) {
      yield put(getAnswerListFailed())
    }
  }
}

function* getAnswerById({ payload }) {
  try {
    const response = yield call(api.get, `${endPoints.GET_ANSWER_BY_ID}?answerId=${payload}`)
    console.log('response', response)
    if (response) {
      yield put(getAnswerListByIdSuccess(response.data))
    }
  } catch (error) {
    if (error) {
      yield put(getAnswerListByIdFailed())
    }
  }
}
export function* questionariesSaga() {
  yield takeLatest(CREATE_FORM, createForm)
  yield takeLatest(GET_FORM, getForm)
  yield takeLatest(GET_FORM_LIST, getQuestionsList)
  yield takeLatest(UPDATE_QUESTION_FORM, updateQuestionForm)
  yield takeLatest(GET_FORM_BY_ID, getQuestionFormById)
  yield takeLatest(DELETE_FORM, deleteForm)
  yield takeLatest(GET_ANSWER_LIST, getAnswerList)
  yield takeLatest(GET_ANSWER_LIST_BY_ID, getAnswerById)
}
