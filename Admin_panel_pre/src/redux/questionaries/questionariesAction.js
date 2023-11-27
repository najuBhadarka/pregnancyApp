import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  error: null,
  loading: false,
  data: null
};

const questionariesReducer = createSlice({
  name: "question",
  initialState,
  reducers: {
    createForm(state) {
      console.log("here--------", state)
      state.loading = false;
    },
    actionFalied(state, { payload }) {
      state.loading = false;
      state.error = payload?.response?.data?.message;
    },
  },
});

export const { name, actions } = questionariesReducer;
export default questionariesReducer.reducer;
