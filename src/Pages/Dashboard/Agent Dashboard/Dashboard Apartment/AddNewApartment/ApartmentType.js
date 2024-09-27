import React, { useState } from 'react';
// import uploadIllustration from '../../../../../images/add-photo-illustration.svg';
import './add-new-apartment.css';
import { Link } from 'react-router-dom';

const ApartmentType = ({ prevStep, nextStep }) => {
  const continu = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  //   if (loading) {
  //     return (
  //       <div className="spinner">
  //         <PageLoader color="#4733AC" />
  //       </div>
  //     );
  //   }
  return (
    <main class="add-new-property-container">
      <header>
        <Link to="/apartments" className="apa">
          <iconify-icon
            class="back-iconify"
            icon="bx:arrow-back"
          ></iconify-icon>
          <h4>Add New Apartment</h4>
        </Link>
        {/* <div class="add-property-cta">
              <button type="submit" onClick={() => draft()}>Save as Draft</button>
              <button type="submit" onClick={() => finish()}>Completed</button>
            </div> */}
      </header>

      <div class="steps-filters">
        <div class="step active-step">
          <p>Apartment Type</p>
          <span>01</span>
        </div>

        <div class="step-connector"></div>
        <div class="step">
          <p>Basic Info</p>
          <span>02</span>
        </div>

        <div class="step-connector"></div>
        <div class="step">
          <p>Amenities</p>
          <span>03</span>
        </div>

        <div class="step-connector"></div>
        <div class="step">
          <p>Gallery</p>
          <span>04</span>
        </div>

        <div class="step-connector"></div>
        <div class="step">
          <p>Address</p>
          <span>05</span>
        </div>

        <div class="step-connector"></div>
        <div class="step">
          <p>Payment</p>
          <span>06</span>
        </div>
      </div>

      <div class="add-propery-form-container">
        <div class="step-title">
          <h4>Apartment Type</h4>
        </div>
        <form action="" class="basic-info-form">
          <div class="col-1">
            <label for="payment">Type Of Apartment</label>

            <select
              name="property_type"
              className="input-selection"
            >
              <option value="">Choose Type</option>
              <option value="residential">Short Let Apartment</option>
              <option value="residential">Yearly </option>
            </select>

            <label for="agency fee">Apartment Status</label>

            <select
              name="property_type"
              className="input-selection"
            >
              <option value="">Choose Apartment Status</option>
              <option value="residential">Preoccupied</option>
              <option value="residential">Vacant</option>
            </select>


            <label for="caution fee">Current Occupant Email </label>

            <input type="email" placeholder="Enter occupant email address" />
          </div>

          <div>
            <label for="description">Landlord Instructions </label>
            <textarea
              name="description"
              id=""
              rows="6"
              placeholder="Inform people on what they should know about the house... eg: The house is painted blue, no dogs allowed"
            ></textarea>
            <span class="form-message-info">
              <iconify-icon
                class="iconify"
                icon="carbon:information-filled"
              ></iconify-icon>
              <p>Give Specific Instructions If Necessary</p>
            </span>
          </div>
        </form>

        <div class="property-form-cta">
          <button type="submit" style={{ display: 'none' }}>
            previous
          </button>
          <button onClick={continu} type="button">
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default ApartmentType;
