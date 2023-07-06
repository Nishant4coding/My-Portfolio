import React from "react";
import "./Intro.css";
import "./Project.css";
export default function Project() {
  return (
    <div>
      <div className="main" id="project">
        <div className="Info-2">
          <h1>My Projects</h1>
          <div className="project">
            <div className="card details">
              <img
                src="./Projects/Dev-Resume.jpg"
                alt="Image"
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">Dev-Resume</h3>
                <p className="card-text">
                  "DevResume" a React.js and Chakra UI powered resume builder
                  website tailored for developers. With its basic templates,
                  DevResume simplifies the process of creating professional
                  resumes, allowing developers to effectively highlight their
                  skills and experience for better career opportunities.
                </p>
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
                <p className="card-text">
                  Meetup is a real-time public chat app designed to connect
                  users with random individuals in a public chat room. It
                  enables users to engage in spontaneous conversations, make new
                  friends, and discuss various topics in a dynamic and
                  interactive environment, fostering a sense of community and
                  social interaction.
                </p>
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
                src="./Projects/task-todo.png"
                alt="Image"
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">Task-To-Do</h3>
                <p className="card-text">
                  Task-To-Do is a local storage based todo app designed to help
                  users manage their tasks efficiently. With a clean and
                  intuitive interface, users can create, organize, and
                  prioritize tasks, set due dates, and mark tasks as complete.
                  The app provides a convenient way to stay organized and
                  increase productivity.
                </p>
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
                <p className="card-text">
                  Error-Tracker is a project built using React.js and leverages
                  the React Diff Viewer library to compare code and identify
                  differences. The main objective of Error-Tracker is to provide
                  developers with an efficient tool for tracking errors and bugs
                  in their codebase.
                </p>
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
                <p className="card-text">
                  My password generator creates strong, random passwords with
                  customizable length and character sets. It helps to increase
                  online security by generating unique passwords for each
                  account.{" "}
                </p>
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
                <p className="card-text">
                  Text Custom is a ReactJS-based web app that allows users to
                  easily convert text from uppercase to lowercase and remove
                  extra spaces. It also provides a convenient ”Copy to
                  Clipboard” function, streamlining the text editing process
                </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
