import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import pendingSlice from "./pendingSlice";
import editModalSlice from "./editModalSlice";
import resultSlice from "./resultSlice";

const appStore = configureStore({
  reducer: {
    modal: modalSlice,
    pending: pendingSlice,
    editModal: editModalSlice,
    result: resultSlice,
  },
});

export default appStore;
