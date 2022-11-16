import React from 'react';
import './payment-mode.css';
import PaymentSuccessImg from '../../images/payment-successful.png';
import { Link } from 'react-router-dom';

const PaymentSuccessful = () => {
  return (
    <section className="apartment-added-modal-container">
      <div className="apartment-added-modal payment-successful-modal">
        <img src={PaymentSuccessImg} alt="" />

        <h4>Payment Successful!</h4>

        <p>
          You have successfully pay for the apartment and an email has been sent
          to you. Thank you for trusting us!
        </p>

        <span className="apartment-added-modal-cta">
          <Link to="/dashboard" className="modal-cta">
            Go To Dashboard
          </Link>
          <Link to="/apartments" className="modal-cta">
            View Apartment
          </Link>
        </span>
      </div>
    </section>
  );
};

export default PaymentSuccessful;
