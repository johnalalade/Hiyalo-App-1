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
            <Link to="/dashboard" className="side-bar-link" id="active">
              <img src={dashboardIcon} alt="" />
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link to="/apartments" className="side-bar-link">
              <img src={buildingsIcon} alt="" />
              <span>Apartment</span>
            </Link>
          </li>
          {/* <li>
            <NavLink to="#">
              <img src={noteIcon} alt="" />
              <span>Services</span>
            </NavLink>
          </li> */}
          <li>
            <Link to="/payment" className="side-bar-link">
              <img src={walletIcon} alt="" />
              <span>Payments</span>
            </Link>
          </li>
          {/* <li>
            <NavLink href="#">
              <img src={messageIcon} alt="" />
              <span>Messages</span>
            </NavLink>
          </li> */}
          <li>
            <Link to="/settings" className="side-bar-link">
              <img src={settingsIcon} alt="" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
