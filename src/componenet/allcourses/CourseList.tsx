import React from "react";
import { allCourse, allCourseByCat } from "../../service/CourseService";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Hero from "../home/hero/Hero";
import Heading from "../common/heading/Heading";
import CourseCard from "../CourseCard ";
import { BASE_URL } from "../../service/axios";
import { online } from "../../../dummydata";

function CourseList() {
  const { catId } = useParams();
  const { data } = useQuery({
    queryKey: ["singleCoursef", catId],
    queryFn: () => allCourseByCat({ catId: catId }),
  });
  return (
    <>
      <Hero />
      <section className="">
        <div className="container">
          <Heading subtitle="COURSES" title={`Welcome to course playlist`} />
          <div className="flex w-full justify-around m-20">
            {data?.map((val) => {
              // if (val.videos.length === 0) return null;

              return (
                <CourseCard
                  category={val.category}
                  courseId={val.courseId}
                  date={val.createDate + ""}
                  description={val.description}
                  image={BASE_URL + "/file/" + val.courseImg}
                  title={val.title}
                  btext="View Videos"
                  hlink={`../course/${val.courseId}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseList;
