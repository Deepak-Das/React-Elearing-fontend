import { useQuery } from "@tanstack/react-query";
import { allCourse } from "../../service/CourseService";
import PlayList from "../VideoPlayer";
import Heading from "../common/heading/Heading";
import Hero from "../home/hero/Hero";
import "./courses.css";
import CourseCard from "../CourseCard ";
import Item from "antd/es/list/Item";
import { BASE_URL } from "../../service/axios";

const OnlineCourses = () => {
  const { data } = useQuery({
    queryKey: ["allCoirse"],
    queryFn: allCourse,
  });
  return (
    <>
      <Hero />
      <section className="">
        <div className="container">
          <Heading subtitle="COURSES" title="Welcome to This" />
          <div className="flex w-full justify-around m-20">
            {data?.map((val) => {
              if (val.videos.length === 0) return null;

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
};

export default OnlineCourses;
