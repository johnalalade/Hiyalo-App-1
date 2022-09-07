import dashboardIcon from '../../images/dashboard.svg';
import buildingsIcon from '../../images/buildings-2.svg';
import noteIcon from '../../images/note.svg';
import walletIcon from '../../images/wallet-minus.svg';
import messageIcon from '../../images/message-notif.svg';
import settingsIcon from '../../images/setting-2.svg';

import './sidebar.css';

const SideBar = () => {
  return (
    <aside class="side-bar">
      <div class="dashboard-logo">{/* <!-- logo --> */}</div>
      <nav class="dashboard-navbar">
        <ul class="dashboard-nav-links">
          <li>
            <a href="dashboard.html" id="active">
              <img src={dashboardIcon} alt="" />
              <p>Overview</p>
            </a>
          </li>
          <li>
            <a href="property.html">
              <img src={buildingsIcon} alt="" />
              <p>Apartment</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={noteIcon} alt="" />
              <p>Services</p>
            </a>
          </li>
          <li>
            <a href="payment.html">
              <img src={walletIcon} alt="" />
              <p>Payments</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={messageIcon} alt="" />
              <p>Messages</p>
            </a>
          </li>
          <li>
            <a href="account-settings.html">
              <img src={settingsIcon} alt="" />
              <p>Settings</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
