import React from 'react';
import UserSideBar from '../../../../components/Dashboard Navbar/UserSideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
import TenantInactiveOverview from './Tenant Inactive Overview/TenantInactiveOverview';
import TenantActiveOverview from './Tenant Active Overview/TenantActiveOverview';
import DashboardMarketPlace from '../User Dashboard Listing/DashboardMarketPlace';

const TenantDashboardOverview = () => {
  return (
    <section className="dashboard-container">
      <UserSideBar />
      <main className="dashboard-main">
        <TopBar />
        {/* <TenantInactiveOverview /> */}
        <TenantActiveOverview />
        {/* <DashboardMarketPlace />  */}
      </main>
    </section>
  );
};

export default TenantDashboardOverview;
