import React from 'react';
import { Link } from 'react-router-dom';
import './rent-loan.css';
import HandArrow from '../../images/rent-arrow.svg';
import UserIcon from '../../images/user-icon.svg';
import MarketIcon from '../../images/shop.svg';
import StarIcon from '../../images/star.svg';
import VerifiedIcon from '../../images/rent-verify.svg';
import WalletHandCash from '../../images/wallet-cash-hand.svg';

import ReachOut from './ReachOut';

const RentLoanHowItWorks = () => {
  const howItWorks = [
    {
      icon: UserIcon,
      header: '01. Explore Market Place',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.',
    },
    {
      icon: MarketIcon,
      header: '02. Create An Account',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.',
    },
    {
      icon: VerifiedIcon,
      header: '03. Verify Identity',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.',
    },
    {
      icon: StarIcon,
      header: '04. Your Apartment Is Ready:)',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.',
    },
  ];

  return (
    <div className="hit-container">
      <section className="rent-loan-hit-container">
        <div className="rent-loan-hit-header">
          <img src={WalletHandCash} alt="" />
          <h3>Learn how rent now pay later works on Hiyalo</h3>

          <img id="arrow" src={HandArrow} alt="" />
        </div>

        <main className="rent-loan-hits">
          {howItWorks.map((step, idx) => {
            return (
              <div className="rent-loan-hit">
                <span className="hit-icon">
                  <img src={step.icon} alt="" />
                </span>
                <h4>{step.header}</h4>
                <p>{step.paragraph}</p>

                <Link to="/market-place}">
                  <span>Proceed</span>
                  <iconify-icon icon="akar-icons:arrow-right"></iconify-icon>
                </Link>
              </div>
            );
          })}
        </main>
      </section>

      <ReachOut />
    </div>
  );
};

export default RentLoanHowItWorks;
