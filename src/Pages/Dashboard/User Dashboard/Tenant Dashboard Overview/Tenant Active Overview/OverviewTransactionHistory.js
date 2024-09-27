import React from 'react';
import { Link } from 'react-router-dom';
import CardImg from '../../../../../images/empty-list.png';
const OverviewTransactionHistory = () => {
  return (
    <div class="transaction-history-overview tenant-trasaction-history">
      <header>
        <h6>Payment History:</h6>
        <Link to="/payments">see all</Link>
      </header>
      <table class="apartments-list payment-history">
      <div className="trans-img">
                  <img src={CardImg} alt="no transactions yet" />
                  <p>
                    No transactions yet... upload a house to start seeing money
                    roll in{' '}
                    <span role="img" aria-label="lol">
                      😉
                    </span>
                  </p>
        </div>
        {/* <thead>
          <tr>
            <th>PaymentID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td class="apartment-id payment id">
              <p>hello</p>
            </td>

            <td class="name">
              <p>Olakunbi</p>
            </td>

            <td class="payment-status">
              <p> declined</p>
            </td>

            <td class="apartment-price">
              <p> &#8358; </p>
            </td>

            <td class="date-added">
              <p>14th January, 2021</p>
            </td>

            <td class="type">
              <p>Deposit</p>
            </td>

            <td class="action-options payment-actions">
              <iconify-icon
                class="action-icon"
                icon="carbon:overflow-menu-vertical"
              ></iconify-icon>
            </td>
          </tr>
        </tbody> */}
      </table>
    </div>
  );
};

export default OverviewTransactionHistory;
