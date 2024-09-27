import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import buildingsIcon from '../../images/buildings-2.svg';
import dashboardIcon from '../../images/dashboard.svg';
import settingsIcon from '../../images/setting-2.svg';
import walletIcon from '../../images/wallet-minus.svg';


const AdminSideBar = () => {
  return (
    <aside className="side-bar">
      <div class="dashboard-logo">
        <img src={logo} alt="" />
      </div>

      <nav className="dashboard-navbar">
        <ul className="dashboard-nav-links">
          <li>
            <NavLink
              to="/admin-dashboard-overvie"
              className="side-bar-link"
              id={window.location.pathname === '/dashboard' ? 'active' : ''}
            >
              <img src={dashboardIcon} alt="" />
              <span>Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/listed-properties-admin" className="side-bar-link" id={window.location.pathname === "/payments" ? "active" : ""} >
              <img src={buildingsIcon} alt="" />
              <span>Apartments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-transaction" className="side-bar-link" id={window.location.pathname === "/payments" ? "active" : ""} >
              <img src={walletIcon} alt="" />
              <span>Transactions</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-settings"
              className="side-bar-link"
              id={window.location.pathname === '/apartments' ? 'active' : ''}
            >
              <img src={settingsIcon} alt="" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
