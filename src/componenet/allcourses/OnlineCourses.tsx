import React from "react";
import "./courses.css";
import { online } from "../../../dummydata";
import Heading from "../common/heading/Heading";
import Hero from "../home/hero/Hero";

const OnlineCourses = () => {
  return (
    <>
      <Hero />
      <section className="online">
        <div className="container">
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
