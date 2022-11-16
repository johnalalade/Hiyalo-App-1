import React from 'react';
import './sign-up-agent-tenant.css';
const SignUpTenant = () => {
  return (
    <section className="sign-up-form-container tenant-sign-up-form">
      <main>
        <form className="sign-up-form">
          <div className="full-name">
            <span>
              <label for="fullName"> First Name </label>
              <input type="text" placeholder="John" id="fullName" />
            </span>
            <span>
              <label for="fullName"> Last Name </label>
              <input
                type="text"
                placeholder="Alalade"
                id="fullName"
                name="last_name"
              />
            </span>
          </div>

          <label for="email">Email</label>
          <input
            type="email"
            placeholder="enter your email"
            id="email"
            name="email"
          />

          <label for="phone number">Phone Number</label>
          <span class="phone-number">
            <input type="tel" placeholder="800000000" id="tel" />
            <p>+234 &nbsp; |</p>
          </span>

          <label for="password">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            id="password"
          />

          <div class="policy-checkbox">
            <input type="checkbox" id="policy-check" />
            <p>
              By creating an account you agree to the terms of and privacy
              policy?
            </p>
          </div>
          <button>Continue As A Tenant</button>
        </form>

        <div class="or-container">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <div class="sign-up-google">
          <button type="submit">
            <iconify-icon
              class="google-icon"
              icon="flat-color-icons:google"
            ></iconify-icon>
            <p>Sign Up with Google</p>
            {/* <GoogleLogin class="sign-up-google" /> */}
          </button>
        </div>
      </main>
    </section>
  );
};

export default SignUpTenant;
