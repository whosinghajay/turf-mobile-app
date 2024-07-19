import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer';
import {userAPI} from './api/userAPI';
import {turfAPI} from './api/turfAPI';
import turfReducer from './reducer/turfReducer';

// export const server = 'https://624a-27-5-6-82.ngrok-free.app';

export const store = configureStore({
  reducer: {
    user: userReducer,
    turf: turfReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [turfAPI.reducerPath]: turfAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userAPI.middleware, turfAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
