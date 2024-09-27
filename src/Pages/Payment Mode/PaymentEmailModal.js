import React from 'react';
import './payment-mode.css';
import PaymentEmailImg from '../../images/check_email-icon.svg';
import { Link } from 'react-router-dom';

const PaymentEmailSent = () => {
  return (
    <section className="apartment-added-modal-container">
      <div className="apartment-added-modal payment-successful-modal">
        <img src={PaymentEmailImg} alt="" />

        <h4>Check Your Email!</h4>

        <p>
          Almost there! We’ve sent an email to ola********@gmail.com. Follow the
          prompt to see your eligibility.
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

export default PaymentEmailSent;
