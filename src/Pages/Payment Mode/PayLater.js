import React from 'react';
import MaleUSer from '../../images/male-user.svg';
import ApartmentPic from '../../images/bg.jpg';
import EvolveLogo from '../../images/evolve-logo.svg';
// import { Link } from 'react-router-dom';

const PayLater = () => {
  return (
    <section className="pay-fully">
      <div className="pay-later-info">
        <p>
          Rent now, pay for 12 months. With just 5% interest fee rate when you
          pay on time.
          {/* <Link>learn more</Link> */}
        </p>

        <div className="powered-by">
          <small>Powered By</small>
          <span>
            <img src={EvolveLogo} alt="" />
          </span>
        </div>
      </div>
      <div className="tenant-apartment-details">
        <div className="tenant-det-container">
          <h5>User</h5>
          <div className="tenant-det">
            <img src={MaleUSer} alt="" />
            <span className="tenant-name-status">
              <h6>Olakunbi Olabode</h6>
              <p>Verified</p>
            </span>
          </div>
        </div>

        <div className="apartment-det-container">
          <h5>Apartment Info</h5>
          <div className="apartment-det">
            <img src={ApartmentPic} alt="" />
            <span className="tenant-name-status">
              <h6>4 Bedroom Terrance Duplex</h6>
              <p>Off Freedom way, Lekki Phase On, Lagos State</p>
            </span>
          </div>
        </div>
      </div>

      <div className="apartment-price-breakdown-container">
        <header>
          <h5>Price Details</h5>
          <p>Amount</p>
        </header>

        <main className="apartment-price-breakdown">
          <span>
            <p>Service Fee</p>
            <p>N100,000</p>
          </span>

          <span>
            <p>Security Deposit</p>
            <p>N100,000</p>
          </span>

          <span>
            <p>Agency & Agreement Fee</p>
            <p>N100,000</p>
          </span>

          <span>
            <p>Annual Fee</p>
            <p>N3,100,000</p>
          </span>
        </main>
      </div>

      <footer className="total-price-payment">
        <h4>Total Fee</h4>
        <h4>N3,500,000</h4>
      </footer>
      <div className="important-info">
        <h5>
          You Pay
          <span> N500,000 </span> for 1st Month,
          <span> N350,000 </span>
          subsequently
        </h5>
      </div>
      <button className="pay-now-btn">Proceed To Fund Your Wallet & Pay</button>
    </section>
  );
};

export default PayLater;
