import { takeEvery, call, put } from "redux-saga/effects";
import { api, endPoints } from "../../utils/api";
import { actions } from "./questionariesAction";

function* createFormFun({ payload }) {
  console.log("🚀 ~ file: questionariesSaga.js:8 ~ function*createForm ~ payload:", payload)
  try {
    const response = yield call(
      api.post,
      endPoints.CREATE_FORM,
      payload
    );

    if (response) {
      payload.callback();
    }
  } catch (error) {
    if (error) {
      yield put(actions.actionFalied(error));
    }
  }
}

export function* questionSaga() {
  yield takeEvery(actions.createForm, createFormFun);
}
