import React from 'react';
import './add-new-apartment.css';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';

const ApartmentGallery = () => {
    const navigate = useNavigate();

    const navigateToAddPaymentInfo = () => {
      navigate('/apartments/add-apartment-payment-info');
    };
  return (
    <section className='dashboard-container'>
      <SideBar />

      <main className='dashboard-main'>
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
            <div class="step-connector active-connector"></div>
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

          <div class="gallery-upload-container">
            <div class="step-title">
              <h4>Gallery</h4>
            </div>

            <div class="uploaded-pictures">
              <div class="">
                <img src="./images/bg.jpg" alt="" />
                <span class="picture-delete-btn">
                  <button>
                    <iconify-icon icon="ic:baseline-delete"></iconify-icon>
                  </button>
                </span>
              </div>

              <div>
                <img src="./images/bg.jpg" alt="" />
                <span class="picture-delete-btn">
                  <button>
                    <iconify-icon icon="ic:baseline-delete"></iconify-icon>
                  </button>
                </span>
              </div>

              <div>
                <img src="./images/bg.jpg" alt="" />
                <span class="picture-delete-btn">
                  <button>
                    <iconify-icon icon="ic:baseline-delete"></iconify-icon>
                  </button>
                </span>
              </div>

              <div class="input-image-container">
                <img src="./images/add-photo-illustration.svg" alt="" />
                <p>Click to upload photos</p>
              </div>
            </div>

            <span class="form-message-info">
              <p>Upload a minimumof 4 High quality photos of the apartment</p>
            </span>

            <div class="property-form-cta">
              <button type="submit">previous</button>
              <button
               onClick={navigateToAddPaymentInfo}
                type="button"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </main>
    </section>
  );
};

export default ApartmentGallery;
