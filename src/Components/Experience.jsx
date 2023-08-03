
import React from "react";
import "./Intro.css";
import "./Experience.css";





function Experience() {
  return (
    <div className="main" id="experience">
      <div className="Info-2">
        <h1>Work Experience</h1>
       
        <div className="experience">
           
            <div className="exp-card">
              <img src="./Icons/gfg.png" alt="Image" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">Technical Content Writer</h3>
                <header>GeeksforGeeks</header>
                <p className="text">August 2023-Present</p>
              </div>
            </div>
            <div className="exp-card">
              <img src="./Icons/TULIP.jpg" alt="Image" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">Software Developer Intern</h3>
                <header>Ministry of Urban and Housing Affairs</header>
                <p className="text">July 2023-Present</p>
              </div>
            </div>
           
           
          <div className="exp-card">
            <img src="./Icons/GSSOC.png" alt="Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Open Source Contributor</h3>
              <header>Girl Script Summer of Code 2023</header>
              <p className="text">May 2023-Present</p>
            </div>
          </div>
           
           
          <div className="exp-card">
            <img src="./Icons/NASA.jpeg" alt="Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Front-End Developer (Team Abhedya)</h3>
              <header>NASA Space Apps Challenge</header>
              <p className="text">Oct 2022</p>
            </div>
          </div>
           
           
          <div className="exp-card">
            <img src="./Icons/ECELL.png" alt="Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">
                Sr. Member (Technical Team & Event Management)
              </h3>
              <header>
                Entrepreneurship Cell <br /> Galgotias University
              </header>
              <p className="text">Sept 2022-Present</p>
            </div>
          </div>
           
           
          <div className="exp-card">
            <img src="./Icons/SSOC.png" alt="Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Open Source Contributor</h3>
              <header>Social Summer of Code 2023</header>
              <p className="text">May 2023-Present</p>
            </div>
          </div>
           

        
      
        </div>

      </div>
    </div>
  );
}

export default Experience;
