import { takeEvery, call, put } from "redux-saga/effects";
import { api, endPoints } from "../../utils/api";
import { actions } from "./authAction";
import Cookies from 'js-cookie'


const TOKEN = "token";

function* signIn({ payload }) {
  try {
    const response = yield call(
      api.post,
      endPoints.ADMIN_LOGIN,
      payload.body
      //  {
      // withCredentials: true,
      // }
    );

    if (response) {
      yield put(actions.setAuth(response));
      Cookies.set(TOKEN, response.data.token, { path: '/' })
      payload.callback();
    }
  } catch (error) {
    if (error) {
      yield put(actions.actionFalied(error));
    }
  }
}

function* logOut({ payload }) {
  try {
    const logout = yield call(api.post, endPoints.ADMIN_LOGOUT);
    if (logout) {
      Cookies.remove(TOKEN, { path: '/' })
      payload.callback();
    }
  } catch (error) {
    yield put(actions.actionFalied(error));
  }
}

function* forgotPassword({ payload }) {
  try {
    const response = yield call(
      api.post,
      endPoints.FORGOT_PASSWORD,
      payload.body
    );

    if (response) {
      yield put(actions.setEmail(response));
      yield call(payload.callback);
    }
  } catch (error) {
    yield put(actions.actionFalied(error));
  }
}

function* newPassword({ payload }) {
  try {
    const response = yield call(api.post, endPoints.NEW_PASSWORD, payload.body);

    if (response) {
      yield put(actions.setNewPassword(response));
      yield call(payload.callback);
    }
  } catch (error) {
    yield put(actions.actionFalied(error));
  }
}

function* resetPassword({ payload }) {
  try {
    const { data: resetPassword } = yield call(
      api.post,
      endPoints.RESET_PASSWORD,
      payload
    );

    yield put(actions.setResetPassword(resetPassword));
    yield call(payload.callback);
  } catch (error) {
    yield put(actions.actionFalied(error));
  }
}

export function* authSaga() {
  yield takeEvery(actions.signIn, signIn);
  yield takeEvery(actions.resetPassword, resetPassword);
  yield takeEvery(actions.forgotPassword, forgotPassword);
  yield takeEvery(actions.newPassword, newPassword);
  yield takeEvery(actions.logOut, logOut);
}
