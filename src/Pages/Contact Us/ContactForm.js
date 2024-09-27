import React from 'react';
import './contact-us.css';

const ContactForm = () => {
  return (
    <section className="contact-form-container">
      <header>
        <h4>Fill in the form to send us a message:</h4>
      </header>

      <main className="contact-form">
        <span className="full-name">
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
        </span>

        <div>
          <label htmlFor="">Email Address</label>
          <input type="email" placeholder="Email" />
        </div>

        <div>
          <label htmlFor="">Message</label>
          <textarea type="text" />
        </div>

        <button className="contact-form-cta"> Send</button>
      </main>
    </section>
  );
};

export default ContactForm;
