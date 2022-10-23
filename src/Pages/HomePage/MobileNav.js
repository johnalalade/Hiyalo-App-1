import React from 'react';

const MobileNav = () => {
  return (
    <div className='mobile-nav-container'>
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
  );
};

export default MobileNav;
