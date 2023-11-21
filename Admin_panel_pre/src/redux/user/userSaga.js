import { takeEvery, call, put } from "redux-saga/effects";
import { api, endPoints } from "../../utils/api";
import { actions } from "./userAction";

function* getUser() {
  try {
    const response = yield call(api.get, endPoints.GET_USER);
    yield put(actions.setUser(response.data));
  } catch (error) {
    yield put(actions.actionFalied(error));
  }
}

function* getUserList({ payload }) {
  try {
    const response = yield call(api.get, endPoints.GET_USER_LIST);
    yield put(actions.setUserList(response.data.userList));
  } catch (error) {
    yield put(actions.actionFalied(error));
  }
}

function* setdeleteDeliveryboy({ payload }) {
  try {
    const response = yield call(api.delete, endPoints.DELETE_DELIVERY_USER, {
      urlParams: { id: payload.id },
    });
    yield put(actions.deleteDeliveryboy(response.data));
  } catch (error) {
    yield put(actions.actionFalied(error));
  }
}

function* updateUser({ payload }) {
  try {
    const updateUser = yield call(
      api.put,
      endPoints.UPDATE_USER,
      payload.body,
      {
        urlParams: { id: payload.ids },
      }
    );
    yield put(actions.setUpdateUser(payload.body));
    if (updateUser.data) {
      payload.callback();
    }
  } catch (error) {
    yield put(actions.actionFalied(error));
  }
}

function* deleteUser({ payload }) {
  try {
    const response = yield call(api.put, endPoints.DELETE_USER, payload.body, {
      urlParams: { id: payload.id },
    });
    if (response.status == 200) {
      yield put(actions.setDeleteUser(payload.id));
    }
  } catch (error) {
    yield put(actions.actionFalied(error));
  }
}

function* addUser({ payload }) {
  try {
    const response = yield call(api.post, endPoints.ADD_USER, payload.body);
    yield put(actions.setUser(response));
    if (response?.data?.data?._id) {
      yield call(payload.callback(response?.data?.data?.id));
    }
  } catch (error) {
    yield put(actions.actionFalied(error));
  }
}

export function* userSaga() {
  yield takeEvery(actions.getUser, getUser);
  yield takeEvery(actions.updateUser, updateUser);
  yield takeEvery(actions.getUserList, getUserList);
  yield takeEvery(actions.setdeleteDeliveryboy, setdeleteDeliveryboy);
  yield takeEvery(actions.deleteUser, deleteUser);
  yield takeEvery(actions.addUser, addUser);
}
