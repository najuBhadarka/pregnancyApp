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
      console.log("🚀 ~ file: userAction.js:27 ~ setUserList ~ payload:", payload)
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
    setdeleteDeliveryboy(state,{payload}){
      state.loading = false;
      state.userData = state?.userData?.filter((item)=> {
        return  item?.id !== payload?.id ? item : ""  
      })
    }
  },
});

export const { name, actions } = userReducer;
export default userReducer.reducer;
