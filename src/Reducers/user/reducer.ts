import {createSlice} from '@reduxjs/toolkit'

export interface UserState {
    isLogged: boolean;
}

const initialState: UserState = {
    isLogged: false
}

export const USER_REDUCER_NAME = 'user';

export const user = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeIsLogged: (state, action) => {
            state.isLogged = action.payload;
        }
    },
})

export const {changeIsLogged} = user.actions

export default user.reducer