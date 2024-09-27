import React from 'react';
import './transactions.css';

const EditTransactionModal = () => {
  const name = 'Olakunbi Olabode';
  const transactionType = 'Deposit';
  const transactionFor = 'Apartment #230020';
  const paymentMethod = 'Paystack';
  const Amount = 'NGN 1,200,000';
  const Description = 'Null';

  return (
    <div className="transaction-overview-container">
      <main className="transaction-overview">
        <header>
          <h5>Edit Transaction</h5>

          <button>close</button>
        </header>

        <div className="transaction-details-modal">
          <div className="">
            <span>
              <p>From</p>
              <h6>{name}</h6>
            </span>
            <span>
              <p>Transaction Type</p>
              <h6>{transactionType}</h6>
            </span>
          </div>

          <div>
            <span>
              <p>For</p>
              <h6>{transactionFor}</h6>
            </span>
            <span>
              <p>Payment Methode</p>
              <h6>{paymentMethod}</h6>
            </span>
          </div>
          <div>
            <span>
              <p>Amount</p>
              <h6>{Amount}</h6>
            </span>
            <span>
              <p>Description</p>
              <h6>{Description}</h6>
            </span>
          </div>
        </div>

        <div className="error-info">
          <span>
            <h6>Error Message:</h6>
          </span>
          <p>User ID not successfully verified, Resolve if you would approve</p>
        </div>

        <div className="edit-transaction-cta">
          <button>Flag Transaction</button>
          <button>Resolve Transaction</button>
        </div>
      </main>
    </div>
  );
};

export default EditTransactionModal;
