import {configureStore} from '@reduxjs/toolkit'
import user from './user/reducer';

const store = configureStore({
    reducer: {
        user
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ReduxState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;