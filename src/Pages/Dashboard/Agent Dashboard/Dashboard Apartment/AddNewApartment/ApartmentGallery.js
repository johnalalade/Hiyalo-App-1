import React, { useState } from 'react';
import uploadIllustration from '../../../../../images/add-photo-illustration.svg';
import './add-new-apartment.css';
import { Link } from 'react-router-dom';

export const ApartmentGallery = ({
  nextStep,
  prevStep,
  images,
  handleChange,
  finish,
}) => {
  const [files, setFiles] = useState([...images]);

  const continu = (e) => {
    e.preventDefault();
    nextStep();

    handleChange({
      target: {
        value: files,
        name: 'images',
      },
    });
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();

    handleChange({
      target: {
        value: files,
        name: 'images',
      },
    });
  };

  // const draft = () => {

  //   handleChange({
  //     target: {
  //       value: files,
  //       name: "images"
  //     }
  //   })

  //   handleChange({
  //     target: {
  //       value: "draft",
  //       name: "status"
  //     }
  //   })

  //   finish()
  // }

  return (
    <main className="add-new-property-container">
      <header>
        <Link to="/apartments" className="apa">
          <iconify-icon
            class="back-iconify"
            icon="bx:arrow-back"
          ></iconify-icon>
          <h4>Add New Apartment</h4>
        </Link>
        {/* <div className="add-property-cta">
          <button type="submit" onClick={() => draft()}>Save as Draft</button>
          <button type="submit" onClick={() => finish()} >Completed</button>
        </div> */}
      </header>

      <div className="steps-filters">
        <div className="step active-step">
          <p>Apartment Type</p>
          <span>01</span>
        </div>
        <div className="step-connector active-connector"></div>

        <div className="step active-step">
          <p>Basic Info</p>
          <span>02</span>
        </div>
        <div className="step-connector active-connector"></div>
        <div className="step active-step">
          <p>Amenities</p>
          <span>03</span>
        </div>

        <div className="step-connector active-connector"></div>
        <div className="step active-step">
          <p>Gallery</p>
          <span>04</span>
        </div>

        <div className="step-connector"></div>
        <div className="step">
          <p>Address</p>
          <span>05</span>
        </div>

        <div className="step-connector"></div>
        <div className="step">
          <p>Payment</p>
          <span>06</span>
        </div>
      </div>

      <div className="gallery-upload-container">
        <div className="step-title">
          <h4>Gallery</h4>
        </div>

        <div className="uploaded-pictures">
          {files.map((f) => (
            <div className="">
              <img
                src={f ? window.URL.createObjectURL(f) : './images/bg.jpg'}
                alt=""
              />
              <span className="picture-delete-btn">
                <button
                  onClick={() => setFiles(files.filter((fr) => fr !== f))}
                >
                  <iconify-icon icon="ic:baseline-delete"></iconify-icon>
                </button>
              </span>
            </div>
          ))}

          {/* <div>
              <img src="./images/bg.jpg" alt="" />
              <span className="picture-delete-btn">
                <button>
                  <iconify-icon icon="ic:baseline-delete"></iconify-icon>
                </button>
              </span>
            </div> */}

          {/* <div>
              <img src="./images/bg.jpg" alt="" />
              <span className="picture-delete-btn">
                <button>
                  <iconify-icon icon="ic:baseline-delete"></iconify-icon>
                </button>
              </span>
            </div> */}

          <label htmlFor="input-image" className="input-image-container">
            <input
              type="file"
              accept="image/*"
              multiple={true}
              onChange={(ev) => setFiles([...files, ...ev.target.files])}
            />
            <img src={uploadIllustration} alt="" />
            <p>Click to upload photos</p>
          </label>
        </div>

        <span className="form-message-info">
          <p>Upload a minimumof 4 High quality photos of the apartment</p>
        </span>

        <div className="property-form-cta">
          <button type="submit" onClick={back}>
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

export default ApartmentGallery;
