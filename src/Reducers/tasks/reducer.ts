import {createSlice} from '@reduxjs/toolkit'
import {TaskDataInterface} from "./types";

// interface for reducer state
export interface TasksState {
    data: Array<TaskDataInterface>;
    buttonLoader: boolean;
}

// initial state for reducer
const initialState: TasksState = {
    data: [],
    buttonLoader: false
}

/** tasks reducer name */
export const TASKS_REDUCER_NAME = 'tasks';

/** REDUX user reducer */
export const tasks = createSlice({
    name: TASKS_REDUCER_NAME,
    initialState,
    // standard reducer logic, with auto-generated action types per reducer
    reducers: {},
    // Add reducers for additional action types
    extraReducers: (builder) => {
        // builder
    },
});

export default tasks.reducer;