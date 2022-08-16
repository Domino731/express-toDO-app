import {createSlice} from '@reduxjs/toolkit'
import {signUpUser} from "./thunks";

export interface UserState {
    isLogged: boolean;
    signUpLoader: boolean;
    signInLoader: boolean;
    passwordRecoveryLoader: boolean;
}

const initialState: UserState = {
    isLogged: false,
    signUpLoader: false,
    signInLoader: false,
    passwordRecoveryLoader: false
}

export const USER_REDUCER_NAME = 'user';

/** REDUX user reducer */
export const user = createSlice({
    name: 'counter',
    initialState,
    // standard reducer logic, with auto-generated action types per reducer
    reducers: {
        changeIsLogged: (state, action) => {
            state.isLogged = action.payload;
        }
    },
    // Add reducers for additional action types
    extraReducers: (builder) => {
        // signUp logic
        builder
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.signUpLoader = false;
            })
            .addCase(signUpUser.pending, (state, action) => {
                state.signUpLoader = true;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.signUpLoader = false;
            })
    },
});

export default user.reducer;