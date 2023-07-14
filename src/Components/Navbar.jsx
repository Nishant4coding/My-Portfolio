import React, { useEffect } from "react";
import Hamburger from 'hamburger-react';
import "./Navbar.css";
import { useState } from 'react'
import Technology from "./Technology";
import { a } from 'react-router-dom';
import Project from "./Project";


  const Navbar = () => {

    const[fix,setFix]=useState(false)
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleScroll = () => {
      if (window.scrollY>0) {
        setFix(true);
      } else {
        setFix(false);
      }
    }

    const [showNavbar, setShowNavbar] = useState(false)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    const closeClick=()=> {
      setShowNavbar(!showNavbar);
  }

  
  
    return (
      <nav className={`navbar ${fix ? 'fixed' : ''}`}>
        <div className="container">
          <div className="logo">
          <img src="./logo.png" alt="" />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger/>
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul className="menu-a" onClick={closeClick}>
              <li>
                <a href="#home">
                   Home   </a>
              </li>
              <li>
                <a href='#project'> Projects   </a>
              </li>
              <li>
                <a href="#skills"> Skills   </a>
              </li>
              <li>
                <a href="#contact"> Experience   </a>
              </li>
              <li>
                <a href="#contact"> Contact   </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar
