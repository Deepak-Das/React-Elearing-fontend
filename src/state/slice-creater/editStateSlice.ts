import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TeacherModel } from "../../model/TeacherModel";

interface EditState {
  teacher?: TeacherModel;
}

const initialState: EditState = {
  teacher: undefined,
};

export const EditStateSlice = createSlice({
  name: "editState",
  initialState,
  reducers: {
    setTeacher: (state, actions: PayloadAction<TeacherModel>) => {
      state.teacher = actions.payload;
    },
  },
});

export const { setTeacher } = EditStateSlice.actions;
export default EditStateSlice.reducer;
