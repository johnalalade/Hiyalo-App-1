import searchIcon from '../../images/search-normal.svg';
import notificationIcon from '../../images/notification-bing.svg';
import './topbar.css';
const TopBar = () => {
  const userAvatar = require('../../images/bg.jpg');
  return (
    <header class="top-bar">
      <div class="welcome-back">
        <h3>Welcome, Olakunbi</h3>
        <p>Go through what’s happening in your account</p>
      </div>
      <div class="top-bar-cta">
        <span class="search-btn">
          <button type="button">
            <img src={searchIcon} alt="" />
          </button>
        </span>
        <span>
          <button type="submit">
            <img src={notificationIcon} alt="" />
          </button>
        </span>
        <div class="profile-settings">
          <img src={userAvatar} alt="" />
          <iconify-icon
            class="iconify-dropdown"
            icon="ri:arrow-drop-down-line"
          ></iconify-icon>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
