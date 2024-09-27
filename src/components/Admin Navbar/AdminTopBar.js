import React from 'react';

const AdminTopBar = () => {
  const userAvatar = require('../../images/bg.jpg');
  return (
    <header>
      <main className="top-bar">
        <div className="welcome-back">
          <h3>Welcome, Olakunbi 😃</h3>
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
    </header>
  );
};

export default AdminTopBar;
