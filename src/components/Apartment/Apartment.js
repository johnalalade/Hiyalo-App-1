import React from 'react';
import { Link } from 'react-router-dom'

const Apartment = ({ apartment }) => {
  return (
    <Link className="apartment" onClick={() => {
      localStorage.setItem("house_id", apartment._id)
    }} to={`/property-overview/`}>

      <img src={apartment.images[0]} alt="" />
      <div className="apartment-location">
        <p>{apartment.address}</p>
      </div>
      <div className="core-ammenities">
        <span>
          <iconify-icon
            class="iconify"
            icon="emojione-monotone:bed"
          ></iconify-icon>
          <p>{apartment.ammenities.find(o => o.name === "Bedroom") ? apartment.ammenities.find(o => o.name === "Bedroom").number : "0"} bedroom(s)</p>
        </span>
        {/* <span>
          <iconify-icon
            class="iconify"
            icon="emojione-monotone:bed"
          ></iconify-icon>
          <p>{apartment.ammenities[1].quantity}{apartment.ammenities[1].quantity}(s)</p>
        </span> */}
      </div>
      <div class="apartment-prices">
        <span>
          <p>
          &#8358; {Number(apartment.annual_fee).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            <small>/year</small>
          </p>
          <p>
          &#8358;{(Number(apartment.annual_fee / 12)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            <small>/month</small>
          </p>
        </span>
        <Link onClick={() => {
          localStorage.setItem("house_id", apartment._id)
        }} to={`/property-overview/`}>
          <iconify-icon icon="bx:right-arrow-alt"></iconify-icon>
        </Link>
      </div>
    </Link>
  );
};

export default Apartment;
