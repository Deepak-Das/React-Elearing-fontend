import {PayloadAction, createSlice} from '@reduxjs/toolkit'

 interface VideoUploadDialogeState {
   collapse: boolean;
 }

const initialState: VideoUploadDialogeState = {
  collapse: false,
};

export const VideoUploadDialogeSlice= createSlice({
  name: "videoUploadDialoge",
  initialState,
  reducers: {
    vDialogetoggle: (state) => {
      state.collapse = !state.collapse;
    },
    setVDialoge: (state,actions:PayloadAction<boolean>) => {
      state.collapse = actions.payload;
    },
  },
});

export const { vDialogetoggle, setVDialoge } = VideoUploadDialogeSlice.actions;
// export const useSideMenuSelect=(state:RootState)=> state.sideMenu.collapse;
export default VideoUploadDialogeSlice.reducer