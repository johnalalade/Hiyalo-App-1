// import searchIcon from '../../images/search-normal.svg';
// import notificationIcon from '../../images/notification-bing.svg';
import dashboardIcon from '../../images/dashboard.svg';
import buildingsIcon from '../../images/buildings-2.svg';
// import noteIcon from '../../images/note.svg';
import walletIcon from '../../images/wallet-minus.svg';
// import messageIcon from '../../images/message-notif.svg';
import settingsIcon from '../../images/setting-2.svg';
// import logo from '../../images/logo.svg';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './topbar.css';

const TopBar = ({ name, verified }) => {
  const userAvatar = require('../../images/bg.jpg');

  const [selected, setSelected] = useState(null);
  let i = 0;
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <header>
      <main className="top-bar">
        <div className="dashboard-hamburger" onClick={() => toggle(i)}>
          {selected === i ? (
            <iconify-icon
              icon="ep:menu"
              style={{
                fontSize: '36px',
                color: '#050213',
                transform: 'rotate(45deg)',
              }}
            ></iconify-icon>
          ) : (
            <iconify-icon
              icon="ep:menu"
              style={{
                fontSize: '40px',
                color: '#4733AC',
              }}
            ></iconify-icon>
          )}
        </div>

        <div className="welcome-back">
          <h3>Welcome, {name ? name : ''} 😃</h3>
          <p>Comrade, what's popping cheif ?!</p>
        </div>

        <div class="top-bar-cta">
          {/* <span class="search-btn">
          <button type="button">
            <img src={searchIcon} alt="" />
          </button>
        </span>
        <span>
          <button type="submit">
            <img src={notificationIcon} alt="" />
          </button>
        </span> */}
          <div class="profile-settings">
            <img src={userAvatar} alt="" />
            {/* <iconify-icon
            class="iconify-dropdown"
            icon="ri:arrow-drop-down-line"
          ></iconify-icon> */}
          </div>
        </div>
      </main>

      <div
        className={
          selected === i
            ? 'dashboard-nav-content dashboard-nav-shows'
            : 'dashboard-nav-content'
        }
      >
        <ul class="dashboard-nav-links">
          <li>
            <NavLink
              to="/dashboard"
              className="side-bar-link"
              id={window.location.pathname === '/dashboard' ? 'active' : ''}
            >
              <img src={dashboardIcon} alt="" />
              <span>Overview</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/apartments"
              className="side-bar-link"
              id={window.location.pathname === '/apartments' ? 'active' : ''}
            >
              <img src={buildingsIcon} alt="" />
              <span>Apartment</span>
            </NavLink>
          </li>
          {/* <li>
  <NavLink to="#">
    <img src={noteIcon} alt="" />
    <span>Services</span>
  </NavLink>
</li> */}

          <li>
            <NavLink
              to="/payments"
              className="side-bar-link"
              id={window.location.pathname === '/payments' ? 'active' : ''}
            >
              <img src={walletIcon} alt="" />
              <span>Payments</span>
            </NavLink>
          </li>

          {/* <li>
  <NavLink href="#">
    <img src={messageIcon} alt="" />
    <span>Messages</span>
  </NavLink>
</li> */}

          <li className="badger">
            <NavLink
              to="/settings"
              className={
                verified === true ? 'side-bar-link' : 'side-bar-link badge'
              }
              id={window.location.pathname === '/settings' ? 'active' : ''}
            >
              <img src={settingsIcon} alt="" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default TopBar;
