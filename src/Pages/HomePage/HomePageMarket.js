import React from 'react';
import './home-page-market.css';
import { Link } from 'react-router-dom';

const HomePageMarket = ({ data, search }) => {


  return (
    <section className="market-container">
      <header>
        <span id="market">
          <p>Market Place</p>
        </span>
        <h2>Explore The Market Place {search? `(${search})`: null} </h2>
      </header>

      <main className="homepage-apartments">
        {data.map((apartment, idx) => {
          return (
            <Link onClick={() => {
              localStorage.setItem("house_id", apartment._id)
            }} to={`/property-overview/`} className="homepage-apartment">
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
                  <p>{apartment.apartment_type}</p>
                </span>
                <span>
                  <iconify-icon
                    class="iconify"
                    icon="emojione-monotone:person-taking-bath"
                  ></iconify-icon>
                  <p>{apartment.apartment_type}</p>
                </span>
              </div>
              <div className="apartment-prices">
                <span>
                  <p>
                    &#8358;{(Number(apartment.annual_fee)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}<small>/yr</small>{' '}
                  </p>
                  <p>
                    &#8358;{(Number(apartment.annual_fee / 12)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}<small>/mth</small>{' '}
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
        })}
      </main>
      <div class="explore-cta">

        <Link to='/marketplace' className='explore-btn'>
            <p>Explore</p>
            <iconify-icon class='explore-icon' icon="fluent:sparkle-20-regular"></iconify-icon>
        </Link>

      </div>
    </section>
  );
};

export default HomePageMarket;
