import React from 'react';
import './features.css';
import flashIcon from '../../images/flash.svg';
import walletIcon from '../../images/empty-wallet-tick.svg';
import secureIcon from '../../images/shield-security.svg';

const Features = () => {
  const offers = [
    {
      title: 'House hunt with convenience',
      paragraph:
        "Another stressful day of property hunting without progress? Not to worry! Hiyalo provides a virtual and live tour of your prospective home. Our virtual tour helps you make the right choice from wherever you are. Our live tour takes you to and from your prospective home",
      icon: flashIcon,
    },
    {
      title: 'Stay safe with Hiyalo.',
      paragraph:
        'Never be a victim of fraudulent agents. At Hiyalo we make sure your payments are secure: connecting you with verified house agents and certified properties',
      icon: secureIcon,
    },
    {
      title: 'Flexible Payment.',
      paragraph:
        "Little or no cash for an upfront payment? you don't have to forfeit your dream property. Hiyalo provides you with flexible payment plans. You can pay conveniently in installments ",
      icon: walletIcon,
    },
  ];

  return (
    <section class="why-hiyalo-container">
      <header>
        <span id="why">
          <p>Why Hiyalo</p>
        </span>
        <h2>Core Features On Hiyalo</h2>
      </header>

      <main class="offers">
        {offers.map((offer, idx) => {
          return (
            <div className="offer">
              <span>
                <img src={offer.icon} alt="" />
              </span>
              <h6>{offer.title}</h6>
              <p>{offer.paragraph}</p>
            </div>
          );
        })}
      </main>

      <div class="why-cta">
        <img src="./images/arrow.svg" alt="" />
      </div>
    </section>
  );
};

export default Features;
