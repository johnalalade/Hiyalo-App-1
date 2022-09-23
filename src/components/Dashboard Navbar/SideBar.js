import dashboardIcon from '../../images/dashboard.svg';
import buildingsIcon from '../../images/buildings-2.svg';
// import noteIcon from '../../images/note.svg';
import walletIcon from '../../images/wallet-minus.svg';
// import messageIcon from '../../images/message-notif.svg';
import settingsIcon from '../../images/setting-2.svg';

import './sidebar.css';
import { NavLink } from 'react-router-dom';
// import { useEffect } from 'react';

const SideBar = () => {

  // useEffect(() => {
  //   console.log(window.location)
  // }, [])

  return (
    <aside class="side-bar">
      <div class="dashboard-logo">{/* <!-- logo --> */}</div>
      <nav class="dashboard-navbar">
        <ul class="dashboard-nav-links">

          <li>
            <NavLink to="/dashboard" id={window.location.pathname == "/dashboard" ? "active" : ""} >
              <img src={dashboardIcon} alt="" />
              <p>Overview</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/apartments" id={window.location.pathname == "/apartments" ? "active" : ""} >
              <img src={buildingsIcon} alt="" />
              <p>Apartment</p>
            </NavLink>

          </li>
          {/* <li>
            <NavLink to="#">
              <img src={noteIcon} alt="" />
              <p>Services</p>
            </NavLink>
          </li> */}

          <li>
            <NavLink to="/payments" id={window.location.pathname == "/payments" ? "active" : ""} >
              <img src={walletIcon} alt="" />
              <p>Payments</p>
            </NavLink>
          </li>

          {/* <li>
            <NavLink href="#">
              <img src={messageIcon} alt="" />
              <p>Messages</p>
            </NavLink>
          </li> */}

          <li>
            <NavLink to="/settings" id={window.location.pathname == "/settings" ? "active" : ""} >
              <img src={settingsIcon} alt="" />
              <p>Settings</p>
            </NavLink>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
