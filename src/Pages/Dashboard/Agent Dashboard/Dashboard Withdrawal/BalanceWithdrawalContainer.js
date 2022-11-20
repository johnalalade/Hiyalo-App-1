import React from 'react';
import { Link } from 'react-router-dom';
// import './general-settings.css';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
import ChooseAccountDetails from './ChooseAccountDetails';
import WithdrawalAmount from './WithdrawalAmount';
import WithdrawalConfirmation from './WithdrawalConfirmation';

const BalanceWithdrawalContainer = () => {
  return (
    <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar />

        <main class="add-new-property-container withdrawal-container">
          <header>
            <Link to="/apartments" className="apa">
              <iconify-icon
                class="back-iconify"
                icon="bx:arrow-back"
              ></iconify-icon>
              <p>Overview | Payment | Withdrawal </p>
            </Link>
            <h4>Balance Withdrawal</h4>
          </header>
          <div class="steps-filters step-filters-withdrawal">
            <div class="step active-step">
              <p>Bank Account</p>
              <span>01</span>
            </div>
            <div class="step-connector active-connector"></div>
            <div class="step active-step">
              <p>Withdrawal Amount</p>
              <span>02</span>
            </div>

            <div class="step-connector"></div>
            <div class="step">
              <p>Withdrawal Confiration</p>
              <span>03</span>
            </div>
          </div>
          <ChooseAccountDetails />
          <WithdrawalAmount />
          <WithdrawalConfirmation />
        </main>
      </main>
    </section>
  );
};

export default BalanceWithdrawalContainer;
