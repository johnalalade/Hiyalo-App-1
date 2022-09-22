import dashboardIcon from '../../images/dashboard.svg';
import buildingsIcon from '../../images/buildings-2.svg';
// import noteIcon from '../../images/note.svg';
import walletIcon from '../../images/wallet-minus.svg';
// import messageIcon from '../../images/message-notif.svg';
import settingsIcon from '../../images/setting-2.svg';

import './sidebar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside class="side-bar">
      <div class="dashboard-logo">{/* <!-- logo --> */}</div>
      <nav class="dashboard-navbar">
        <ul class="dashboard-nav-links">
          <li>
            <Link to="/dashboard" id="active" >
              <img src={dashboardIcon} alt="" />
              <p>Overview</p>
            </Link>
          </li>
          <li>
            <Link to="/apartments">
              <img src={buildingsIcon} alt="" />
              <p>Apartment</p>
            </Link>
          </li>
          {/* <li>
            <NavLink to="#">
              <img src={noteIcon} alt="" />
              <p>Services</p>
            </NavLink>
          </li> */}
          <li>
            <a href="payment.html">
              <img src={walletIcon} alt="" />
              <p>Payments</p>
            </a>
          </li>
          {/* <li>
            <NavLink href="#">
              <img src={messageIcon} alt="" />
              <p>Messages</p>
            </NavLink>
          </li> */}
          <li>
            <Link to="/settings">
              <img src={settingsIcon} alt="" />
              <p>Settings</p>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
