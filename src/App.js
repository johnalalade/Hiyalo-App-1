import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage';
import PropertyOverview from './Pages/Property Overview/PropertyOverview';
import MarketPlace from './Pages/Market Place/MarketPlaceContainer';
// import MarketPlace from './Pages/Market Place/MarketPlaceContainer';
import SignUp from './Pages/sign up/SignUp';
import SignIn from './Pages/sign up/SignIn';
import DashboardOverview from './Pages/Dashboard/Dashboard Overview/DashboardOverview';
import ApartmentOverview from './Pages/Dashboard/Dashboard Apartment/Apartment Overview/ApartmentOverview';
// import {AddNewApartmentContainer} from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/AddNewApartmentContainer';
import AddNewApartmentContainer from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/AddNewApartmentContainer';
import GeneralSettingsContainer from './Pages/Dashboard/Dashboard Settings/GeneralSettingsContainer';
import DashboardPayment from './Pages/Dashboard/Dashboard Payment/Dashboard_Payment';
import PageLoader from './components/Loader/PageLoader';
import PrivacyPolicy from './Pages/Privacy_Policy/Privacy_Policy';
// import ApartmentBasicInfo from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/ApartmentBasicInfo';
// import ApartmentAddress from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/ApartementAddress';
// import ApartmentAmmenities from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/ApartmentAmmenities';
// import ApartmentGallery from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/ApartmentPaymentDetails';
// import ApartmentPaymentDetails from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/ApartmentPaymentDetails';

// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route
            path="/property-overview"
            element={<PropertyOverview />}
          ></Route>

          <Route path="/sign-up-agent" element={<SignUp />}></Route>
          <Route path="/sign-in-agent" element={<SignIn />}></Route>
          <Route path="/marketplace" element={<MarketPlace />}></Route>
          <Route path="/dashboard" element={<DashboardOverview />}></Route>
          <Route path="/apartments" element={<ApartmentOverview />}></Route>
          <Route path="/settings" element={<GeneralSettingsContainer />}></Route>
          <Route path="/payments" element={<DashboardPayment />}></Route>
          <Route
            path="/apartments/add-new-apartment"
            element={<AddNewApartmentContainer />}
          ></Route>
          <Route
            path="/loader"
            element={<PageLoader />}
          ></Route>

          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          {/* <Route
            path="/apartments/add-apartment-basic-info"
            element={<ApartmentBasicInfo />}
          ></Route>
          <Route
            path="/apartments/add-apartment-address-info"
            element={<ApartmentAddress />}
          ></Route>
          <Route
            path="/apartments/add-apartment-ammenities-info"
            element={<ApartmentAmmenities />}
          ></Route>
          <Route
            path="/apartments/add-apartment-gallery-info"
            element={<ApartmentGallery />}
          ></Route>
          <Route
            path="/apartments/add-apartment-payment-info"
            element={<ApartmentPaymentDetails />}
          ></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
