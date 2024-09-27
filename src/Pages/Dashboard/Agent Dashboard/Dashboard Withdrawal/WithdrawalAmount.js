import React from 'react';
import './balance-withdrawal.css';
const WithdrawalAmount = ({ nextWithdrawalStep, PreviousWithdrawalStep }) => {
  const continueWithdrawal = (e) => {
    // e.preventDefault();
    nextWithdrawalStep();
  };

  const previousWIthdrawal = (e) => {
    e.preventDefault();
    PreviousWithdrawalStep();
  };
  return (
    <>
      <div className="steps-filters step-filters-withdrawal">
        <div className="active-step step">
          <p>Bank Account</p>
          <span>01</span>
        </div>
        <div className="step-connector active-connector"></div>
        <div className="active-step step">
          <p>Withdrawal Amount</p>
          <span>02</span>
        </div>

        <div class="step-connector"></div>
        <div className="active-step step">
          <p>Withdrawal Confiration</p>
          <span>03</span>
        </div>
      </div>
      <section className="choose-account-details-container">
        <header>
          <h4>Withdrawal Amount</h4>
          <p>Kindly the fill the amount you would like to withdraw</p>
        </header>

        <div className="available-balance">
          <p>Available Balance: NGN1,000,000</p>
        </div>

        <main className="account-det-options withdrawal-amount-options">
          <div className="option-tab withdrawal-balance-tab withdrawal-balance-tab-1">
            <span id="custom-withdrawal">
              <h6>Withdraw a portion from the available balance (NGN)</h6>
              <input type="radio" name="" id="" />
            </span>

            <span id="custom-withdrawal-input">
              <input
                type="number"
                placeholder="Enter how much do you want to withdraw?"
              />
            </span>
          </div>

          <div className="option-tab withdrawal-balance-tab">
            <h6>Withdraw a portion from the available balance</h6>
            <input type="radio" name="" id="" />
          </div>
        </main>

        <div className="withdrawal-cta">
          <button onClick={previousWIthdrawal}>previous</button>
          <button onClick={continueWithdrawal}>Next</button>
        </div>
      </section>
    </>
  );
};

export default WithdrawalAmount;
