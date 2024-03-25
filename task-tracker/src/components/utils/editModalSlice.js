import { createSlice } from "@reduxjs/toolkit";

const editModalSlice = createSlice({
  name: "editModal",
  initialState: {},
  reducers: {
    currentEditModal: (state, { payload }) => {
      return payload;
    },
  },
});

export const { currentEditModal } = editModalSlice.actions;
export default editModalSlice.reducer;
