import { configureStore } from '@reduxjs/toolkit'
import sideMenuToggleSlice from "./slice-creater/sideMenuToggleSlice";


export const store = configureStore({
  reducer: {
    sideToggle: sideMenuToggleSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch