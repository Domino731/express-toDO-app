import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiRequest} from "../../api/methods";
import {USER_CONSTANTS} from "./const";

export const signUpUser = createAsyncThunk(
    USER_CONSTANTS.SIGN_UP,
    async (payload: { password: string, email: string, onSuccess: () => void }, thunkAPI) => {
        const {password, email, onSuccess} = payload;
        const response = await apiRequest('POST', '/signup', {password, email});
        if (response.status === 201) {
            onSuccess();
        }
        return response.data
    }
)

export const signInUser = createAsyncThunk(
    USER_CONSTANTS.SIGN_IN,
    async (payload: { password: string, email: string, onSuccess: () => void }, thunkAPI) => {
        const {password, email, onSuccess} = payload;
        const response = await apiRequest('POST', '/login', {password, email});
        if (response.status === 200) {
            onSuccess();
        }
        return response.data

    }
)