import React from 'react';
import AdminSideBar from '../../../../components/Admin Navbar/AdminSideBar';
import AdminTopBar from '../../../../components/Admin Navbar/AdminTopBar';

const TransactionsContainer = () => {
  const transactionsInformation = [
    {
      invoiceId: 12221,
      name: 'Olakunbi Olabode',
      status: 'Successful',
      amount: '1,000,000',
      type: 'Debit',
      date: 'Today',
      time: '12:30pm',
    },
  ];
  return (
    <section className="dashboard-container">
      <AdminSideBar />

      <main className="dashboard-main">
        <AdminTopBar />

        <main className="properties-container">
          <header className="property-page-title transaction-title">
            <h4>Transactions</h4>
          </header>

          <div className="properties-page-filter-options">
            <div className='filter-options-container'>
              <div className="filter-option active-option">
                <p>All</p>
                <span>01</span>
              </div>

              <div className="filter-option">
                <p>Approved</p>
                <span>02</span>
              </div>

              <div className="filter-option">
                <p>Pending</p>
                <span>03</span>
              </div>

              <div className="filter-option">
                <p>Declined</p>
                <span>04</span>
              </div>
            </div>
            <button>
              <iconify-icon class="iconify" icon="bi:filter"></iconify-icon>
              <p>Sort</p>
            </button>
          </div>

          <div className="apartment-list-container">
            <table class="apartments-list payment-history">
              <thead>
                <tr>
                  <th>PaymentID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {transactionsInformation.map((transaction, idx) => (
                  <tr>
                    <td class="apartment-id payment id">
                      <p>#{transaction.invoiceId}</p>
                    </td>

                    <td class="name">
                      <p>{transaction.name}</p>
                    </td>

                    <td class="apartment-price">
                      <p> &#8358; {transaction.amount}</p>
                    </td>

                    <td class="payment-status">
                      <p> {transaction.status}</p>
                    </td>

                    <td class="date-added">
                      <p>{transaction.time}</p>
                    </td>

                    <td class="date-added">
                      <p>{transaction.date}</p>
                    </td>

                    <td class="type">
                      <p>{transaction.type}</p>
                    </td>

                    <td class="action-options payment-actions">
                      <iconify-icon
                        class="action-icon"
                        icon="carbon:overflow-menu-vertical"
                      ></iconify-icon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </main>
    </section>
  );
};

export default TransactionsContainer;
