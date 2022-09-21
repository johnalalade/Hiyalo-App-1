import React, { Component } from 'react';
import './add-new-apartment.css';

export class ApartmentAmmenities extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
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
            <div className="amenity">
              <iconify-icon
                className="amenity-icons"
                icon="fluent:bed-16-regular"
              ></iconify-icon>
              <p>Bedroom</p>
              <input type="number" placeholder="0" />
            </div>
            <div className="amenity">
              <iconify-icon
                className="amenity-icons"
                icon="fe:kitchen-cooker"
              ></iconify-icon>
              <p>Kitchen</p>
              <input type="number" placeholder="0" />
            </div>
            <div className="amenity">
              <iconify-icon
                className="amenity-icons"
                icon="material-symbols:dining-outline"
              ></iconify-icon>
              <p>Dining Room</p>
              <input type="number" placeholder="0" />
            </div>
            <div className="amenity">
              <iconify-icon
                className="amenity-icons"
                icon="icon-park-outline:swimming-pool"
              ></iconify-icon>
              <p>Swimming pool</p>
              <input type="number" placeholder="0" />
            </div>
            <div className="amenity">
              <iconify-icon
                className="amenity-icons"
                icon="bx:store"
              ></iconify-icon>
              <p>Store room</p>
              <input type="number" placeholder="0" />
            </div>
            <div className="amenity">
              <iconify-icon
                className="amenity-icons"
                icon="cil:bathroom"
              ></iconify-icon>
              <p>Bathroom</p>
              <input type="number" placeholder="0" />
            </div>
            <div className="amenity">
              <iconify-icon
                className="amenity-icons"
                icon="maki:parking-garage"
              ></iconify-icon>
              <p>Parking Space</p>
              <input type="number" placeholder="0" />
            </div>
          </form>
          <div class="property-form-cta">
            <button type="submit" onClick={this.back}>
              previous
            </button>
            <button onClick={this.continue} type="submit">
              Next
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default ApartmentAmmenities;
