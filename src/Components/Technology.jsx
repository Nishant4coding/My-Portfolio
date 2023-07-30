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
              <span className="icon-text">C++</span>
            </div>
            <div className="icons">
              <img src="./Icons/java.png" alt="Java" />
              <span className="icon-text">Java</span>
            </div>
            <div className="icons">
              <img src="./Icons/python.png" alt="Python" />
              <span className="icon-text">Python</span>
            </div>
            <div className="icons">
              <img src="./Icons/js.png" alt="Java Script" />
              <span className="icon-text">JavaScript</span>
            </div>
            <div className="icons">
              <img src="./Icons/ts.png" alt="Type Script" />
              <span className="icon-text">TypeScript</span>
            </div>
          </div>
          <br />
          <p>Frameworks</p>
          <div className="familiar">
            <div className="icons">
              <img src="./Icons/react.png" alt="" />
              <span className="icon-text">React</span>
            </div>
          </div>
          <p>Front-End Web</p>
          <div className="familiar">
            <div className="icons">
              <img src="./Icons/html.png" alt="" />
              <span className="icon-text">HTML 5</span>
              
            </div>
            <div className="icons">
              <img src="./Icons/css.png" alt="" />
              <span className="icon-text">CSS 3</span>
            </div>
            <div className="icons">
              <img src="./Icons/bootstrap.png" alt="" />
              <span className="icon-text">Bootsrap</span>
            </div>
            <div className="icons">
              <img src="./Icons/tailwind.png" alt="" />
              <span className="icon-text">Tailwind</span>
            </div>
            <div className="icons">
              <img src="./Icons/chakraui.png" alt="" />
              <span className="icon-text">Chakra UI</span>
            </div>
          </div>
          <p>Backend</p>
          <div className="familiar">
            <div className="icons">
              <img src="./Icons/node.png" alt="" />
              <span className="icon-text">Nodejs</span>
            </div>
            <div className="icons">
              <img src="./Icons/express.png" alt="" />
              <span className="icon-text">Express Js</span>
            </div>
          </div>
          <p>Database</p>
          <div className="familiar">
            <div className="icons">
              <img src="./Icons/mongo.png" alt="" />
              <span className="icon-text">MongoDB</span>
            </div>
            <div className="icons">
              <img src="./Icons/mysql.png" alt="" />
              <span className="icon-text">MySQL</span>
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
