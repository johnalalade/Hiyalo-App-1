import React from 'react';
import { useNavigate } from 'react-router-dom';
import './add-new-apartment.css';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';

const ApartmentAmmenities = () => {

  const navigate = useNavigate();

  const navigateToAddAddress = () => {
    navigate('/apartments/add-apartment-address-info');
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
                        <h4>Apartment Amenties</h4>
                    </div>
                    <form action="" class="amenities-info-form">
                        
                        <div>
                            <iconify-icon icon="fluent:bed-16-regular"></iconify-icon>
                            <p>Bedroom</p>
                        </div>
                        <div>
                            <iconify-icon icon="fe:kitchen-cooker"></iconify-icon>
                            <p>Kitchen</p>
                        </div>
                        <div>
                            <iconify-icon icon="wpf:dining-room"></iconify-icon>
                            <p>Dining Room</p>
                        </div>
                        <div>
                            <iconify-icon icon="icon-park:swimming-pool"></iconify-icon>
                            <p>Swimming pool</p>
                        </div>
                        <div>
                            <iconify-icon icon="bx:store"></iconify-icon>
                            <p>Store room</p>
                        </div>
                        <div>
                            <iconify-icon icon="cil:bathroom"></iconify-icon>
                            <p>Bathroom</p>
                        </div>

                    </form>
                    <div class="property-form-cta">
                        <button type="submit">previous</button>
                        <button onClick={navigateToAddAddress} type="submit">Next</button>
                    </div>

                </div>
        </main>
      </main>
    </section>
  );
};

export default ApartmentAmmenities;
