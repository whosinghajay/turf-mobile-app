import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer';

// export const server = 'http://localhost:3000';
// console.log(server);

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
