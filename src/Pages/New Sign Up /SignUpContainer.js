import React, { useEffect, useState } from 'react';
import './sign-up-agent-tenant.css';
import SignNavBar from '../../components/sign up navbar/SignUpNavbar';
// import SignInForm from './SignUpTenant';
// import SignUpForm from './SignUpAgent';
import SignUpAgent from './SignUpAgent';
import SignUpTenant from './SignUpTenant';
import UserIcon from '../../images/user-1.svg';
import PeopleIcon from '../../images/people.svg';
import { Link } from 'react-router-dom';

const SignUpContainer = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="sign-up-container">
      <SignNavBar />
      <main className="new-sign-up-container">
        <header>
          <h2>Sign Up</h2>
          <p>
            Let’s get you started. Already have an account?
            <Link to="/sign-in-agent"> Sign In</Link>
          </p>
        </header>

        <div className="sign-form-tabs">
          <div
            className={
              toggleState === 1 ? 'tenant-tab active-signup-tab' : 'tenant-tab'
            }
            onClick={() => toggleTab(1)}
          >
            <div className="tab-name">
              <span>
                <img src={UserIcon} alt="" />
              </span>
              <p>Sign Up as an Agent</p>
            </div>

            <input type="radio" name="" id="" />
          </div>

          <div
            className={
              toggleState === 2 ? 'tenant-tab active-signup-tab' : 'tenant-tab'
            }
            onClick={() => toggleTab(2)}
          >
            <div className="tab-name">
              <span>
                <img src={PeopleIcon} alt="" />
              </span>
              <p>Sign Up as an Tenant</p>
            </div>

            <input type="radio" name="" id="" />
          </div>
        </div>
      </main>

      {toggleState === 1 && (
        <SignUpAgent
          // className={
          className={
            toggleState === 2
              ? 'signup-form  active-signup-form'
              : 'signup-form'
          }
        />
      )}

      {toggleState === 2 && (
        <SignUpTenant
          className={
            toggleState === 2
              ? 'signup-form  active-signup-form'
              : 'signup-form'
          }
        />
      )}
    </section>
  );
};

export default SignUpContainer;
