import React, {useState} from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Image, Button } from "react-bootstrap";

import "./courses.css";
import Content from "./Content";

const Courses = () => {
  return (
    <>
      <div className="container">
        <div className="child-1">
          <h6 className="h6">
          <a className="link">
            <FiChevronLeft />
            Back to all courses
            </a>
          </h6>
          <h1>Logic</h1>
          <h5 className="h5">
            Stretch your analytic muscles with knights, knaves, logic <br />{" "}
            gates, and more!
          </h5>
          <p className="p">
            The beginning of our introductory math journey is Logic. Through
            these <br />
            challenging problem solving exercises, you'll construct the critical
            thinking skills
            <br /> that are the basis for mathematical reasoning.
          </p>
          <p className="p">
            You'll use limited information to make predictions - eliminating the
            impossible <br /> to uncover the truth. This course builds uo to
            some truly mind-bending
            <br /> challenges!
          </p>

          <p className="p">
            By the end of this course, you'll be able to spot logical fallacies,
            navigate some <br /> strategic game theory, understand machine
            logic, and use the symbolic <br />
            languages of logic to
            <br />
            understand fun riddles.
          </p>

          
        <h4>Topics covered</h4>
        <div className="topics">
        <div >
          <ul>
            <li className="li">Binary</li>
            <li className="li">Truth Tables</li>
            <li className="li">Logic Gates</li>
            <li className="li">venn and Euler Diagrams</li>
            <li className="li">Propositional Logic</li>
            <li className="li">The Square of Opposition</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="li">De Morgan's Laws</li>
            <li className="li">Inclusive and Exclusive OR</li>
            <li className="li">Combinatorics</li>
            <li className="li">Knight and Knave Puzzles</li>
            <li className="li">Combinatorial Game</li>
            <li className="li">Algorithms</li>
          </ul>
        </div>
      </div>
      <a className="link">
          <h6 className="h6">View prerequisites and next steps</h6>
      </a>
        </div>
        <div className="child-2">
          <Image className="image" src="Images/circle.jpg"></Image>
          <div className="child-text">
            <h4 className="text-1">
              37<p className="text">Interactive quizzes</p>
            </h4>
            <h4 className="text-2">
              265+<p className="text p">Concepts and exercises</p>
            </h4>
          </div>
        <Button className="button">Start Course</Button>

        </div>
      </div>

      <Content />
    </>
  );
};

export default Courses;
