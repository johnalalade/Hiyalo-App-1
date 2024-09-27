import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage';
import PropertyOverview from './Pages/Property Overview/PropertyOverview';
import MarketPlace from './Pages/Market Place/MarketPlaceContainer';
// import MarketPlace from './Pages/Market Place/MarketPlaceContainer';
import SignUp from './Pages/sign up/SignUp';
import SignIn from './Pages/sign up/SignIn';
import DashboardOverview from './Pages/Dashboard/Agent Dashboard/Dashboard Overview/DashboardOverview';
import ApartmentOverview from './Pages/Dashboard/Agent Dashboard/Dashboard Apartment/Apartment Overview/ApartmentOverview';
// import {AddNewApartmentContainer} from './Pages/Dashboard/Dashboard Apartment/AddNewApartment/AddNewApartmentContainer';
// import AddNewApartmentContainer from './Pages/Dashboard//Dashboard Apartment/AddNewApartment/AddNewApartmentContainer';
// import AddNewApartmentContainer
import AddNewApartmentContainer from './Pages/Dashboard/Agent Dashboard/Dashboard Apartment/AddNewApartment/AddNewApartmentContainer';
import GeneralSettingsContainer from './Pages/Dashboard/Agent Dashboard/Dashboard Settings/GeneralSettingsContainer';
import DashboardPayment from './Pages/Dashboard/Agent Dashboard/Dashboard Payment/Dashboard_Payment';
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

import TenantDashboardOverview from './Pages/Dashboard/User Dashboard/Tenant Dashboard Overview/TenantDashboardOverview';
// import TenantActiveOverview from './Pages/Dashboard/User Dashboard/Tenant Dashboard Overview/Tenant Active Overview/TenantActiveOverview';
import SettingsContainer from './Pages/Dashboard/User Dashboard/User Dashboard Settings/SettingsContainer';
import TenantPaymentHistory from './Pages/Dashboard/User Dashboard/UserPaymentPage/TenantPaymentHistory';

import TenantSignUp from './Pages/Tenant SignUp/TenantSignUp';
import TenantSignIn from './Pages/Tenant SignUp/TenantSignIn';

import RentLoanContainer from './Pages/Rent Loan LandingPage/RentLoanContainer';
import PaymentModeContainer from './Pages/Payment Mode/PaymentModeContainer';

import SignUpContainer from './Pages/New Sign Up /SignUpContainer';
import PaymentSuccessful from './Pages/Payment Mode/PaymentSuccessful';
import PaymentEmailSent from './Pages/Payment Mode/PaymentEmailModal';

import BalanceWithdrawalContainer from './Pages/Dashboard/Agent Dashboard/Dashboard Withdrawal/BalanceWithdrawalContainer';

import RequestTourModal from './Pages/Property Overview/RequestTourModal';

import ContactUsContainer from './Pages/Contact Us/ContactUsContainer';

import AnotherSignUpContainer from './Pages/Another Sign Up/AnotherSignUpContainer';
import AnotherSignInContainer from './Pages/Another Sign In/AnotherSignInContainer';

import AdminOverview from './Pages/Dashboard/Admin Dashboard/Dashboard Overview/AdminOverview';

import AdminSettingsContainer from './Pages/Dashboard/Admin Dashboard/Dashboard Settings/AdminSettingsContainer';

import TransactionsContainer from './Pages/Dashboard/Admin Dashboard/Dashboard Transactions/TransactionsContainer';

import EditTransactionModal from './Pages/Dashboard/Admin Dashboard/Dashboard Transactions/EditTransactionModal';

import ListedApartment from './Pages/Dashboard/Admin Dashboard/Dashboard Apartment/ListedApartment';

import SignUpQuestionContainer from './Pages/SignUp Question/SignUpQuestionContainer';
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
          <Route
            path="/settings"
            element={<GeneralSettingsContainer />}
          ></Route>
          <Route path="/payments" element={<DashboardPayment />}></Route>
          <Route
            path="/apartments/add-new-apartment"
            element={<AddNewApartmentContainer />}
          ></Route>
          <Route path="/loader" element={<PageLoader />}></Route>

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

          <Route
            path="/tenant-dashboard-inactive"
            element={<TenantDashboardOverview />}
          ></Route>
          <Route
            path="/tenant-settings"
            element={<SettingsContainer />}
          ></Route>
          <Route
            path="/tenant-payment-history"
            element={<TenantPaymentHistory />}
          ></Route>

          <Route path="/tenant-sign-up" element={<TenantSignUp />}></Route>
          <Route path="/tenant-sign-in" element={<TenantSignIn />}></Route>

          <Route
            path="/pay-monthly-home"
            element={<RentLoanContainer />}
          ></Route>
          <Route
            path="/payment-mode"
            element={<PaymentModeContainer />}
          ></Route>

          <Route path="/new-signup" element={<SignUpContainer />}></Route>

          <Route
            path="/payment-successful-modal"
            element={<PaymentSuccessful />}
          ></Route>
          <Route
            path="/payment-email-modal"
            element={<PaymentEmailSent />}
          ></Route>
          <Route
            path="/tenant-withdrawal"
            element={<BalanceWithdrawalContainer />}
          ></Route>

          <Route
            path="/request-tour-modal"
            element={<RequestTourModal />}
          ></Route>

          <Route path="/contact-us" element={<ContactUsContainer />}></Route>

          <Route
            path="/another-sign-up"
            element={<AnotherSignUpContainer />}
          ></Route>
          <Route
            path="/another-sign-In"
            element={<AnotherSignInContainer />}
          ></Route>

          <Route
            path="/admin-dashboard-overview"
            element={<AdminOverview />}
          ></Route>

          <Route
            path="/admin-settings"
            element={<AdminSettingsContainer />}
          ></Route>

          <Route
            path="/admin-transaction"
            element={<TransactionsContainer />}
          ></Route>

<Route
            path="/edit-transaction"
            element={<EditTransactionModal />}
          ></Route>
          <Route
            path="/listed-properties-admin"
            element={<ListedApartment />}
          ></Route>

<Route
            path="/signup-question"
            element={<SignUpQuestionContainer />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
