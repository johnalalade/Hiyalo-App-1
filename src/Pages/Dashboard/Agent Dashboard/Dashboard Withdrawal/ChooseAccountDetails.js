import React, { useState } from 'react';
import './balance-withdrawal.css';
import WalletAddressIcon from '../../../../images/wallet-address.svg';
import AddWalletAddressIcon from '../../../../images/empty-wallet-add.svg';
import banks from '../../../../components/banks';

const ChooseAccountDetails = (nextWithdrawalStep) => {
  const continueWithdrawal = (e) => {
    // e.preventDefault();
    nextWithdrawalStep();
  };

  const [selected, setSelected] = useState(null);
  let i = 0;
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
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
          <h4>Choose Bank Account</h4>
          <p>
            Choose your preferred bank account to proceed with your withdrwal
          </p>
        </header>

        <main className="account-det-options">
          <div className="option-tab option-tab-1">
            <div className="wallet-details">
              <span id="icon">
                <img src={WalletAddressIcon} alt="" />
              </span>

              <span className="wallet-details-main">
                <h6>0477317790 - GTBank</h6>
                <p>Olabode Olakunbi Oluwakayode</p>
              </span>
            </div>

            <input type="radio" name="" id="" />
          </div>

          <div className="option-tab option-tab-2 personal-information-settings">
            <div className="wallet-details-container" onClick={() => toggle(i)}>
              <div className="wallet-details">
                <span id="icon">
                  <img src={AddWalletAddressIcon} alt="" />
                </span>

                <span className="wallet-details-main">
                  <h6>Enter a new account details</h6>
                </span>
              </div>

              <input type="radio" name="" id="" />
            </div>

            <form
              className={
                selected === i
                  ? 'wallet-form-content shows-wallet-from'
                  : 'wallet-form-content'
              }
            >
              <label for="name">Choose Bank</label>
              <select>
                <option>Choose Bank</option>
                {banks.map((ban) => (
                  <option value={JSON.stringify(ban)}>{ban.Name}</option>
                ))}
              </select>

              <label for="email">Account Number</label>
              <input type="text" placeholder="000000000000" />

              <label for="apartment type"> Account Name</label>
              <input type="name" placeholder="Auto fill" />
            </form>
          </div>
        </main>

        <div className="withdrawal-cta">
          <button onClick={continueWithdrawal}>Next</button>
        </div>
      </section>
    </>
  );
};

export default ChooseAccountDetails;
