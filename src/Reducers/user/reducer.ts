import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {addNewTask, getTasks, signInUser, signUpUser} from "./thunks";
import {TaskInterface} from "./types";

export interface UserState {
    // user id
    user: string | null;
    // loaders flags
    signUpLoader: boolean;
    signInLoader: boolean;
    addNewTaskLoader: boolean;
    passwordRecoveryLoader: boolean;
    // data about tasks
    tasks: Array<TaskInterface>;
    // tasks id array
    selectedTasks: Array<string>;
}

const initialState: UserState = {
    user: null,
    signUpLoader: false,
    signInLoader: false,
    passwordRecoveryLoader: false,
    addNewTaskLoader: false,
    tasks: [],
    selectedTasks: []
}

export const USER_REDUCER_NAME = 'user';

/** REDUX user reducer */
export const user = createSlice({
    name: USER_REDUCER_NAME,
    initialState,
    // standard reducer logic, with auto-generated action types per reducer
    reducers: {
        userChangeSelectedTasks: (state, action: PayloadAction<Array<string>>) => {
            state.selectedTasks = action.payload;
        }
    },
    // Add reducers for additional action types
    extraReducers: (builder) => {
        builder
            // sign up logic
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.user = '';
                state.signUpLoader = false;
            })
            .addCase(signUpUser.pending, (state, action) => {
                state.signUpLoader = true;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.signUpLoader = false;
            })

            // sign in logic
            .addCase(signInUser.fulfilled, (state, action) => {
                state.user = action.payload.data.id;
                state.signInLoader = false;
            })
            .addCase(signInUser.pending, (state, action) => {
                state.signInLoader = true;
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.signInLoader = false;
            })

            // adding new task logic
            .addCase(addNewTask.fulfilled, (state, action) => {
                state.addNewTaskLoader = false;
            })
            .addCase(addNewTask.pending, (state, action) => {
                state.addNewTaskLoader = true;
            })
            .addCase(addNewTask.rejected, (state, action) => {
                state.addNewTaskLoader = false;
            })

            // get all user tasks logic
            .addCase(getTasks.fulfilled, (state, action) => {
                state.tasks = action.payload.data;
                state.addNewTaskLoader = false;
            })
            .addCase(getTasks.pending, (state, action) => {
                state.addNewTaskLoader = true;
            })
            .addCase(getTasks.rejected, (state, action) => {
                state.tasks = [];
                state.addNewTaskLoader = false;
            })
    },
});

export const {userChangeSelectedTasks} = user.actions;
export default user.reducer;