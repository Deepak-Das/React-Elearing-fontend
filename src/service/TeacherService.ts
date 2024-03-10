import { TeacherModel } from "../model/TeacherModel";
import axios from "./axios";

export const getAllTeacher = async () => {
  return (await axios.get<TeacherModel[]>("/teacher"));
  
};
