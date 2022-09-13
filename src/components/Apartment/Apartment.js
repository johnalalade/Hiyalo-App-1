import React from 'react';
import {Link} from 'react-router-dom'

const Apartment = ({apartment} ) => {
  return (
    <Link className="apartment" to={`/apartment/${apartment.id}`}>
      <img src={apartment.productImg} alt="" />
      <div className="apartment-location">
        <p>{apartment.productLocation}</p>
      </div>
      <div className="core-ammenities">
        <span>
          <iconify-icon
            class="iconify"
            icon="emojione-monotone:bed"
          ></iconify-icon>
          <p>{apartment.numberOfBeds}Bed(s)</p>
        </span>
        <span>
          <iconify-icon
            class="iconify"
            icon="emojione-monotone:bed"
          ></iconify-icon>
          <p>{apartment.numberOfBaths}Bath(s)</p>
        </span>
      </div>
      <div class="apartment-prices">
        <span>
          <p>
            &#8358; {apartment.productPriceYearly}
            <small>/year</small>
          </p>
          <p>
            &#8358;{apartment.productPriceMonthly}
            <small>/month</small>
          </p>
        </span>
        <a href="#">
          <iconify-icon icon="bx:right-arrow-alt"></iconify-icon>
        </a>
      </div>
    </Link>
  );
};

export default Apartment;
