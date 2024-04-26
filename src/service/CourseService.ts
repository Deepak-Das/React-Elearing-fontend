import { CourseModel } from "../model/CourseModel";
import axios from "./axios";

interface Props {
  teacherId?: number | string;
  courseId?: number | string;
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
export const updateCourse = async ({ courseId, data }: Props) => {
  try {
    return await axios.put<CourseModel[]>(`course/${courseId}`, data);
  } catch (err) {
    console.log(err);
  }
};

export const getCourseById = async ({ courseId }: Props) => {
  try {
    return (await axios.get<CourseModel>(`course/${courseId}`)).data;
  } catch (err) {
    console.log(err);
  }
};
export const allCourse = async () => {
  try {
    return (await axios.get<CourseModel[]>(`course`)).data;
  } catch (err) {
    console.log(err);
  }
};
