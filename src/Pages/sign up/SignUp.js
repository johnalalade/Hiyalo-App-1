import React from 'react';
import { useState } from 'react';
import './sign-up.css';
import SignNavBar from '../../components/sign up navbar/SignUpNavbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PageLoader from '../../components/Loader/PageLoader';
import { GoogleLogin } from '@react-oauth/google';

const SignUp = () => {
  const url =
    'https://hiyalo-backend.herokuapp.com/agents/agent-gateway/register';
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const { first_name, last_name, email, phone, password } = formData;

  const navigate = useNavigate();

  const handle = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const submit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios.post(url, formData).then((res) => {
      if (res.data.message === "success") {
        // console.log(res);
        setLoading(false);
        localStorage.setItem('id', res.data.id);
        navigate('/dashboard');
      } else {
        alert(res.data.message, res.data.details)
        setLoading(false);
      }
    });
  };

  const onGoogleSuccess = (res) => {
    console.log(res);
    setLoading(true);

    axios.post('https://hiyalo-backend.herokuapp.com/agents/agent-gateway/google-auth', {
      token: res.credential
    })
      .then((resp) => {
        if (resp.data.message === "success") {
          console.log(resp.data);
          setLoading(false);
          localStorage.setItem('id', resp.data.id);
          navigate('/dashboard');
        } else {
          alert(`${resp.data.message}, ${resp.data.details}`)
          setLoading(false);
        }
      });

  };

  const onGoogleFailure = (res) => {
    console.log(res);
  };

  if (loading) {
    return (
      <div className="spinner">
        <PageLoader />
      </div>
    );
  }

  return (
    <section className="sign-up-body">
      <SignNavBar />
      <div class="sign-up-form-container">
        <header>
          <h3>Welcome To Hiyalo Agents</h3>
          <p>
            Let’s get you started. Already have an account?{' '}
            <Link to="/sign-in-agent">Sign in</Link>
          </p>
        </header>
        <main>
          <form className="sign-up-form">
            <div className="full-name">
              <span>
                <label for="fullName"> First Name </label>
                <input
                  type="text"
                  placeholder="John"
                  id="fullName"
                  name="first_name"
                  value={first_name}
                  onChange={(event) => handle(event)}
                />
              </span>
              <span>
                <label for="fullName"> Last Name </label>
                <input
                  type="text"
                  placeholder="Alalade"
                  id="fullName"
                  name="last_name"
                  value={last_name}
                  onChange={(event) => handle(event)}
                />
              </span>
            </div>

            <label for="email">Email</label>
            <input
              type="email"
              placeholder="enter your email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => handle(event)}
            />

            <label for="phone number">Phone Number</label>
            <span class="phone-number">
              <input
                type="tel"
                placeholder="800000000"
                id="tel"
                name="phone"
                value={phone}
                onChange={(event) => handle(event)}
              />
              <p>+234 &nbsp; |</p>
            </span>

            <label for="password">Password</label>
            <input
              type="password"
              placeholder="enter your password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => handle(event)}
            />

            <div class="policy-checkbox">
              <input
                type="checkbox"
                id="policy-check"
                onChange={(event) => handle(event)}
              />
              <p>
                By creating an account you agree to the terms of and privacy
                policy?
              </p>
            </div>
            <button onClick={(e) => submit(e)} type="submit">
              Get Started
            </button>
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
                buttonText="Login"
                onSuccess={onGoogleSuccess}
                onError={onGoogleFailure}
                cookiePolicy={'single_host_origin'}
              />
            </button>
          </div>

        </main>
      </div>
    </section>
  );
};

export default SignUp;
