import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  error: null,
  loading: false,
  data: [],
  userData: [],
  token: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, { payload }) {
      state.loading = true;
      state.token = payload;
    },
    setUser(state, { payload }) {
      state.loading = false;
      state.data = payload.data;
    },
    getUserList(state) {
      state.loading = true;
    },
    setUserList(state, { payload }) {
      state.loading = false;
      state.userData = payload;
    },
    updateUser(state) {
      state.loading = false;
    },
    setUpdateUser(state, { payload }) {
      state.data = { ...(state.data || []), ...payload };
      state.loading = false;
    },
    actionFalied(state, { payload }) {
      state.loading = false;
      state.error = payload?.response?.data?.message;
    },
    setdeleteDeliveryboy(state, { payload }) {
      state.loading = false;
      state.userData = state?.userData?.filter((item) => {
        return item?.id !== payload?.id ? item : "";
      });
    },
    deleteUser(state) {
      state.loading = false;
    },
    setDeleteUser(state, { payload }) {
      state.loading = false;
      state.userData = state?.userData?.filter((item) => {
        return item?._id != payload ? item : "";
      });
    },
    addUser(state) {
      state.loading = true;
    },
    updateUserStatus(state) {
      state.loading = true;
    },
    setUpdatedUserStatus(state, { payload }) {
      state.loading = false;
      state.userData = state?.userData?.map((ele) => {
        if (ele._id == payload.data.userList._id) {
          ele.status = payload.data.userList.status;
        }
        return ele;
      });
    },
  },
});

export const { name, actions } = userReducer;
export default userReducer.reducer;
