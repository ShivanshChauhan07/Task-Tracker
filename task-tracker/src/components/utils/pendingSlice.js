import { createSlice } from "@reduxjs/toolkit";

const pendingSlice = createSlice({
  name: "pending",
  initialState: [],
  reducers: {
    addPendingTask: (state, { payload }) => {
      state.push(payload);
    },
    findTask: (state, { payload }) => {
      let result = state.find((task, index) => {
        if (task.title === payload.title) {
          state[index] = {
            ...state[index],
            priority: payload.priority,
            status: payload.status,
            endDate: payload.endDate,
          };
          return;
        }
      });
      return;
    },
    deleteTask: (state, { payload }) => {
      return state.filter((singleTask) => singleTask.title !== payload.title);
    },
  },
});

export const { addPendingTask, findTask, deleteTask } = pendingSlice.actions;
export default pendingSlice.reducer;
