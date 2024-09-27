import React from 'react';
import './tenant-active-overview.css';
import OverviewTransactionHistory from './OverviewTransactionHistory';
import ActiveAPartmentPreview from './ActiveAPartmentPreview';
const TenantActiveOverview = () => {
  return (
    <>
      <div className="overview-details">
        <div className="page-title">
          <h4>Account Overview</h4>
          <span className="account-status active-status">active</span>
        </div>

        <div className="overview-header">
          <div class="total-income">
            <header>Payment Due</header>

            <span className="total-amount">
                &#8358; 0.00
            </span>

            <span class="total-outstanding-cta">
                  <button>Messages</button>
                  <button>Withdraw</button>
                </span>
          </div>

          <div class="total-outstanding tenant-outstanding">
            <header>Total Left To Pay</header>

            <span className="total-amount">
                &#8358; 0.00
            </span>

            <span class="unpaid-stat">
                  <p>% Unpaid</p>
              <p>85%</p>
                </span>
          </div>

          <div class="total-income total-house-rent-amount">
            <header>Total House Rent</header>

            <span className="total-amount">
                &#8358; 0.00
            </span>

            <span class="unpaid-stat">
                  <p>%paid</p>
              <p>15%</p>
                </span>
          </div>
        </div>
      </div>
      <main className='overview-main'>
        <OverviewTransactionHistory />
        <ActiveAPartmentPreview />
      </main>
    </>
  );
};

export default TenantActiveOverview;
