import React, { useRef, useState } from "react";
import { faq } from "../../../dummydata";
import Heading from "../common/heading/Heading";

const Faq = () => {
  const [click, setClick] = useState();

  const toggle = (index: any) => {
    if (click === index) {
      return setClick(undefined);
    }
    setClick(index);
  };

  return (
    <>
      <Heading subtitle="FAQS" title="Frequesntly Ask Question" />
      <section className="faq">
        <div className="container">
          {faq.map((val, index) => (
            <div className="box">
              <button
                className="accordion"
                onClick={() => toggle(index)}
                key={index}
              >
                <h2>{val.title}</h2>
                <span>
                  {click === index ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-right"></i>
                  )}
                </span>
              </button>
              {click === index ? (
                <div className="text">
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
