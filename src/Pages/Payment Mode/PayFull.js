import React from 'react';
import MaleUSer from '../../images/male-user.svg';
import ApartmentPic from '../../images/bg.jpg';

const PayFull = () => {
  return (
    <section className="pay-fully">
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

      <div className="payment-cta">
        <button className="pay-wallet-btn">
          Proceed To Fund Your Wallet & Pay
        </button>
        <button className="pay-wallet-btn pay-card-btn">Pay With Card</button>
      </div>
    </section>
  );
};

export default PayFull;
