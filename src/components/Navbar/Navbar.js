import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './Dropdown';
// import Dropdown from './Dropdown';
import logo from '../../images/logo.svg';

// import SearchIcon from '../../images/search-normal.svg';

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

  const [selected, setSelected] = useState(null);
  let i = 0;
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <nav>
      <div class="nav-bar">
        <Link to="/" class="logo">
          <img src={logo} alt="" />
        </Link>

        <ul class="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li
            // className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink to="/sign-up-agent" className="nav-link">
              Agent <iconify-icon icon="ri:arrow-drop-down-line"></iconify-icon>
            </NavLink>
            {dropdown && <Dropdown />}
          </li>

          <li>
            <Link to="/marketplace" className="nav-link">
              Rent
            </Link>
          </li>

          <li>
            <NavLink to="/pay-monthly-home" className="nav-link">
              Pay Monthly
            </NavLink>
          </li>

          <li>
            <NavLink to="/" className="nav-link">
              FAQ
            </NavLink>
          </li>
        </ul>

        <div className="cta-container">
          <Link to="/sign-in-agent" class="cta-btn">
            {/* <img src={SearchIcon} alt="" /> */}
            <button type="button">Login</button>
          </Link>
          <Link to="/sign-up-agent" class="cta-btn signup-cta-btn">
            <button type="button">Sign Up</button>
          </Link>
        </div>

        <div class="hamburger" onClick={() => toggle(i)}>
          {selected === i ? (
            <iconify-icon
              icon="ci:close-big"
              style={{
                fontSize: '32px',
                // transform: 'translateX(-10px)'
              }}
            ></iconify-icon>
          ) : (
            <iconify-icon
              icon="ci:hamburger"
              style={{
                fontSize: '36px',
              }}
            ></iconify-icon>
          )}
        </div>
      </div>
      <div className={selected === i ? 'nav-content nav-shows' : 'nav-content'}>
        <ul class="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/sign-up-agent" className="nav-link">
              Agent
            </NavLink>
          </li>

          <li>
            <Link to="/marketplace" className="nav-link">
              Rent
            </Link>
          </li>

          {/* <li>
          <Link to="/" className="nav-link">
            Rent Loan
          </Link>
        </li> */}

          <li>
            <NavLink to="/" className="nav-link">
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
