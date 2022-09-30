// import  {AddNewApartment}  from './AddNewApartment';
import React from 'react';
import AddNewApartment from './AddNewApartment';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';

export const AddNewApartmentContainer = () => {
  return (
    <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar />

        <AddNewApartment />
      </main>
    </section>
  );
};


export default AddNewApartmentContainer;