import React from 'react';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
const GeneralSettings = () => {
  return (
     <section className="dashboard-container">
        <SideBar />
    <main className='dashboard-main'>
        <TopBar />

        
    </main>
  </section>
  )
};

export default GeneralSettings;
