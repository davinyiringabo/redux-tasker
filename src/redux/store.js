import { createSlice, configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./slices";

export const store = configureStore({
    reducer: {
        tasks: taskSlice.reducer
    }
})

export const { addTask, deleteTask } = taskSlice.actions;