import React, { useState } from 'react';
import './general-settings.css';

const EmploymentStatus = () => {
  return (
    <main class="settings-form-container">
      <div class="personal-information-settings">
        <header>
          <h6>Employment Details</h6>
        </header>

        <form className="employment-status-form">
          <label for="Employment Details"> Employment Status</label>
          <select className="select-doc">
            <option className="first-option" value="unemployed">
              Choose your Employment Status
            </option>
            <option value="unemployed">Unemployed</option>
            <option value="emplyed">Employed</option>
            <option value="Business Owner">Business Owner</option>
            <option value="Student">Student</option>
          </select>

          <label for="company name">Company/Employer Name</label>
          <input type="text" placeholder="Enter Company/Employer Name" />

          <label for="Net Monthly Income">Net Monthly Income (N)</label>
          <select className="select-doc">
            <option className="first-option" value="unemployed">
              Choose your net monthly income
            </option>
            <option value="unemployed">Less than 200,000</option>
            <option value="emplyed">200,000 - 500,000</option>
            <option value="Business Owner">500,000 - 1,000,000</option>
            <option value="Student">1,000,000 -3,000,000</option>
          </select>

          <label for="job title">Job Title</label>
          <input type="text" placeholder="enter Job Title" />

          <label for="job title">Employer Address</label>
          <input type="text" placeholder="enter employer address" />
          <button>Update Password</button>
        </form>
      </div>
    </main>
  );
};

export default EmploymentStatus;
