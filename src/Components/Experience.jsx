import React from 'react'
import "./Intro.css"
import './Experience.css'
function Experience() {
  return (
    <div className="main" id="contact">
        <div className="Info-2">
                <h1>Work Experience</h1>
            <div className='exp-card'>
            <img
                src="./Icons/TULIP.jpeg"
                alt="Image"
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">Web Developer</h3>
                <header>DAY-NULM TULIP</header>
                <p className="card-text">
                  July 2023-Present
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
