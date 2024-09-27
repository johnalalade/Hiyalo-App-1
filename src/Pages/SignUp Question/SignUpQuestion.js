import { Link } from 'react-router-dom';
import UserIcon from '../../images/user-1.svg';
import PeopleIcon from '../../images/people.svg';
import agentIcon from '../../images/agentIcon.svg';
import React, { useEffect, useState } from 'react';
import BrandLogo from '../../images/logo.svg';

const SignUpQuestion = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <main className="sign-up-form-container-2">
      <div className="logo brand-logo">
        <img src={BrandLogo} alt="" />
      </div>
      <header className="question-header">
        <h2 style={{ fontSize: '32px' }}>How Would You Like To Join Hiyalo?</h2>
        {/* <p>
          Already have an account?
          <Link to="/another-sign-in">Sign In</Link>
        </p> */}
      </header>
      <div className="sign-form-tabs signup-question-tab">
        <Link to="/another-sign-up">
          <div className="tenant-tab">
            <div className="tab-name">
              <span>
                <img src={PeopleIcon} alt="" />
              </span>
              <p>Sign Up as an Tenant</p>
            </div>

            <iconify-icon
              class="right-icon"
              icon="material-symbols:chevron-right"
            ></iconify-icon>
          </div>
        </Link>

        <Link to="/another-sign-up">
          <div className="tenant-tab">
            <div className="tab-name">
              <span>
                <img src={agentIcon} alt="" />
              </span>
              <p>Sign Up as an Agent</p>
            </div>

            <iconify-icon
              class="right-icon"
              icon="material-symbols:chevron-right"
            ></iconify-icon>
          </div>
        </Link>

        <Link to="/another-sign-up">
          <div className="tenant-tab">
            <div className="tab-name">
              <span>
                <img src={UserIcon} alt="" />
              </span>
              <p>Sign Up as a Landloard</p>
            </div>

            <iconify-icon
              class="right-icon"
              icon="material-symbols:chevron-right"
            ></iconify-icon>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default SignUpQuestion;
