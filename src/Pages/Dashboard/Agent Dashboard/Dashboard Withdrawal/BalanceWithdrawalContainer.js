import React from 'react';
import { Link } from 'react-router-dom';
// import './general-settings.css';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
import ChooseAccountDetails from './ChooseAccountDetails';

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

          <ChooseAccountDetails />
        </main>
      </main>
    </section>
  );
};

export default BalanceWithdrawalContainer;
