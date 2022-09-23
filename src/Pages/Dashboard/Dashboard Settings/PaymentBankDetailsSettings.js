import React from 'react';
import './general-settings.css'
const PaymentBankDetailsSettings = () => {
  return (
    <main class="settings-form-container">
      <div class="personal-information-settings">
        <header>
          <h6>Withdrawal Method</h6>
          <a href="www.google.com">+ Add Account Details</a>
        </header>
        <form>
          <label for="apartment type"> Account Name</label>
          <input type="number" placeholder="Enter the account name" />
          <label for="name">Choose Bank</label>
          <input type="text" placeholder="Olabode" />
          <label for="email">Account Number</label>
          <input type="email" placeholder="000000000000" />
          <button>Confirm Account Details</button>
        </form>
      </div>

      <div class="identification-picture-container">
        <div class="identification-form">
          <header>
            <h6>Identification Number</h6>
            <span>
              <p>Verified</p>
              <iconify-icon
                class="verified-icon"
                icon="codicon:verified-filled"
              ></iconify-icon>
            </span>
          </header>
          <form action="">
            <label for="apartment type"> Document</label>
            <input type="text" placeholder="National ID" />
            <label for="name">BVN</label>
            <input type="text" placeholder="*************" />
          </form>
        </div>
      </div>
    </main>
  );
};

export  default PaymentBankDetailsSettings;