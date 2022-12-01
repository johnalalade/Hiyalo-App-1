import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import './general-settings.css';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
import ChooseAccountDetails from './ChooseAccountDetails';
import WithdrawalAmount from './WithdrawalAmount';
import WithdrawalConfirmation from './WithdrawalConfirmation';

const BalanceWithdrawalContainer = () => {
  const [withdrawalStep, setWithdrawalStep] = useState(1);

  const nextWithdrawalStep = () => {
    setWithdrawalStep(withdrawalStep + 1);
  };

  const previousWithdrawalStep = () => {
    setWithdrawalStep(withdrawalStep - 1);
  };

  switch (withdrawalStep) {
    case 1:
      return <ChooseAccountDetails nextWithdrawalStep={nextWithdrawalStep} />;
    case 2:
      return (
        <BalanceWithdrawalContainer
          nextWithdrawalStep={nextWithdrawalStep}
          previousWithdrawalStep={previousWithdrawalStep}
        />
      );
    case 3:
      return (
        <WithdrawalConfirmation
          nextWithdrawalStep={nextWithdrawalStep}
          previousWithdrawalStep={previousWithdrawalStep}
        />
      );
    default:
      console.log('This is a multi-step form built with React.');
  }

  return (
    <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar />

        <main className="add-new-property-container withdrawal-container">
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
        </main>
      </main>
    </section>
  );
};

export default BalanceWithdrawalContainer;
