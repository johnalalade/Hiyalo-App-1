import React from 'react';
import states from '../../../../components/states'
import './add-new-apartment.css';

const ApartmentAddress = ({ nextStep, prevStep, address, state, city, handleChange, finish }) => {

  const continu = (e) => {
    e.preventDefault();
    nextStep();
  };
  const back = e => {
    e.preventDefault();
    prevStep();
  };

  const draft = () => {

    handleChange({
      target: {
        value: "draft",
        name: "status"
      }
    })

    finish()
  }

  return (
    <main class="add-new-property-container">
      <header>
        <h4>Add New Apartment:</h4>
        <div class="add-property-cta">
          <button type="submit" onClick={() => draft()}>Save as Draft</button>
          <button type="submit" onClick={() => finish()} >Completed</button>
        </div>
      </header>

      <div class="steps-filters">
        <div class="step active-step">
          <p>Basic Info</p>
          <span>01</span>
        </div>
        <div class="step-connector active-connector"></div>
        <div class="step active-step">
          <p>Amenities</p>
          <span>02</span>
        </div>

        <div class="step-connector active-connector"></div>
        <div class="step active-step">
          <p>Gallery</p>
          <span>03</span>
        </div>

        <div class="step-connector active-connector"></div>
        <div class="step active-step">
          <p>Address</p>
          <span>04</span>
        </div>

        <div class="step-connector"></div>
        <div class="step">
          <p>Payment</p>
          <span>05</span>
        </div>
      </div>

      <div class="add-propery-form-container">
        <div class="step-title">Full Address</div>
        <form action="" class="basic-info-form">
          <div class="col-1">

            <label for="apartment type"> Address Description</label>
            <input type="text" name='address' value={address} placeholder="enter the apartment loaction" onChange={(e) => handleChange(e)} />

            <label for="city">City</label>
            <input type="city" name='city' value={city} placeholder="Ikoyi" onChange={(e) => handleChange(e)} />

            <label for="state">State</label>

            <select name='state' value={state} onChange={(e) => handleChange(e)} className="input-selection" id='house-type-option' >
              {
                states.map(st => <option value={st} >{st}</option>)
              }
            </select>

            {/* <input type="text" name='state' value={state} placeholder="Lagos State" onChange={(e) => handleChange(e)} /> */}

          </div>
          <div class="location-map">
            {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d62867.248239867855!2d7.964980542196037!3d10.000082697842062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d10!2d8!4m0!5e0!3m2!1sen!2sng!4v1661851744253!5m2!1sen!2sng"
                  // style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}
          </div>
        </form>
        <div class="property-form-cta">
          <button type="submit" onClick={back}>previous</button>
          <button onClick={continu} type="submit">
            Next
          </button>
        </div>
      </div>
    </main>
  );
}

export default ApartmentAddress;
