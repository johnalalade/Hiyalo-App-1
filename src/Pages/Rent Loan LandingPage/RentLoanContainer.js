import React from 'react';
import './rent-loan.css';
import RentLoanHeroe from './RentLoanHeroe';
import RentLoanHowItWorks from './RentLoanHowItWorks';
import Footer from '../../components/Footer/Footer';

const RentLoanContainer = () => {
  return (
    <div className="rent-loan-container">
      <RentLoanHeroe />
      <RentLoanHowItWorks />
      <Footer />
    </div>
  );
};

export default RentLoanContainer;
