import React from "react";
import "./Intro.css";
function Intro(props) {
  return (
    <div>
      <div className="main" id="home">
        <div className="Info">
          <div className="profile">
            <div className="pic">
              <img src={props.image} alt="" />
            </div>
            <div className="details">
              <h1>{props.name}</h1>
              <h2>{props.occupation}</h2>
              <h3>{props.email}</h3>
            </div>
            <div className="details">
              <a href="./Resume.pdf" download="Resume">
                <button>
                  <b>Resume</b>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/nishant-srivastava-/">
                <button>
                  <b>+Connect</b>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="Info">
          <div className="profile">
            <h1>Hello!</h1>
            <p>
              Nice to meet you, I am <b> {props.name}</b>, an undergraduate{" "}
              <b> Computer Science and Engineering</b> student from India,
              currently studying in Greater Noida. <br />
              <br /> I am an{" "}
              <b>
                {" "}
                Open Source Enthusiast, {props.occupation} and Web Developer
              </b>{" "}
              getting on cross platform development using React. <br />
              <br />I also like to experiment with <b> UI/UX</b>. I like to work
              in a fast paced environment where I can have the opportunity to
              learn many things at once. If you think I would be a good fit for
              something you are working on, feel free to drop an email or get in
              touch anywhere, I will be happy to discuss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
