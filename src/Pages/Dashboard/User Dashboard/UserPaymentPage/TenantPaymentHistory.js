import React from 'react';

import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
const TenantPaymentHistory = () => {


  return (
    <section className="dashboard-container">
      <SideBar />
      <main className="dashboard-main">
        <TopBar />
        <div class="transaction-history-overview">
          <header>
            <h6>Payment History:</h6>
            {/* <Link to="/payments">see all</Link> */}
          </header>
          <table class="apartments-list payment-history">
            <thead>
              <tr>
                <th>PaymentID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Mode Of Payment</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

                <tr>
                  <td class="apartment-id payment id">
                    <p>#1111111</p>
                  </td>

                  <td class="name">
                    <p>Olakunbi Olaode</p>
                  </td>

                  <td class="payment-status">
                    <p>Successful</p>
                  </td>

                  <td class="apartment-price">
                    <p>
                      {' '}
                      &#8358;{' '}
                     500,000
                    </p>
                  </td>

                  <td class="date-added">
                    <p>30th August, 2022</p>
                  </td>

                  <td class="type">
                    <p>Card</p>
                  </td>

                  <td class="action-options payment-actions">
                    <iconify-icon
                      class="action-icon"
                      icon="carbon:overflow-menu-vertical"
                    ></iconify-icon>
                  </td>
                </tr>

            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
};

export default TenantPaymentHistory;
