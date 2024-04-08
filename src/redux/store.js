import { createSlice, configureStore } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) =>{
            return [action.payload,...state];
        },
        deleteTask: (state, action) =>{
            return state.filter((task)=> task.id !== action.payload);
        }
    }
})

export const store = configureStore({
    reducer: {
        tasks: taskSlice.reducer
    }
})

export const { addTask, deleteTask } = taskSlice.actions;