import { TeacherModel } from "../model/TeacherModel";
import axios from "./axios";

export const getAllTeacher = async () => {
  return await axios.get<TeacherModel[]>("/teacher");
};
export const postSingleTeacher = async (data: TeacherModel) => {
  const res = (await axios.post<TeacherModel>("/teacher", data)).data;
  // console.log(res.data);
};
