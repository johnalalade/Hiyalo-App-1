import React from 'react';
import { useNavigate } from 'react-router-dom';
import './add-new-apartment.css';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';

const ApartmentAddress = () => {
  const navigate = useNavigate();

  const navigateToAddGallery = () => {
    navigate('/apartments/add-apartment-gallery-info');
  };

  return (
    <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar />

        <main class="add-new-property-container">
          <header>
            <h4>Add New Apartment:</h4>
            <div class="add-property-cta">
              <button type="submit">Save as Draft</button>
              <button type="submit">Completed</button>
            </div>
          </header>

          <div class="steps-filters">
            <div class="step active-step">
              <p>Basic Info</p>
              <span>01</span>
            </div>
            <div class="step-connector active-connector"></div>
            <div class="step">
              <p>Amenities</p>
              <span>02</span>
            </div>
            <div class="step-connector active-connector"></div>
            <div class="step">
              <p>Address</p>
              <span>03</span>
            </div>
            <div class="step-connector"></div>
            <div class="step">
              <p>Gallery</p>
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
                <input type="text" placeholder="enter the apartment loaction" />
                <label for="city">City</label>
                <input type="city" placeholder="Ikoyi" />
                <label for="state">State</label>
                <input type="text" placeholder="Lagos State" />
              </div>
              <div class="location-map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d62867.248239867855!2d7.964980542196037!3d10.000082697842062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d10!2d8!4m0!5e0!3m2!1sen!2sng!4v1661851744253!5m2!1sen!2sng"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}
              </div>
            </form>
            <div class="property-form-cta">
              <button type="submit">previous</button>
              <button onClick={navigateToAddGallery} type="submit">
                Next
              </button>
            </div>
          </div>
        </main>
      </main>
    </section>
  );
};

export default ApartmentAddress;
