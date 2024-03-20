import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getCourseByTeacher } from '../service/CourseService';
import { CourseModel } from '../model/CourseModel';


interface Props {
  teacherId: number;
}

const useCousreList = ({teacherId}:Props) => {
 const query = useQuery({
   queryKey: ["CouseresByTeacher"],
   queryFn: () => getCourseByTeacher({teacherId}),
 });

 return {...query}
}

export default useCousreList