import React from 'react';
import ApartmentImg from '../../../../../images/bg.jpg';
const ActiveAPartmentPreview = () => {
  return (
    <div className="active-apartment-preview-container">
      <img src={ApartmentImg} alt="" />

      <h5 className="apart-address">
        Phase 2, 5 Sunday Ogunyade Street, Ikoyi, Lagos State.
      </h5>

      <span>
        <button>Apartment Info</button>
        <button>Request Services</button>
      </span>
    </div>
  );
};

export default ActiveAPartmentPreview;
