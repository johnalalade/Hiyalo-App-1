import React from 'react'
import { Link } from 'react-router-dom';
import SignNavBar from '../../components/sign up navbar/SignUpNavbar'
import './tenant-sign-up.css'
import { GoogleLogin } from '@react-oauth/google';


const TenantSignIn = () => {
  return (
    <section className="sign-up-body">
    <SignNavBar />
    <div class="sign-up-form-container tenant-sign-up-container">
      <header>
        <h3>Sign In As A Tenant</h3>
        <p>
          Let’s get you started. Already have an account?{' '}
          <Link to="/sign-in-agent">Sign in</Link>
        </p>
      </header>
      <main>
        <form className="sign-up-form">


          <label for="email">Email</label>
          <input
            type="email"
            placeholder="enter your email"
            id="email"
            name="email"
          />

    

          <label for="password">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            id="password"
            name="password"
          />

       
          <button type="submit">
            Get Started
          </button>

          <br/>
            <div class="forgot-password-text">
              <p>
                forgot password? <a href="www.google.com">click here</a>
              </p>
            </div>
        </form>

        <div class="or-container">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <div class="sign-up-google">
          <button type="submit" >
            {/* <iconify-icon
              class="google-icon"
              icon="flat-color-icons:google"
            ></iconify-icon> */}
            {/* <p>Sign Up with Google</p> */}
            <GoogleLogin
              class="sign-up-google"
              buttonText="Login">

              </GoogleLogin>
            
          </button>
        </div>

      </main>
    </div>
  </section>
  )
}

export default TenantSignIn;
