import React from 'react';
import { useState, useEffect } from 'react';
import AdminSideBar from '../../../../components/Admin Navbar/AdminSideBar';
import AdminTopBar from '../../../../components/Admin Navbar/AdminTopBar';

import AdminPersonalInformation from './AdminPersonalInformation';
import AdminPasswordSettings from './AdminPasswordSettings';
import AddNewAdmin from './AddNewAdmin';

const AdminSettingsContainer = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <section className="dashbboard-container">
      <AdminSideBar />

      <main className="dashboard-main">
        <AdminTopBar />

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
                Add New Admin
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

          {toggleState === 1 && (
            <AdminPersonalInformation
              // className={
              //   toggleState === 1
              //     ? 'settings-content  active-settings-content'
              //     : 'settings-content'
              // }
            />
          )}

          {toggleState === 2 && (
            <AddNewAdmin
              className={
                toggleState === 2
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
            />
          )}

          {toggleState === 3 && (
            <AdminPasswordSettings
              className={
                toggleState === 3
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
            />
          )}

          {/* {toggleState === 4 && (
            <EmploymentStatus
              className={
                toggleState === 4
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
            />
          )}

          {toggleState === 5 && (
            <NextOfKin
              className={
                toggleState === 5
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
            />
          )} */}
        </main>
      </main>
    </section>
  );
};

export default AdminSettingsContainer;
