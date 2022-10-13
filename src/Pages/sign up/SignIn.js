import React from 'react';
import { useState } from 'react';
import './sign-up.css';
import SignNavBar from '../../components/sign up navbar/SignUpNavbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PageLoader from '../../components/Loader/PageLoader';
import { GoogleLogin } from '@react-oauth/google';

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const { userName, password } = formData;
  const url = 'https://hiyalo-backend.herokuapp.com/agents/agent-gateway/login';


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const submit = (e) => {
    setLoading(true)
    e.preventDefault();

    console.log(formData)
    axios.post(url, formData)
      .then((res) => {
        console.log(res);
        if (res.data.message === "success") {
          setLoading(false)
          localStorage.setItem("id", res.data.id)
          localStorage.setItem("email", res.data.response.email)
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
          localStorage.setItem('email', resp.data.user.email);
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
    )
  }


  return (
    <section className="sign-up-body">
      <SignNavBar />
      <div class="sign-up-form-container">
        <header>
          <h3>Welcome Back Hiyalo Agent</h3>
          <p>
            Let’s get you in. Don't have an account?{' '}
            <Link to="/sign-up-agent">Sign Up</Link>
          </p>
        </header>
        <main>
          <form class="sign-up-form">
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="enter your email"
              id="email"
              name="userName"
              value={userName}
              onChange={onChange}
            />

            <label for="password">Password</label>
            <input
              type="password"
              placeholder="enter your password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
            
            <button type="submit" onClick={submit} >Get Started</button>
            <br/>
            <div class="forgot-password-text">
              <p>
                forgot password? <a href="www.google.com">click here</a>{' '}
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

export default SignIn;
