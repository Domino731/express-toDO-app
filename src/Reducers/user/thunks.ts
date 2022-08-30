import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiRequest} from "../../api/methods";
import {USER_CONSTANTS} from "./const";
import {API_METHODS} from "../../api/const";

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
    async (payload: { title: string, userId: string, onSuccess: () => void }, thunkApi) => {
        console.log(thunkApi);
        const {title, userId, onSuccess} = payload;
        const response = await apiRequest(API_METHODS.POST, '/add-task', {title, userId});
        if (response.status === 200) {
            onSuccess();
        }
        return response.data;
    }
)