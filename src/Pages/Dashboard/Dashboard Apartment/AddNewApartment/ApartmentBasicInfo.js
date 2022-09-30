import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import './add-new-apartment.css';
// import SideBar from '../../../../components/Dashboard Navbar/SideBar';
// import TopBar from '../../../../components/Dashboard Navbar/TopBar';

export const ApartmentBasicInfo = ({ nextStep, handleChange, property_type, house_type, description, finish }) => {

  const continu = (e) => {
    // e.preventDefault();
    nextStep();
  };

  // const draft = () => {

  //   handleChange({
  //     target: {
  //       value: "draft",
  //       name: "status"
  //     }
  //   })

  //   finish()
  // }

  return (
    <main class="add-new-property-container">
      <header>

        <Link to="/apartments" class="apa" > <iconify-icon className='add-new-property-cta' icon="eva:arrow-back-outline"></iconify-icon>  Add New Apartment:</Link>

        {/* <div class="add-property-cta">
            <button type="submit" onClick={() => draft()} >Save as Draft</button>
            <button type="submit" onClick={() => finish()} >Completed</button>
          </div> */}
      </header>

      <div class="steps-filters">
        <div class="step active-step">
          <p>Basic Info</p>
          <span>01</span>
        </div>

        <div class="step-connector"></div>
        <div class="step">
          <p>Amenities</p>
          <span>02</span>
        </div>

        <div class="step-connector"></div>
        <div class="step">
          <p>Gallery</p>
          <span>03</span>
        </div>

        <div class="step-connector"></div>
        <div class="step">
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
        <div class="step-title">
          <h4>Basic Info</h4>
        </div>
        <form action="" class="basic-info-form">
          <div class="col-1">
            <label for="property_type"> Propety Type</label>

            <select name='property_type' value={property_type} className="input-selection" onChange={(e) => handleChange(e)} >
              <option value="">Choose Type</option>
              <option value="residential">Residential</option>
            </select>

            <label for="house_type"> House Type</label>

            <select name='house_type' value={house_type} className="input-selection" id='house-type-option' onChange={(e) => handleChange(e)}>
              <option value="">Choose Type</option>
              <option value="Flat">Flat</option>
              <option value="Duplex">Duplex</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Condo">Condo</option>
              <option value="Pent House">Pent House</option>

            </select>

          </div>
          <div>
            <label for="description">General Information</label>
            <textarea name="description" id="" rows="6" value={description} onChange={(e) => handleChange(e)} placeholder="Inform people on what they should know about the house... eg: The house is painted blue, no dogs allowed" ></textarea>
            <span class="form-message-info">
              <p>Inform users what to expect</p>
            </span>
          </div>
        </form>

        <div class="property-form-cta">
          <button type="submit" style={{ display: 'none' }}>
            previous
          </button>
          <button type="submit" onClick={continu}>
            Next
          </button>
        </div>
      </div>
    </main>
    //   </main>
    // </section>
  );
}

export default ApartmentBasicInfo;
