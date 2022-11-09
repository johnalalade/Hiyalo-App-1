import React, { useState } from 'react';
import './sign-up-navbar.css';
import logo from '../../images/logo.svg';
import SearchIcon from '../../images/search-normal.svg';
import { NavLink, Link } from 'react-router-dom';

function SignNavBar() {
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
      <div className="nav-bar">
        <Link to="/" class="logo">
          <img src={logo} alt="" />
        </Link>

        <Link to="/marketplace" class="cta-btn">
          <img src={SearchIcon} alt="" />
          {/* <button type="button">Login</button> */}
        </Link>
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

export default SignNavBar;
