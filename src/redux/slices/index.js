import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
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