import React, {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    const lastSent = localStorage.getItem('lastSent');
    
    // Check if message was already sent within the last 30 minutes
    if (lastSent && (Date.now() - lastSent) < 1800000) {
      const notification = document.createElement('div');
      notification.classList.add('notification-red');
      notification.innerHTML = "<h2>Slow down please.</h2><p>You already sent a message, please wait!</p>";      
      document.body.appendChild(notification);
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 15000);
    } else {
      emailjs.sendForm('service_d2ka6ss', 'template_ipsbabu', form.current, 'tTHVlMTLkz7BLi5O5')
        .then((result) => {
          console.log(result.text);
          const notification = document.createElement('div');
          notification.classList.add('notification');
          notification.innerHTML = "<h2>Your message was sent!</h2><p>We'll be in touch shortly.</p>";
          document.body.appendChild(notification);
          setTimeout(() => {
            document.body.removeChild(notification);
          }, 15000);
          localStorage.setItem('lastSent', Date.now());
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="container" id="contact">
      <div className="left-section">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          
          <div className="label-input">
            <label>
              What's your name 
              <span className="required">*</span>
              <input type="text" placeholder="Type your full name" required
               name="name"/>
            </label>
          </div>

          <div className="label-input">
            <label>
              What's your email address
              <span className="required">*</span>
              <input type="email" placeholder="example@email.com" required name="email"/>
            </label>
          </div>

          <div className="label-input">
            <label>
              What's your phone number
              <input type="text" placeholder="+45 XXX XXXXXXX" name="phone"/>
            </label>
          </div>

          <div className="label-input">
            <label>
              What services are you looking for
              <span className="required">*</span>
              <input type="text" placeholder="Type in a service" required name="service"/>
            </label>
          </div>

          <div className="label-input">
            <label>
              What's your company/organization
              <input type="text" placeholder="Type the name of your company" name="org"/>
            </label>
          </div>
          
          <div className="label-input">
            <label>
              Any extra messages
              <input type="text" placeholder="Type extra message" name="extra"/>
            </label>
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
      <div className="right-section">
        <h2>CALL ME</h2>
        <p>+45 420 6930443</p>
        <h2 className='adress'>ADDRESS</h2>
        <p>ivanmednikarov@gmail.com</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
