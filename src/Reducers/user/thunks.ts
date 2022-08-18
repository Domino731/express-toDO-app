import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiRequest} from "../../api/methods";

export const signUpUser = createAsyncThunk(
    'user/signUp',
    async (data: { password: string, email: string }, thunkAPI) => {
        const response = await apiRequest('POST', '/signup', data)
        return response.data
    }
)

export const signInUser = createAsyncThunk(
    'user/signIn',
    async (data: { password: string, email: string }, thunkAPI) => {
        const response = await apiRequest('POST', '/login', data);
        return response.data

    }
)