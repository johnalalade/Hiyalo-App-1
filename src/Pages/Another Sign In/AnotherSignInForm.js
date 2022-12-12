import React from 'react';
import { Link } from 'react-router-dom';
import './another-sign-in.css';
import BrandLogo from '../../images/logo.svg';

const AnotherSignInForm = () => {
  return (
    <main className="sign-up-form-container-2">
      <div className="logo brand-logo">
        <img src={BrandLogo} alt="" />
      </div>
      <header>
        <h2>Sign In</h2>
        <p>
          Don’t have an account yet?
          <Link to="/another-sign-up">Sign Up</Link>
        </p>
      </header>

      <form action="">
        <div className="google-sign-up">
          <button>
            <iconify-icon
              class="google-icon"
              icon="flat-color-icons:google"
            ></iconify-icon>
            <p>Sign In with Google</p>
          </button>
        </div>
        <div class="or-container another-or-container">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <span>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="Enter your email address" />
        </span>

        <span>
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </span>

        <p className="forgot-password">Forgot Password?</p>
      </form>

      <div className="form-cta sign-in-form-cta">
        <button>Login</button>

        {/* <p>Don't have an account?</p> */}
      </div>
    </main>
  );
};

export default AnotherSignInForm;
