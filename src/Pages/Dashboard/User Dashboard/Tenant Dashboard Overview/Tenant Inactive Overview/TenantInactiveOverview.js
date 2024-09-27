import React from 'react';
import './tenant-inactive-overview.css';
import ApartmentImg from '../../../../../images/bg.jpg';

import { Link } from 'react-router-dom';

const TenantInactiveOverview = () => {

  const apartments = [
    {
      id: 1,
      productImg: ApartmentImg,
      productLocation: 'Obafemi awolow Univeristy Ile-Ife',
      productPriceYearly: 12000,
      productPriceMonthly: 400,
      numberOfBeds: 3,
      numberOfBaths: 4,
    },
    {
      id: 2,
      productImg: ApartmentImg,
      productLocation: 'Obafemi awolow Univeristy Ile-Ife',
      productPriceYearly: 12000,
      productPriceMonthly: 400,
      numberOfBeds: 3,
      numberOfBaths: 4,
    },
    {
      id: 3,
      productImg: ApartmentImg,
      productLocation: 'Obafemi awolow Univeristy Ile-Ife',
      productPriceYearly: 12000,
      productPriceMonthly: 400,
      numberOfBeds: 3,
      numberOfBaths: 4,
    },
    {
      id: 3,
      productImg: ApartmentImg,
      productLocation: 'Obafemi awolow Univeristy Ile-Ife',
      productPriceYearly: 12000,
      productPriceMonthly: 400,
      numberOfBeds: 3,
      numberOfBaths: 4,
    }
  ];
  return (
    <>
      <div className="overview-details">
        <div className="page-title">
          <h4>Account Overview</h4>

          <span className="account-status inactive-status">Inactive</span>
        </div>

        <div className="tenant-overview-header">
          <main>
            <img src={ApartmentImg} alt="" />

            <div className="apart-details">
              <h5 className="apart-address">
                Phase 2, 5 Sunday Ogunyade Street, Ikoyi, Lagos State.
              </h5>
              <div className="core-ammenities core-amentities-apart">
                <span>
                  <iconify-icon
                    class="iconify"
                    icon="emojione-monotone:bed"
                  ></iconify-icon>
                  <p>Bed(s)</p>
                </span>
                <span>
                  <iconify-icon
                    class="iconify"
                    icon="emojione-monotone:person-taking-bath"
                  ></iconify-icon>
                  <p>Room(s)</p>
                </span>
              </div>

              <div className="apart-price">#1,000,000/year</div>

              <div className="apart-cta">
                <button>Pending Tour Request</button>
                <button>
                  <iconify-icon icon="jam:messages-f"></iconify-icon>
                </button>
                <button>
                  <iconify-icon icon="carbon:overflow-menu-vertical"></iconify-icon>
                </button>
              </div>
            </div>
          </main>

          <aside>
            <p>Do You Need A Loan To Fund Your Apartmemt?</p>
            <h4>Get Access To Our Flexible Rent Payment</h4>
            <button>Start Your Application</button>
          </aside>
        </div>
      </div>

      <div className="explore-similar-properties-container">
        <div className="page-title">
          <h4>Explore Similar Properties</h4>

          <span className="ee-all">See All</span>

        </div>

        <main className="market-apartments apartments dashboard-listed-apartments">
          {apartments.map((apartment, idx) => {
            return (
              <div className="apartment">
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
                    <p>{apartment.numberOfBeds} bed(s)</p>
                  </span>
                  <span>
                    <iconify-icon
                      class="iconify"
                      icon="cil:bath"
                    ></iconify-icon>
                    <p>{apartment.numberOfBaths} bath(s)</p>
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
                  <Link to={`/home`}>
                    <iconify-icon icon="bx:right-arrow-alt"></iconify-icon>
                  </Link>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default TenantInactiveOverview;
