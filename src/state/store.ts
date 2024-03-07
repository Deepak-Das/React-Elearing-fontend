import { configureStore } from '@reduxjs/toolkit'
import sideMenuToggleSlice from "./slice-creater/sideMenuToggleSlice";
import  VideoUploadDialogeSlice  from './slice-creater/toggleVideoUploadSlice';
import headingTextSlice from './slice-creater/headingTextSlice';


export const store = configureStore({
  reducer: {
    sideToggle: sideMenuToggleSlice,
    videoUploadDialoge: VideoUploadDialogeSlice,
    headingText:headingTextSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch