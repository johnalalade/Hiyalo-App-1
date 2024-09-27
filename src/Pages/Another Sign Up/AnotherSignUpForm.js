import React from 'react';
import { Link } from 'react-router-dom';
import './another-sign-up.css';
import BrandLogo from '../../images/logo.svg';

const AnotherSignUpForm = () => {
  return (
    <main className="sign-up-form-container-2">
      <div className="logo brand-logo">
        <Link to="/" class="logo">
          <img src={BrandLogo} alt="" />
        </Link>
      </div>
      <header>
        <h2>Sign Up</h2>
        <p>
          Already have an account?
          <Link to="/another-sign-in">Sign In</Link>
        </p>
      </header>

      <form action="">
        <div className="google-sign-up">
          <button>
            <iconify-icon
              class="google-icon"
              icon="flat-color-icons:google"
            ></iconify-icon>
            <p>Sign Up with Google</p>
          </button>
        </div>
        <div class="or-container another-or-container">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className="form-full-name">
          <span>
            <label htmlFor="">First Name</label>
            <input type="text" name="" placeholder="Enter Your first name" />
          </span>
          <span>
            <label htmlFor="">Last Name</label>
            <input type="text" name="" placeholder="Enter Your last name" />
          </span>
        </div>

        <span>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="Enter your email address" />
        </span>
        <span className="phone-span">
          <label for="phone number">Phone Number</label>
          <span class="phone-number phone2">
            <input type="tel" placeholder="800000000" id="tel" />
            <p>+234 &nbsp; |</p>
          </span>
        </span>

        <span>
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </span>
      </form>

      <div className="form-cta">
        <button>Sign Up</button>

        {/* <p>Already have an account?</p> */}
      </div>
    </main>
  );
};

export default AnotherSignUpForm;
