import React from 'react';
import { useNavigate } from 'react-router-dom';
import './add-new-apartment.css';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';

const ApartmentPaymentDetails = () => {
  const navigate = useNavigate();

  const navigateToAppartmentOverview = () => {
    navigate('/apartments');
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
            <div class="step-connector active-connector"></div>
            <div class="step">
              <p>Gallery</p>
              <span>04</span>
            </div>
            <div class="step-connector active-connector"></div>
            <div class="step">
              <p>Payment</p>
              <span>05</span>
            </div>
          </div>

          <div class="add-propery-form-container">
            <div class="step-title">
              <h4>Payment Details</h4>
            </div>
            <form action="" class="basic-info-form">
              <div class="col-1">
                <label for="payment"> Annual Rent Fee (&#8358;) </label>
                <input type="number" placeholder="enter annual rent fee" />
                <label for="agency fee">Agency & Agreement Fee (&#8358;)</label>
                <input
                  type="number"
                  placeholder="enter the angency fee & Agreement Fee"
                />
                <label for="caution fee">Caution Fee (&#8358;)</label>
                <input type="number" placeholder="enter the caution fee" />
              </div>
              <div class="col-2">
                <label for="stamp duty">Stamp Duty Fee (&#8358;)</label>
                <input type="number" placeholder="stamp duty fee" />

                <aside>Total Fee is (&#8358;)1,000,000</aside>
              </div>
            </form>

            <div class="property-form-cta">
              <button type="submit">previous</button>
              <button onClick={navigateToAppartmentOverview} type="button">
                Next
              </button>
            </div>
          </div>
        </main>
      </main>
    </section>
  );
};

export default ApartmentPaymentDetails;
