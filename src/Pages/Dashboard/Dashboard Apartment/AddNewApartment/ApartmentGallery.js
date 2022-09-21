import React, { Component } from 'react';
import uploadIllustration from '../../../../images/add-photo-illustration.svg'
import './add-new-apartment.css';

export class ApartmentGallery extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    return (
      <main className="add-new-property-container">
        <header>
          <h4>Add New Apartment:</h4>
          <div className="add-property-cta">
            <button type="submit">Save as Draft</button>
            <button type="submit">Completed</button>
          </div>
        </header>

        <div className="steps-filters">
          <div className="step active-step">
            <p>Basic Info</p>
            <span>01</span>
          </div>
          <div className="step-connector active-connector"></div>
          <div className="step">
            <p>Amenities</p>
            <span>02</span>
          </div>
          <div className="step-connector active-connector"></div>
          <div className="step">
            <p>Address</p>
            <span>03</span>
          </div>
          <div className="step-connector active-connector"></div>
          <div className="step">
            <p>Gallery</p>
            <span>04</span>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <p>Payment</p>
            <span>05</span>
          </div>
        </div>

        <div className="gallery-upload-container">
          <div className="step-title">
            <h4>Gallery</h4>
          </div>

          <div className="uploaded-pictures">
            <div className="">
              <img src="./images/bg.jpg" alt="" />
              <span className="picture-delete-btn">
                <button>
                  <iconify-icon icon="ic:baseline-delete"></iconify-icon>
                </button>
              </span>
            </div>

            <div>
              <img src="./images/bg.jpg" alt="" />
              <span className="picture-delete-btn">
                <button>
                  <iconify-icon icon="ic:baseline-delete"></iconify-icon>
                </button>
              </span>
            </div>

            <div>
              <img src="./images/bg.jpg" alt="" />
              <span className="picture-delete-btn">
                <button>
                  <iconify-icon icon="ic:baseline-delete"></iconify-icon>
                </button>
              </span>
            </div>

          <label htmlFor="input-image"className="input-image-container">
          <input type='file' />
              <img src={uploadIllustration} alt="" />
              <p>Click to upload photos</p>
          </label>

            
          </div>

          <span className="form-message-info">
            <p>Upload a minimumof 4 High quality photos of the apartment</p>
          </span>

          <div className="property-form-cta">
            <button type="submit"  onClick={this.back}>previous</button>
            <button onClick={this.continue} type="button">
              Next
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default ApartmentGallery;
