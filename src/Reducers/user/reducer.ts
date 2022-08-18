import {createSlice} from '@reduxjs/toolkit'
import {signInUser, signUpUser} from "./thunks";

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
        builder
            // sign up logic
            .addCase(signUpUser.fulfilled, (state, action) => {
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
                state.signInLoader = false;
            })
            .addCase(signInUser.pending, (state, action) => {
                state.signInLoader = true;
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.signInLoader = false;
            })
    },
});

export default user.reducer;