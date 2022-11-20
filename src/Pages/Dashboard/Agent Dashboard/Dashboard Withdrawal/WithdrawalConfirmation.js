import React from 'react';
import './balance-withdrawal.css';
const WithdrawalConfirmation = () => {
  return (
    <section className="choose-account-details-container">
      <header>
        <h4>Withdrawal Confirmation</h4>
        <p>
          Confirm your withdrawal with your password in order to make your
          request successfull
        </p>
      </header>

      <main className="account-det-options withdrawal-confirmation-container">
        <span id="custom-withdrawal-input">
          <label className="password-lable" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="enter your password to confirm your withdrawal"
          />
        </span>

        <main className="apartment-price-breakdown withdrawal-confirmation-det">
          <span>
            <p>Amount</p>
            <p>N100,000</p>
          </span>

          <span>
            <p>From</p>
            <p>Hiyalo HQ</p>
          </span>

          <span>
            <p>To</p>
            <p>Olakunbi Oluwakayode Olabode</p>
          </span>

          <span>
            <p>Bank</p>
            <p>Guarantee Trust Bank</p>
          </span>
        </main>
      </main>

      <div className="withdrawal-cta">
        <button>previous</button>
        <button>Confirm</button>
      </div>
    </section>
  );
};

export default WithdrawalConfirmation;
