import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    delete: false,
    edit: false,
    create: false,
  },
  reducers: {
    modalOpenDelete: (state, { payload }) => {
      state.delete = payload;
    },
    modalOpenCreate: (state, { payload }) => {
      state.create = payload;
    },
    modalOpenEdit: (state, { payload }) => {
      state.edit = payload;
    },
    modalClose: (state, { payload }) => {
      state.delete = false;
      state.edit = false;
      state.create = false;
    },
  },
});

export const { modalClose, modalOpenDelete, modalOpenCreate, modalOpenEdit } =
  modalSlice.actions;
export default modalSlice.reducer;
