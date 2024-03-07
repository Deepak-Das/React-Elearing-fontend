import {PayloadAction, createSlice} from '@reduxjs/toolkit'

 interface headingTextState {
   title?: string;
 }

const initialState: headingTextState = {
  
};

export const HeadingTextSlice = createSlice({
  name: "headingText",
  initialState,
  reducers: {
    setHeading:(state, actions:PayloadAction<string>)=>{
      state.title=actions.payload
    }
  },
});

export const { setHeading } = HeadingTextSlice.actions;
// export const useSideMenuSelect=(state:RootState)=> state.sideMenu.collapse;
export default HeadingTextSlice.reducer