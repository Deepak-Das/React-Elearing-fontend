import { CourseModel } from "../model/CourseModel";
import axios from "./axios";

interface Props {
  teacherId: number;
  data?: CourseModel;
}

export const getCourseByTeacher = async ({ teacherId }: Props) => {
  try {
    return await axios.get<CourseModel[]>(`teacher/${teacherId}/courses`);
  } catch (err) {
    throw new Error();
  }
};

export const addCourse = async ({ teacherId, data }: Props) => {
  try {
    return await axios.post<CourseModel[]>(
      `teacher/${teacherId}/courses`,
      data
    );
  } catch (err) {
    console.log(err);
  }
};

export const updateCourse = async (data: any) => {
  try {
    const res = await axios.put("/course", data);
  } catch (err) {
    console.log(err);
  }
};
