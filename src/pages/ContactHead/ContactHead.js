import React from 'react';
import './ContactHead.css';
import workTogether from '../../images/workTogether.jpg';

const ContactHead = () => {
  return (
    <div className="container-head" id="contact-head">
      <div className="text-container">
        <h1 className="title-head">
          Let's work
          <br />
          together!
        </h1>
        <p className="subtitle-head">Let’s find how we can achieve greatness together. Fill in the form and
            we'll be in touch.</p>
      </div>
      <img className="work-image-head image-align-right" src={workTogether} alt="Lets work together img" />
    </div>
  );
};




export default ContactHead;
