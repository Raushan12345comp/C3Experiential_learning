import React from "react";
import { CourseData } from "./CourseData";
import "./content.css";

const Content = () => {
  return (
    <div className="content">
      {CourseData.map((item, index) => {
        return (
          <div>
            <li className="content-heading" key={index}>
            <div className="head">
              {item.heading}
              <p className="head-p">{item.title}</p>
              </div>

              <div className="content-flex">
                {item.image.map((picture, index) => {
                  return (
                    <li className="content-flex-item" key={index}>
                      <image>{picture.picture}</image>
                      <div className="content-text">
                        <p>{picture.text}</p>
                        <p>{picture.footer}</p>
                      </div>
                    </li>
                  );
                })}
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
