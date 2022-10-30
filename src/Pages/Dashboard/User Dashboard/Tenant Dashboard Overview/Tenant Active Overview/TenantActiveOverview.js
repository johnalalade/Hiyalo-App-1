import React from 'react';
import './tenant-active-overview.css';

const TenantActiveOverview = () => {
  return (
    <>
      <div className='overview-details'>
        <div className="page-title">
          <h4>Account Overview</h4>
          <span className="account-status active-status">active</span>
        </div>

        <div className='overview-header'>
        <div class="total-income"></div>
        </div>
      </div>
    </>
  );
};

export default TenantActiveOverview;
