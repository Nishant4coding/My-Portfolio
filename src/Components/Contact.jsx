import React from "react";
import "./Intro.css"
import "./Contact.css"


function Contact() {

  const email = 'srivastava4nishant@gmail.com';
  const subject = 'Query from Portfolio';
  const body = 'message';

  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };


  return (
    <div className="main" id="contact">
      <div className="Info-2">
      <div className="contact-form">
  <span className="heading">Contact Us</span>
  <form >
    <label for="name">Name:</label>
    <input type="text" required=""/>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required=""/>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required=""></textarea>
     <a><button onClick={handleEmailButtonClick} type="submit">Submit</button></a> 
  </form>
</div>


      </div>

    </div>
  );
}

export default Contact;


