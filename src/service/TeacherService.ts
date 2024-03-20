import { TeacherModel } from "../model/TeacherModel";
import axios from "./axios";

export const getAllTeacher = async () => {
  return await axios.get<TeacherModel[]>("/teacher");
};

export const saveTeacher = async (data: TeacherModel) => {
  try {
    const res = await axios.post<TeacherModel>("/teacher", data);
  } catch (err) {
    console.log(err);
  }
};

export const updateTeacher = async (data: TeacherModel) => {
  try {
    const res = await axios.put<TeacherModel>("/teacher", data);
  } catch (err) {
    console.log(err);
  }
};
