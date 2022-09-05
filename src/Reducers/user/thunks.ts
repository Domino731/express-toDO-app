import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiRequest} from "../../api/methods";
import {USER_CONSTANTS} from "./const";
import {API_METHODS} from "../../api/const";
import {userIdSelector, userSelectedTasksSelector} from "./selectors";

export const signUpUser = createAsyncThunk(
    USER_CONSTANTS.SIGN_UP,
    async (payload: { password: string, email: string, onSuccess: () => void }, thunkAPI) => {
        const {password, email, onSuccess} = payload;
        const response = await apiRequest('POST', '/signup', {password, email});
        if (response.status === 201) {
            onSuccess();
        }
        return response.data;
    }
)

export const signInUser = createAsyncThunk(
    USER_CONSTANTS.SIGN_IN,
    async (payload: { password: string, email: string, onSuccess: () => void }, thunkAPI) => {
        const {password, email, onSuccess} = payload;
        const response = await apiRequest(API_METHODS.POST, '/login', {password, email});
        if (response.status === 200) {
            onSuccess();
        }
        return response.data;

    }
);

export const addNewTask = createAsyncThunk(
    USER_CONSTANTS.ADD_NEW_TASK,
    async (payload: { title: string, userId: string, onSuccess: () => void }) => {
        const {title, userId, onSuccess} = payload;
        const response = await apiRequest(API_METHODS.POST, '/add-task', {title, userId});
        if (response.status === 200) {
            onSuccess();
        }
        return response.data;
    }
);

export const getTasks = createAsyncThunk(
    USER_CONSTANTS.GET_TASKS,
    async (payload: { userId: string }) => {
        const {userId} = payload;
        const response = await apiRequest(API_METHODS.GET, '/tasks', {}, {params: {userId}});
        return response.data;
    }
);

export const deleteTasks = createAsyncThunk(
    USER_CONSTANTS.DELETE_TASKS,
    async (payload: { userId: string }, {getState}) => {
        // @ts-ignore
        const userId = userIdSelector(getState());
        // @ts-ignore
        const selectedTasks = userSelectedTasksSelector(getState())

        let tasksQuery = selectedTasks.join(",");

        const response = await apiRequest(API_METHODS.DELETE, `/tasks/?userId=${userId}&tasks=${tasksQuery}`);
        return response.data;
    }
);