import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  error: null,
  loading: false,
  message: "",
  data: null,
  token: "",
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, { payload }) {
      state.loading = false;
      state.token = payload.data.access_token;
      state.data = payload.data.data;
      state.message = payload.data.message;
    },
    signIn(state, { payload }) {
      state.loading = true;
      state.data = payload;
    },
    setEmail(state, { payload }) {
      state.data = payload?.data?.data?.email;
      state.loading = true;
    },
    forgotPassword(state) {
      state.loading = false;
    },
    newPassword(state) {
      state.loading = false;
    },
    setNewPassword(state, { payload }) {
      state.loading = true;
      state.data = payload;
    },

    resetPassword(state) {
      state.loading = false;
    },
    setResetPassword(state, { payload }) {
      state.loading = false;
      state.user = [...state, payload.body];
    },
    logOut(state) {
      state.loading = true;
    },
    actionFalied(state, { payload }) {
      state.loading = false;
      state.error = payload?.response?.data?.message;
    },
  },
});

export const { name, actions } = authReducer;
export default authReducer.reducer;
