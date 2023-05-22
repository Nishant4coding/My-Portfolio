import React from "react";
import "./Intro.css";
import "./Technology.css";
export default function Technology() {
  return (
    <div className="main" id="skills">
      <div className="Info-2" >
        <div className="profile-2">
          <h1>I am Familiar with</h1>
          <p>Programming Languages</p>
          <div className="familiar">
            <div className="icons">
              
              <img src="./Icons/c.png" alt="c" />
              {/* <label htmlFor="./Icons/c.png"></label> */}
            </div>
            <div className="icons">
              <img src="./Icons/c++.png" alt="C++" />
            </div>
            <div className="icons">
              <img src="./Icons/java.png" alt="Java" />
            </div>
            <div className="icons">
              <img src="./Icons/python.png" alt="Python" />
            </div>
            <div className="icons">
              <img src="./Icons/js.png" alt="Java Script" />
            </div>
            <div className="icons">
              <img src="./Icons/ts.png" alt="Type Script" />
            </div>
          </div>
          <br />
          <p>Frameworks</p>
          <div className="familiar">
            <div className="icons">
              <img src="./Icons/react.png" alt="" />
            </div>
          </div>
          <p>Front-End Web</p>
          <div className="familiar">
            <div className="icons">
              <img src="./Icons/html.png" alt="" />
              
            </div>
            <div className="icons">
              <img src="./Icons/css.png" alt="" />
            </div>
            <div className="icons">
              <img src="./Icons/bootstrap.png" alt="" />
            </div>
            <div className="icons">
              <img src="./Icons/tailwind.png" alt="" />
            </div>
          </div>
          <p>Backend</p>
          <div className="familiar">
            <div className="icons">
              <img src="./Icons/node.png" alt="" />
            </div>
          </div>
          <p>Database</p>
          <div className="familiar">
            <div className="icons">
              <img src="./Icons/mongo.png" alt="" />
            </div>
            <div className="icons">
              <img src="./Icons/mysql.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="Info-2">
        <div className="profile-2">
            <h1>Education</h1>
                <p>Academics</p>
            <ul className="time-line">
                <li>
                    <h3>Secondary</h3>
                    <small> CBSE(2019)</small>
                </li>
                <li>
                    <h3>Senior Secondary</h3>
                    <small> CBSE(2021)</small>
                </li>
                <li>
                    <h3>Bachelor's of Technology</h3>
                    <small> 2021-present</small>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
