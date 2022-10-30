import React from 'react';
import './dashboard-marketplace.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ApartmentImg from '../../../../images/bg.jpg';
import states from '../../../../components/states';
const DashboardMarketPlace = () => {

  const [filterActive, setfitlerActive] = useState(null);
  let i = 0;
  const toggle = (i) => {
    if (filterActive === i) {
      return setfitlerActive(null);
    }
    setfitlerActive(i);
  };
  const [filterStatus, setFilterStatus] = useState('all');
  const [state, setState] = useState('Choose State');
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
    <section>
      <div className="page-title">
        <h4>Available Apartment:</h4>

        {/* <span className="ee-all">See All</span> */}

        <button className="filter-btn" onClick={() => toggle(i)}>
              {filterActive === i ? (
                <iconify-icon
                  class="filter-iconify filter-close-icon"
                  icon="ic:baseline-filter-list"
                ></iconify-icon>
              ) : (
                <iconify-icon
                  class="filter-iconify"
                  icon="ic:baseline-filter-list"
                ></iconify-icon>
              )}

              <p>Filter</p>
            </button>
      </div>

      <div
            className={
              filterActive === i
                ? 'filter-form filter-from-dashboard active-filter-form'
                : 'filter-form'
            }
          >
            {/* <div className="filter-inputs">
              <label for="#">Location</label>
              <input type="text" placeholder="your preferred location" />
            </div> */}

            <div className="filter-inputs">
              <label for="#">Apartment Type</label>
              <select onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="Flat">Flat</option>
                <option value="Duplex">Duplex</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Condo">Condo</option>
                <option value="Pent House">Pent House</option>
              </select>
            </div>

            {/* <div className="filter-inputs">
              <label for="#">Minimum Price</label>
              <input type="number" placeholder="&#8358;0.00" />
            </div> */}
            <div className="filter-inputs">
              <label for="#">Location</label>
              <select
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                {states.map((st) => (
                  <option value={st}>{st}</option>
                ))}
              </select>
            </div>

            {/* <div className="filter-inputs">
              <label for="#">Maximum Price</label>
              <input type="text" placeholder="&#8358;0.00" />
            </div> */}
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
    </section>
  );
};

export default DashboardMarketPlace;
