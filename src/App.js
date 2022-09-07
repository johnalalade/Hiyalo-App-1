import {  Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage';
import SignUp from './Pages/sign up/SignUp';
import SignIn from './Pages/sign up/SignIn';
import DashboardOverview from './Pages/Dashboard/DashboardOverview';
// imort DashboardOverview
function App() {
  return (
    <div>
          <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/sign-up" element={<SignUp />} ></Route>
            <Route path="/sign-in" element={<SignIn />} ></Route>
            <Route path="/dashboard" element={<DashboardOverview />} ></Route>
          </Routes>
    </div>
  );
}

export default App;
