import { createSlice } from "@reduxjs/toolkit";

const currentClassSlice = createSlice({
  name: "currentClass",
  initialState: {
    currentClass: {},
  },
  reducers: {
    setCurrentClass: (state, action) => {
      state.currentClass = { ...state.currentClass, ...action.payload };
    },
    clearCurrentClass: (state, action) => {
      state.currentClass = {};
    },
  },
});

export const { setCurrentClass, clearCurrentClass } = currentClassSlice.actions;

export const selectCurrentClass = (state) => state.class.currentClass;

export default currentClassSlice.reducer;
