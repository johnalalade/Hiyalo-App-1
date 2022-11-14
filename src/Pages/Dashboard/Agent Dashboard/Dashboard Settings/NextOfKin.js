import React, { useState } from 'react';
import './general-settings.css';

const NextOfKin = () => {
  return (
    <main class="settings-form-container">
      <div class="personal-information-settings">
        <header>
          <h6>Next Of Kin Details</h6>
        </header>

        <form className="employment-status-form">
          <label for="apartment type"> First Name</label>
          <input type="text" placeholder="Enter first name" />

          <label for="name">Last Name</label>
          <input type="text" placeholder="Last Name" />

          <label for="email">Email Address</label>
          <input type="email" placeholder="enter email address" />

          <label for="phone number">Phone Number</label>
          <span class="phone-number">
            <input type="tel" placeholder="8000000000" />
            <p>+234 &nbsp; |</p>
          </span>

          <label for="Net Monthly Income">Relationship With Next OF Kin</label>
          <select className="select-doc">
            <option className="first-option" value="unemployed">
              Choose an option
            </option>
            <option value="unemployed">Father</option>
            <option value="emplyed">Mother</option>
            <option value="Business Owner">Sister</option>
            <option value="Student">Brother</option>
            <option value="Student">Aunty</option>
            <option value="Student">Uncle</option>
          </select>
        </form>
      </div>
    </main>
  );
};

export default NextOfKin;
