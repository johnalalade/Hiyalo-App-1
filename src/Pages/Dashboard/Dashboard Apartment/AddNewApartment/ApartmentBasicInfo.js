import React from 'react';
import { useNavigate } from 'react-router-dom';
import './add-new-apartment.css';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';

const ApartmentBasicInfo = () => {
  const navigate = useNavigate();

  const navigateToAddAmmenities = () => {
    navigate('/apartments/add-apartment-ammenities-info');
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
            <div class="step-connector"></div>
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
                    <div class="step-title">
                        <h4>Basic Info</h4>
                    </div>
                    <form action="" class="basic-info-form">
                        <div class="col-1">
                            <label for="apartment type"> Apartment Type</label>
                            <input type="text" placeholder="Residential"  />
                            <label for="How many unit">How Many Unit</label>
                            <input type="text" placeholder="1 Unit" />
                            <label for="How many unit">How Many Room Apartment Has?</label>
                            <input type="text" placeholder="2 Unit" />
                        </div>
                        <div>
                            <label for="apartment type">General Description</label>
                            <textarea name="apartment type" id=""  rows="6"></textarea>
                            <span class="form-message-info">
                                <p>
                                    Minimum of 60 words and Maximum of 120 words
                                </p>
                            </span>
                        </div>


                    </form>

                    <div class="property-form-cta">
                        <button type="submit">previous</button>
                        <button  type="submit" onClick={navigateToAddAmmenities}>Next</button>
                    </div>

                </div>
        </main>
      </main>
    </section>
  );
};

export default ApartmentBasicInfo;
