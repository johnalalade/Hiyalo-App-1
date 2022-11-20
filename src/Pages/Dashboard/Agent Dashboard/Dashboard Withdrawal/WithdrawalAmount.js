import React from 'react';
import './balance-withdrawal.css';
const WithdrawalAmount = () => {
  return (
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
        <button>previous</button>
        <button>Next</button>
      </div>
    </section>
  );
};

export default WithdrawalAmount;
