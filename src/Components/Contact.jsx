import React from "react";
import "./Intro.css"
import "./Contact.css"
import { useForm, ValidationError } from '@formspree/react';



function Contact() {

  const [state, handleSubmit] = useForm("meqbqwdv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  const email = 'srivastava4nishant@gmail.com';
  const subject = 'Query from Portfolio';
  const body = 'message';

  // const handleEmailButtonClick = () => {
  //   window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  // };


  return (
    <div className="main" id="contact">
      <div className="Info-2">
      <div className="contact-form">
  <span className="heading">Contact Us</span>
  <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">Phone Number</label>
      <input
        placeholder="Enter your Contact number"
        id="mobile"
        name="mob"
      />
      <ValidationError 
        prefix="mobile" 
        field="mob"
        errors={state.errors}
      />
      <label htmlFor="message">Message</label>
      <textarea
        placeholder="Enter your Message here"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        <header>Submit</header>
      </button>
    </form>
</div>


      </div>

    </div>
  );
}

export default Contact;


