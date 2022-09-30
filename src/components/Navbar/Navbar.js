import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './Dropdown';
// import Dropdown from './Dropdown';
import logo from '../../images/logo.svg';
import SearchIcon from '../../images/search-normal.svg';

function NavBar() {
//   const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <nav class="nav-bar">
      <Link to='/' class="logo">
        <img src={logo} alt="" />
      </Link>
      <ul class="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          // className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/sign-up-agent" className="nav-link" >
            Agent <iconify-icon icon="ri:arrow-drop-down-line"></iconify-icon>
          </Link>
          {dropdown && <Dropdown />}
        </li>

        <li>
          <Link to="/market-place" className="nav-link">
            Rent
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Rent Loan
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            FAQ
          </Link>
        </li>
      </ul>
      <Link to="/sign-up-agent" class="cta-btn">
        <img src={SearchIcon} alt="" />
        <button type="button">Login</button>
      </Link>
      <div class="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default NavBar;
