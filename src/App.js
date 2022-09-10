import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage';
import PropertyOverview from './Pages/Property Overview/PropertyOverview';


import SignUp from './Pages/sign up/SignUp';
import SignIn from './Pages/sign up/SignIn';
import DashboardOverview from './Pages/Dashboard/Dashboard Overview/DashboardOverview';
import ApartmentOverview from './Pages/Dashboard/Dashboard Apartment/Apartment Overview/ApartmentOverview';

import ApartmentBasicInfo from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/ApartmentBasicInfo';
import ApartmentAddress from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/ApartementAddress';
import ApartmentAmmenities from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/ApartmentAmmenities';
import ApartmentGallery from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/ApartmentPaymentDetails';
import ApartmentPaymentDetails from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/ApartmentPaymentDetails';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/property-overview" element={<PropertyOverview />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/dashboard" element={<DashboardOverview />}></Route>
        <Route path="/apartments" element={<ApartmentOverview />}></Route>
        <Route path="/apartments/add-apartment-basic-info" element={<ApartmentBasicInfo />}></Route>
        <Route path="/apartments/add-apartment-address-info" element={<ApartmentAddress />}></Route>
        <Route path="/apartments/add-apartment-ammenities-info" element={<ApartmentAmmenities />}></Route>
        <Route path="/apartments/add-apartment-gallery-info" element={<ApartmentGallery />}></Route>
        <Route path="/apartments/add-apartment-payment-info" element={<ApartmentPaymentDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
