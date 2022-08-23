import {configureStore} from '@reduxjs/toolkit'
import user, {USER_REDUCER_NAME} from './user/reducer';
import tasks from './tasks/reducer';
import {TASKS_REDUCER_NAME} from "./tasks/reducer";

const store = configureStore({
    reducer: {
        [USER_REDUCER_NAME]: user,
        [TASKS_REDUCER_NAME]: tasks
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ReduxState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;