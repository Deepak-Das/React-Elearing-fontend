import { useQuery } from "@tanstack/react-query";
import { allCourse } from "../../service/CourseService";
import PlayList from "../VideoPlayer";
import Heading from "../common/heading/Heading";
import Hero from "../home/hero/Hero";
import "./courses.css";
import CourseCard from "../CourseCard ";
import Item from "antd/es/list/Item";
import { BASE_URL } from "../../service/axios";
import { online } from "../../../dummydata";
import { Link } from "react-router-dom";

const OnlineCourses = () => {
  // const { data } = useQuery({
  //   queryKey: ["allCoirse"],
  //   queryFn: allCourse,
  // });
  return (
    <>
      <Hero />
      <section className="online">
        <div className="container">
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {online.map((val, i) => (
              <Link to={`cat/${i + 1}`}>
                <div className="box">
                  <div className="img">
                    <img src={val.cover} />
                    <img src={val.hoverCover} alt="" className="show" />
                  </div>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
