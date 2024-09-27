import React, { useEffect } from 'react';
import { useState } from 'react';
import './general-settings.css';
import SideBar from '../../../../components/Dashboard Navbar/SideBar';
import TopBar from '../../../../components/Dashboard Navbar/TopBar';
import PersonalDetailsSettings from './PesonalDetailsSettings';
import PaymentBankDetailsSettings from './PaymentBankDetailsSettings';
import PasswordSettings from './PasswordSettings';
import EmploymentStatus from './EmploymentStatus';
import NextOfKin from './NextOfKin';
import axios from '../../../../components/axios';
import PageLoader from '../../../../components/Loader/PageLoader';

const GeneralSettingsContainer = () => {
  const [toggleState, setToggleState] = useState(1);
  const [name, setName] = useState('');
  const [agent, setAgent] = useState({});
  const [loading, setLoading] = useState(true);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    axios
      .post('/agents/agent-gateway/get-agent', {
        id: localStorage.getItem('id'),
      })
      .then((data) => {
        setAgent(data.data.agent);
        console.log(data.data.agent);
        setLoading(false);
        setName(data.data.agent.first_name);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <PageLoader />
      </div>
    );
  }

  return (
    <section className="dashboard-container">
      <SideBar verified={agent.verified} />

      <main className="dashboard-main">
        <TopBar name={name} />

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
                Payment Details
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

              <li
                className={
                  toggleState === 4
                    ? 'settings-tabs active-setings-tabs'
                    : 'settings-tabs'
                }
                onClick={() => toggleTab(4)}
              >
                Employement Status
              </li>

              <li
                className={
                  toggleState === 5
                    ? 'settings-tabs active-setings-tabs'
                    : 'settings-tabs'
                }
                onClick={() => toggleTab(5)}
              >
                Next Of Kin
              </li>
              {/* <li>Contact Us</li>
              <li>Terms of Service</li> */}
            </ul>
          </div>

          {toggleState === 1 && (
            <PersonalDetailsSettings
              // className={
              //   toggleState === 1
              //     ? 'settings-content  active-settings-content'
              //     : 'settings-content'
              // }
              f_name={agent.first_name}
              l_name={agent.last_name}
              mail={agent.email}
              phonee={agent.phone}
              doc_number={agent.document_number}
              bn={agent.bvn}
              verified={agent.verified}
            />
          )}

          {toggleState === 2 && (
            <PaymentBankDetailsSettings
              className={
                toggleState === 2
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
              banking={agent.bank}
            />
          )}

          {toggleState === 3 && (
            <PasswordSettings
              className={
                toggleState === 3
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
            />
          )}

          {toggleState === 4 && (
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
          )}
        </main>
      </main>
    </section>
  );
};

export default GeneralSettingsContainer;
