import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, Thumbs } from "react-responsive-carousel";
import "./Intro.css";
import "./Project.css";
import Like from "./Like";

export default function Project() {
  return (
    <div>
      <div className="main" id="project">
        <div className="Info-2">
          <h1>My Projects</h1>
          <div className="project">
            <Carousel
              className="crsl"
              showArrows={true}
              width={1000}
              infiniteLoop
              renderArrowPrev={(clickHandler) => (
                <div
                  className="custom-arrow custom-arrow-prev"
                  onClick={clickHandler}
                >
                  &lt;
                </div>
              )} // Custom left arrow
              renderArrowNext={(clickHandler) => (
                <div
                  className="custom-arrow custom-arrow-next"
                  onClick={clickHandler}
                >
                  &gt;
                </div>
              )}
            >
              
              <div className="card details">
                <img
                  src="./Projects/Dev-Resume.jpg"
                  alt="Image"
                  className="card-img"
                />
                <div className="card-content">
                  <h3 className="card-title">Dev-Resume</h3>
                  <div className="contents">
                    <h3>Technology Used</h3>
                    <div className="icons">
                      <img src="./Icons/react.png" alt="React" />
                      <span className="icon-text">React</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/chakraui.png" alt="chakra" />
                      <span className="icon-text">Chakra UI</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/html.png" alt="html" />
                      <span className="icon-text">HTML 5</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/css.png" alt="Css" />
                      <span className="icon-text">CSS 3</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/js.png" alt="js" />
                      <span className="icon-text">Javascript</span>
                    </div>
                  </div>
                  <div className="contents">
                    <h4> Elevate Your Developer Resume Effortlessly</h4>
                  </div>
                
                  <Like />
                  <a href="https://nishant4coding.github.io/Dev-Resume/">
                    <button>
                      {" "}
                      <b>Repository</b>{" "}
                    </button>{" "}
                  </a>
                </div>
              </div>

              <div className="card details">
                <img
                  src="./Projects/meetup.png"
                  alt="Image"
                  className="card-img"
                />
                <div className="card-content">
                  <h3 className="card-title">Meetup</h3>
                  <div className="contents">
                    <h3>Technology Used</h3>
                    <div className="icons">
                      <img src="./Icons/react.png" alt="React" />
                      <span className="icon-text">React</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/socket-io.png" alt="socket.io" />
                      <span className="icon-text">Socket Io</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/html.png" alt="html" />
                      <span className="icon-text">HTML</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/node.png" alt="nodejs" />
                      <span className="icon-text">Nodejs</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/css.png" alt="Css" />
                      <span className="icon-text">CSS</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/js.png" alt="js" />
                      <span className="icon-text">JavaScript</span>
                    </div>
                  </div>
                  <div className="contents">
                    <h4>Connect, Chat, Make Friends, Embrace Community.</h4>
                  </div>
                  <Like />
                  <a href="https://meetup-6wqi.onrender.com/">
                    <button>
                      {" "}
                      <b>Repository</b>{" "}
                    </button>{" "}
                  </a>
                </div>
              </div>

              <div className="card details">
                <img
                  src="./Projects/Musicker.jpg"
                  alt="Image"
                  className="card-img"
                />
                <div className="card-content">
                  <h3 className="card-title">Musicker</h3>
                  <div className="contents">
                    <h3>Technology Used</h3>
                    <div className="icons">
                      <img src="./Icons/python.png" alt="python" />
                      <span className="icon-text">Python</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/dearpygui.png" alt="dearppygui" />
                      <span className="icon-text">DearPyGUI</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/tkinter.png" alt="tkinter" />
                      <span className="icon-text">Tkinter</span>
                    </div>
                  </div>
                  <div className="contents">
                    <h4> Your Ultimate Python Music Player</h4>
                  </div>
                  <Like />
                  <a href="https://github.com/Nishant4coding/Musicker">
                    <button>
                      {" "}
                      <b>Repository</b>{" "}
                    </button>{" "}
                  </a>
                </div>
              </div>

              <div className="card details">
                <img
                  src="./Projects/task-todo.png"
                  alt="Image"
                  className="card-img"
                />
                <div className="card-content">
                  <h3 className="card-title">Task-To-Do</h3>
                  <div className="contents">
                    <h3>Technology Used</h3>
                    <div className="icons">
                      <img src="./Icons/react.png" alt="React" />
                      <span className="icon-text">React</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/localstorage.png" alt="ls" />
                      <span className="icon-text">Local Storage</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/html.png" alt="html" />
                      <span className="icon-text">HTML</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/node.png" alt="nodejs" />
                      <span className="icon-text">Node</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/css.png" alt="Css" />
                      <span className="icon-text">CSS</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/js.png" alt="js" />
                      <span className="icon-text">JavaScript</span>
                    </div>
                  </div>
                  <div className="contents">
                    <h4>Streamline Your Tasks, Boost Productivity.</h4>
                  </div>
                  <Like />
                  <a href="https://nishant4coding.github.io/Task-Todo/">
                    <button>
                      {" "}
                      <b>Repository</b>{" "}
                    </button>{" "}
                  </a>
                </div>
              </div>

              <div className="card details">
                <img
                  src="./Projects/extra.png"
                  alt="Image"
                  className="card-img"
                />
                <div className="card-content">
                  <h3 className="card-title">Error-Tracker</h3>
                  <div className="contents">
                    <h3>Technology Used</h3>
                    <div className="icons">
                      <img src="./Icons/react.png" alt="React" />
                      <span className="icon-text">React</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/html.png" alt="html" />
                      <span className="icon-text">HTML</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/css.png" alt="Css" />
                      <span className="icon-text">CSS</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/js.png" alt="js" />
                      <span className="icon-text">JavaScript</span>
                    </div>
                  </div>
                  <div className="contents">
                    <h4>
                      {" "}
                      Track Code Errors with React.js and React Diff Viewer.
                    </h4>
                  </div>
                  <Like />
                  <a href="https://nishant4coding.github.io/Error-Tracker/">
                    <button>
                      {" "}
                      <b>Repository</b>{" "}
                    </button>{" "}
                  </a>
                </div>
              </div>
              <div className="card details">
                <img src="./Projects/pg.png" alt="Image" className="card-img" />
                <div className="card-content">
                  <h3 className="card-title">Password-Generator</h3>
                  <div className="contents">
                    <h3>Technology Used</h3>
                    <div className="icons">
                      <img src="./Icons/react.png" alt="React" />
                      <span className="icon-text">React</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/html.png" alt="html" />
                      <span className="icon-text">HTML</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/node.png" alt="nodejs" />
                      <span className="icon-text">Nodejs</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/css.png" alt="Css" />
                      <span className="icon-text">CSS</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/js.png" alt="js" />
                      <span className="icon-text">JavaScript</span>
                    </div>
                  </div>
                  <div className="contents">
                    <h4>Strengthen Online Security with Unique Passwords.</h4>
                  </div>
                  <Like />
                  <a href="https://github.com/Nishant4coding/Password-Generator">
                    <button>
                      {" "}
                      <b>Repository</b>{" "}
                    </button>{" "}
                  </a>
                </div>
              </div>
              <div className="card details">
                <img
                  src="./Projects/textcostom.png"
                  alt="Image"
                  className="card-img"
                />
                <div className="card-content">
                  <h3 className="card-title">Text-Custom</h3>
                  <div className="contents">
                    <h3>Technology Used</h3>
                    <div className="icons">
                      <img src="./Icons/react.png" alt="React" />
                      <span className="icon-text">React</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/html.png" alt="html" />
                      <span className="icon-text">HTML</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/css.png" alt="Css" />
                      <span className="icon-text">CSS</span>
                    </div>
                    <div className="icons">
                      <img src="./Icons/js.png" alt="js" />
                      <span className="icon-text">JavaSript</span>
                    </div>
                  </div>
                  <div className="contents">
                    <h4>
                      {" "}
                      Simplify Text Editing with ReactJS. Convert, Copy & Tidy
                      Up
                    </h4>
                  </div>
                  <Like />
                  <a href="https://nishant4coding.github.io/Text-Custom/">
                    <button>
                      {" "}
                      <b>Repository</b>{" "}
                    </button>{" "}
                  </a>
                </div>
              </div>

              {/* <div className="card details">
              <img src="./Projects/ytbp.png" alt="Image" className="card-img"/>
                  <div className="card-content">
                      <h3 className="card-title">Weather app</h3>
                      <p className="card-text"></p>
                     <a href=""><button> <b>Repository</b> </button> </a>
             </div>
          </div> */}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
