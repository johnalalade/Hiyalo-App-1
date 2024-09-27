import React, { useEffect } from 'react';
import { useState } from 'react';
import './payment-mode.css';
import NavBar from '../../components/Navbar/Navbar';
import PayFull from './PayFull';
import PayLater from './PayLater';
// import
const PaymentModeContainer = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="payment-mode-container">
      <NavBar />
      <main className="payment-mode">
        <header>
          <h3>Payment Mode</h3>
          <iconify-icon
            class="mode-info-icon"
            icon="ant-design:info-circle-outlined"
          ></iconify-icon>
        </header>

        <div className="mode-navbar">
          <span
            className={
              toggleState === 1
                ? 'payment-mode-tab active-payment-mode'
                : 'payment-mode-tab'
            }
            onClick={() => toggleTab(1)}
          >
            Pay Fully
          </span>
          <span
            className={
              toggleState === 2
                ? 'payment-mode-tab active-payment-mode'
                : 'payment-mode-tab'
            }
            onClick={() => toggleTab(2)}
          >
            Rent Monthly
          </span>
        </div>

        {toggleState === 1 && (
          <PayFull
          // className={
          //   toggleState === 1
          //     ? 'settings-content  active-settings-content'
          //     : 'settings-content'
          // }
          />
        )}

        {toggleState === 2 && (
          <PayLater
            className={
              toggleState === 2
                ? 'payment-mode-content  active-payment-mode-content'
                : 'payment-mode-content'
            }
          />
        )}
        {/* <PayFull /> */}
        {/* <PayLater /> */}
      </main>
    </section>
  );
};

export default PaymentModeContainer;
