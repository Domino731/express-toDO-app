import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiRequest} from "../../api/methods";

export const signUpUser = createAsyncThunk(
    'users/fetchByIdStatus',
    async (data: { password: string, email: string }, thunkAPI) => {
        const response = await apiRequest('POST', '/signup', data)
        return response.data
    }
)