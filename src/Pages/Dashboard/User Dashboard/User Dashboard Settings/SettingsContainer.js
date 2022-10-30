// import React, { useEffect } from 'react';
import React, { useState } from 'react';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
import TenantPersonalSettings from './TenantPersonalSettings';
import BillingAddress from './BillingAddress';
import TenantPassowrd from './TenantPassowrd';
const SettingsContainer = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar />
        <main class="add-new-property-container">
          <header>
            <h4>Account Settings:</h4>
            {/* <div class="add-property-cta">
              <button type="submit">Cancel</button>
              <button type="submit">Save</button>
            </div> */}
          </header>

          <div class="settings-filter">
            <ul>
              <li
                class="active-settings"
                className={
                  toggleState === 1
                    ? 'settings-tabs active-setings-tabs'
                    : 'settings-tabs'
                }
                onClick={() => toggleTab(1)}
              >
                General Details
              </li>

              <li
                className={
                  toggleState === 2
                    ? 'settings-tabs active-setings-tabs'
                    : 'settings-tabs'
                }
                onClick={() => toggleTab(2)}
              >
                Billing Address
              </li>
              <li
                className={
                  toggleState === 3
                    ? 'settings-tabs active-setings-tabs'
                    : 'settings-tabs'
                }
                onClick={() => toggleTab(3)}
              >
                Password
              </li>
              {/* <li>Contact Us</li>
              <li>Terms of Service</li> */}
            </ul>
          </div>

          {toggleState === 1 && <TenantPersonalSettings />}

          {toggleState === 2 && (
            <BillingAddress
              className={
                toggleState === 2
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
              //   banking={agent.bank}
            />
          )}

          {toggleState === 3 && (
            <TenantPassowrd
              className={
                toggleState === 3
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
            />
          )}
        </main>
      </main>
    </section>
  );
};

export default SettingsContainer;
